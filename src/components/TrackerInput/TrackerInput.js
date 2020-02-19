import React from 'react';
import PropTypes from 'prop-types';
import './trackerInput.scss';

const TrackerInput = ({ newTracker, setNewTracker, addTracker }) => (
  <form
    className="tracker__add-new"
    onSubmit={e => addTracker(e)}
  >
    <input
      type="text"
      value={newTracker}
      onChange={({ target }) => (
        setNewTracker(target.value))
      }
      className="tracker__input"
      placeholder="Enter tracker name"
    />
    <button
      type="button"
      className="tracker__button"
      onClick={addTracker}
    >
      <img
        src="./images/play_icon.svg"
        alt="play icon"
        className="tracker__play"
      />
    </button>
  </form>
);

TrackerInput.propTypes = {
  newTracker: PropTypes.string,
  setNewTracker: PropTypes.func.isRequired,
  addTracker: PropTypes.func.isRequired,
};

TrackerInput.defaultProps = {
  newTracker: '',
};

export default TrackerInput;
