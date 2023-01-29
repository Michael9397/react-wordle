import React from "react";

function GuessInput({ guess, handleBackspace, handleInput, handleSubmit, isGameOver }) {


  function checkInput(event) {
    if (event.nativeEvent.inputType === "deleteContentBackward") {
      handleBackspace();
      return;
    }
    handleInput(event.target.value);

  }
  return (
    <form className="guess-input-wrapper" onSubmit={event=> handleSubmit(event)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={event => checkInput(event)}
        disabled={ isGameOver }
      />
    </form>
  );
}

export default GuessInput;
