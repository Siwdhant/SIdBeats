import React from 'react';
import TrackCard from './Trackcard';

function TrackList({ tracks, onPlay }) {
  return (
    <div className="track-container">
      <div className="row">
        {tracks.map((track) => (
          <TrackCard key={track.id} track={track} onPlay={onPlay} />
        ))}
      </div>
    </div>
  );
}

export default TrackList;
