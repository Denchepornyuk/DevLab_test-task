import React from 'react';
import './trackerList.scss';
import PropTypes from 'prop-types';
import TrackerItem from '../TrackerItem/TrackerItem';

const TrackerList = ({ trackers, handleTimer, delTracker }) => {
  return (
    <div className="tracker__list">
      {trackers.map(item => (
        <TrackerItem
          track={item}
          handleTimer={handleTimer}
          delTracker={delTracker}
          key={item.id}
        />
      ))}
    </div>
  );
};

TrackerList.propTypes = {
  trackers: PropTypes.arrayOf(PropTypes.shape({})),
  handleTimer: PropTypes.func.isRequired,
  delTracker: PropTypes.func.isRequired,
};

TrackerList.defaultProps = {
  trackers: [],
};

export default TrackerList;
