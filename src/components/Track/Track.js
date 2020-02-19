import React from 'react';
import PropTypes from 'prop-types';
import './track.scss';

const Track = ({ timer, track, start, setStart, delTracker }) => (
  <div
    className={start
      ? 'track__item track__item--active'
      : 'track__item'
    }
  >
    <h3
      className="track__name"
      title={track.name}
    >
      {track.name}
    </h3>
    <p className="track__timer">
      {track.timer}
    </p>
    <button
      type="button"
      className="track__button"
      onClick={() => setStart(!start)}
    >
      {start
        ? <img src="./images/pause.svg" alt="pause" />
        : <img src="./images/play.svg" alt="play" />
      }
    </button>
    <button
      type="button"
      className="track__button"
      onClick={() => delTracker(track.id)}
    >
      <img src="./images/remove.jpg" alt="play" />
    </button>
  </div>
);

Track.propTypes = {
  timer: PropTypes.string.isRequired,
  track: PropTypes.objectOf.isRequired,
  start: PropTypes.bool.isRequired,
  setStart: PropTypes.func.isRequired,
  delTracker: PropTypes.func.isRequired,
};

export default Track;
