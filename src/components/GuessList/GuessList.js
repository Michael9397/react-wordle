import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessList({ guesses }) {
  const guessesRemaining = NUM_OF_GUESSES_ALLOWED - guesses.length;
  console.log(guesses);
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <p className="guess" key={guess.id}>
          {guess.letters.map(({letter, status}, i) => (
            <span className={`cell ${status}`} key={`${guess.id}-${i}`}>{ letter }</span>
          ))}
        </p>
      ))}
      {range(0, guessesRemaining).map((i) => (
        <p className="guess" key={i}>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
        </p>
      ))}
    </div>
  );
}

export default GuessList;
