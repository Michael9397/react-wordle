import React from "react";
import TextInput from "../TextInput";
import Keyboard from "../Keyboard";
import { checkGuess } from "../../game-helpers";

function GameInputs({isGameOver, answer, guesses, setGuesses}) {
  const [guess, setGuess] = React.useState('');

  function handleBackspace() {
    setGuess(guess.slice(0, -1));
  }

  function handleInput(letterOrWord) {
    let lastLetter = letterOrWord.slice(-1);
    let nextValue = guess + lastLetter;
    nextValue = nextValue.toUpperCase().slice(0, 5);
    setGuess(nextValue);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (guess.length !== 5) {
      window.alert('Please enter a 5-letter word.');
      return;
    }
    const letters = checkGuess(guess, answer);
    const nextGuess = { guess, id: Date.now(), letters };
    const nextGuesses = [...guesses, nextGuess];
    setGuesses(nextGuesses);
    setGuess('');
  }

  return (
    <>
      <TextInput
        guess={guess}
        isGameOver={isGameOver}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        handleBackspace={handleBackspace}
      />
    <Keyboard
      guesses={guesses}
      isGameOver={isGameOver}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      handleBackspace={handleBackspace}
    />
  </>
  );
}

export default GameInputs;
