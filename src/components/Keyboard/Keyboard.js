import React from "react";

function Keyboard({ guesses, handleBackspace, handleInput, handleSubmit, isGameOver}) {
  let rows = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];
  let marginVals = ['0', '1.25rem', '0'];

  function getLetterStatus(keyboardLetter) {
    let foundStatuses = [];
    for (let guess of guesses) {
      for (let {letter, status} of guess.letters) {
        if (keyboardLetter === letter && status === 'correct') {
          return status;
        }
        if (keyboardLetter === letter) {
          foundStatuses.push(status);
        }
      }
    }
    if (foundStatuses.includes('misplaced')) {
      return 'misplaced';
    }
    if (foundStatuses.includes('incorrect')) {
      return 'incorrect';
    }
    return 'default';
  }


  return (
    <>
      <div id={"keyboard"}>
        {rows.map((row, rowsIndex) => (
          <div key={rowsIndex} className="keyboard-row" style={{ marginLeft: marginVals[rowsIndex]}}>
            {row.split('').map((letter, buttonIndex) => (
              <React.Fragment key={buttonIndex}>
                {rowsIndex === 2 && buttonIndex === 0 && (
                  <button
                    className="enter-button"
                    disabled={isGameOver}
                    onClick={event => handleSubmit(event)}
                  > Enter </button>
                )}
                <button

                  disabled={isGameOver}
                  onClick={()=> handleInput(letter)}
                  className={`keyboard-button ${getLetterStatus(letter)}`}
                >
                  {letter}
                </button>
                {rowsIndex === 2 && buttonIndex === 6 && (
                  <button
                    className="backspace-button"
                    disabled={isGameOver}
                    onClick={()=> handleBackspace()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                         className="feather feather-arrow-left">
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                  </button>
                )}
              </ React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Keyboard;
