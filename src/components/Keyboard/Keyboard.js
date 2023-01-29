import React from "react";

function Keyboard({ guesses}) {
  let rows = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];
  let marginVals = ['0', '1.25rem', '2.5rem'];

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
        {rows.map((row, index) => (
          <div key={index} className="keyboard-row" style={{ marginLeft: marginVals[index]}}>
            {row.split('').map((letter, index) => (
              <div key={index} className={`keyboard-button ${getLetterStatus(letter)}`}>
                {letter}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Keyboard;
