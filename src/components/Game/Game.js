import React from 'react';
import GameInputs from "../GameInputs";
import GuessList from "../GuessList";
import EndBanner from "../EndBanner";
import { NUM_OF_GUESSES_ALLOWED} from "../../constants";


function Game({ guesses, setGuesses, answer }) {


  let hasWon = false;
  if (guesses.length) {
    const mostRecentGuess = guesses[guesses.length - 1].guess;
    hasWon = mostRecentGuess === answer;
  }
  const isGameOver = guesses.length === NUM_OF_GUESSES_ALLOWED || hasWon;

  return (
    <>
      <GuessList
        guesses={guesses}
      />
      <GameInputs
        isGameOver={isGameOver}
        answer={answer}
        guesses={guesses}
        setGuesses={setGuesses}
      />
      {isGameOver && (
        <EndBanner
          hasWon={hasWon}
          answer={answer}
          guesses={guesses}
        />
      )}
    </>
  );
}

export default Game;
