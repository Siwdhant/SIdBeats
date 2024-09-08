import React, { useRef } from 'react';

export default function TrackCard({ track, onPlay }) {
  const audioRef = useRef(null);

  const handlePlay = () => {
    onPlay(audioRef.current);
  };

  return (
    <div className="col-lg-3 col-md-6 py-2">
      <div className="card">
        <img
          src={track.album.images.length > 1 ? track.album.images[1].url : 'fallback-image-url'}
          className="card-img-top"
          alt="Album Cover"
        />
        <div className="card-body">
          <h5 className="card-title">{track.name}</h5>
          <p className="card-text">
            Artist: {track.album.artists[0].name}
          </p>
          <audio
            ref={audioRef}
            src={track.preview_url || 'fallback-preview-url'}
            controls
            className='w-100'
            onPlay={handlePlay}
          ></audio>
        </div>
      </div>
    </div>
  );
}
