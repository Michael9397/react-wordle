import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';

function Header({ setGuesses, setAnswer }) {

  function resetGame() {
    setGuesses([]);
    setAnswer(sample(WORDS));
  }

  return (
    <header>
      <h1>
        <span style={{marginRight: '2rem'}}>Word Game</span>

        <button onClick={resetGame} title={`Restart Game`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
               className="feather feather-rotate-cw">
            <polyline points="23 4 23 10 17 10"></polyline>
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
          </svg>
        </button>
      </h1>
    </header>
  );
}

export default Header;
