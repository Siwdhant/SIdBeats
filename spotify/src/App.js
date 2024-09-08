import { useState, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TrackList from './components/Tracklist';

function App() {
  const [keyword, setKeyword] = useState('');
  const [tracks, setTracks] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [playingAudio, setPlayingAudio] = useState(null); // Track the currently playing audio
  const audioRef = useRef(null);

  const getTracks = async () => {
    try {
      let response = await fetch(`https://v1.nocodeapi.com/siwdhant/spotify/pLmgIwgFaPSzECaQ/search?q=${keyword}&type=track`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      let data = await response.json();
      setTracks(data.tracks.items);
      setHasSearched(true);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const handlePlay = (audioElement) => {
    if (playingAudio && playingAudio !== audioElement) {
      playingAudio.pause(); // Pause the currently playing audio
    }
    if (audioElement) {
      audioElement.play(); // Play the new audio
      setPlayingAudio(audioElement); // Update the state to the new audio element
    } else {
      setPlayingAudio(null); // No audio playing
    }
  };

  return (
    <div className={`app-container ${hasSearched ? 'no-bg-image' : ''}`}>
      <Navbar keyword={keyword} setKeyword={setKeyword} getTracks={getTracks} />
      <TrackList tracks={tracks} onPlay={handlePlay} />
    </div>
  );
}

export default App;
