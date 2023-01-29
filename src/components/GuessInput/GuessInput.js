import React from "react";
import { checkGuess} from "../../game-helpers";

function GuessInput({ guesses, setGuesses, answer, isGameOver }) {
  const [guess, setGuess] = React.useState('');
  function handleInput(event) {
    let nextValue = event.target.value;
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
    <form className="guess-input-wrapper" onSubmit={event=> handleSubmit(event)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => handleInput(event)}
        disabled={ isGameOver }
      />
    </form>
  );
}

export default GuessInput;
