import React, { useState, useRef } from 'react';
import Pollresults from './Pollresults';

const Poll = () => {
  const [vote, setVote] = useState({
    virtualdom: 10,
    jsx: 20,
    reacthooks: 11,
    lifecyclehooks: 10,
    showResults: false
  });

  const virtualdomRef = useRef();
  const jsxRef = useRef();
  const reacthooksRef = useRef();
  const lifecyclehooksRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    if (virtualdomRef.current.checked) {
      virtualdomRef.current.checked = false;
    } else if (jsxRef.current.checked) {
      jsxRef.current.checked = false;
    } else if (reacthooksRef.current.checked) {
      reacthooksRef.current.checked = false;
    } else if (lifecyclehooksRef.current.checked) {
      lifecyclehooksRef.current.checked = false;
    }
    setVote({
      virtualdom: vote.virtualdom,
      jsx: vote.jsx,
      reacthooks: vote.reacthooks,
      lifecyclehooks: vote.lifecyclehooks,
      showResults: true
    });
  };

  return (
    <>
      <div className="poll-panel">
        <div className="poll-heading">
          What is Your Favorite Feature in React
        </div>
        <div className="poll-body">
          <form onSubmit={handleSubmit}>
            <div className="poll-item">
              <input
                type="radio"
                name="favoritefeature"
                value="virtualdom"
                ref={virtualdomRef}
                onChange={e => {
                  setVote({
                    virtualdom: vote.virtualdom + 1,
                    jsx: vote.jsx,
                    reacthooks: vote.reacthooks,
                    lifecyclehooks: vote.lifecyclehooks
                  });
                }}
              />
              <label>Virtual DOM</label>
            </div>
            <div className="poll-item">
              <input
                type="radio"
                name="favoritefeature"
                value="jsx"
                ref={jsxRef}
                onChange={e => {
                  setVote({
                    virtualdom: vote.virtualdom,
                    jsx: vote.jsx + 1,
                    reacthooks: vote.reacthooks,
                    lifecyclehooks: vote.lifecyclehooks
                  });
                }}
              />
              <label>JSX</label>
            </div>
            <div className="poll-item">
              <input
                type="radio"
                name="favoritefeature"
                value="reacthooks"
                ref={reacthooksRef}
                onChange={e => {
                  setVote({
                    virtualdom: vote.virtualdom,
                    jsx: vote.jsx,
                    reacthooks: vote.reacthooks + 1,
                    lifecyclehooks: vote.lifecyclehooks
                  });
                }}
              />
              <label>React Hooks</label>
            </div>
            <div className="poll-item">
              <input
                type="radio"
                name="favoritefeature"
                value="lifecyclehooks"
                ref={lifecyclehooksRef}
                onChange={e => {
                  setVote({
                    virtualdom: vote.virtualdom,
                    jsx: vote.jsx,
                    reacthooks: vote.reacthooks,
                    lifecyclehooks: vote.lifecyclehooks + 1
                  });
                }}
              />
              <label>LifeCycle Hooks</label>
            </div>
            <div className="poll-footer">
              <button>Vote</button>
            </div>
          </form>
        </div>
      </div>
      <Pollresults vote={vote} />
    </>
  );
};

export default Poll;
