/* eslint-disable padding-line-between-statements */
import React, { useState, useEffect } from 'react';
import './tracker.scss';
import TrackerInput from '../TrackerInput/TrackerInput';
import TrackerList from '../TrackerList/TrackerList';

const Tracker = () => {
  const [trackers, setTrackers] = useState(
    JSON.parse(localStorage.getItem('Trackers')) || []
  );
  const [newTracker, setNewTracker] = useState('');

  useEffect(() => (
    localStorage.setItem('Trackers', JSON.stringify(trackers))
  ), [trackers]);

  const getDate = () => {
    const date = new Date();

    let dd = date.getDate();
    dd = dd < 10 ? `0${dd}` : dd;

    let mm = date.getMonth() + 1;
    mm = mm < 10 ? `0${mm}` : mm;

    let yy = date.getFullYear() % 100;
    yy = yy < 10 ? `0${yy}` : yy;

    return `${dd}.${mm}.${yy}`;
  };

  const addTracker = (e) => {
    e.preventDefault();

    const date = getDate();

    setTrackers([
      {
        id: +new Date(),
        name: newTracker === '' ? date : newTracker,
        timer: '00:00:00',
      },
      ...trackers,
    ]);

    setNewTracker('');
  };

  const handleTimer = (id, time) => (
    setTrackers(
      trackers.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            timer: time,
          };
        }

        return item;
      })
    )
  );

  const delTracker = (id) => {
    setTrackers(
      trackers.filter(track => track.id !== id)
    );
  };

  return (
    <section className="tracker container">
      <h1 className="tracker__title">
        tracker
      </h1>
      <TrackerInput
        newTracker={newTracker}
        setNewTracker={setNewTracker}
        addTracker={addTracker}
      />

      <TrackerList
        trackers={trackers}
        handleTimer={handleTimer}
        delTracker={delTracker}
      />
    </section>
  );
};

export default Tracker;
