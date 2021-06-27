import React, { useState, useRef } from 'react';

const Pollresults = ({ vote }) => {
	
  if (vote.showResults) {
    return (
      <div className="poll-panel">
        <div className="poll-heading"> Poll Results</div>
        <p className="poll-item">Virtual DOM : {vote.virtualdom} Votes</p>
        <p className="poll-item">JSX : {vote.jsx} Votes</p>
        <p className="poll-item">React Hooks : {vote.reacthooks} Votes</p>
        <p className="poll-footer">
          LifeCycle Hooks : {vote.lifecyclehooks} Votes
        </p>
      </div>
    );
  }
  return '';
  
};

export default Pollresults;
