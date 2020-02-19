import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Track from '../Track/Track';

const TrackerItem = ({ track, handleTimer, delTracker }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval;

    if (start) {
      interval = setInterval(() => {
        setSeconds(prevState => prevState + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [start]);

  useEffect(() => {
    if (seconds === 60) {
      setMinutes(prevState => prevState + 1);
      setSeconds(0);
    }

    if (minutes === 60) {
      setHours(prevState => prevState + 1);
      setMinutes(0);
    }

    handleTimer(track.id, `
      ${validTime(hours)}:${validTime(minutes)}:${validTime(seconds)}
    `);
  }, [seconds]);

  const validTime = t => (
    t < 10 ? `0${t}` : t
  );

  return (
    <Track
      track={track}
      start={start}
      setStart={setStart}
      delTracker={delTracker}
    />
  );
};

TrackerItem.propTypes = {
  track: PropTypes.objectOf.isRequired,
  handleTimer: PropTypes.func.isRequired,
  delTracker: PropTypes.func.isRequired,
};

export default TrackerItem;
