import Game from '../Game';
import Header from '../Header';
import React from "react";
import { sample } from '../../utils';
import { WORDS } from '../../data';
function App() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  return (
    <div className="wrapper">
      <Header
        setGuesses={setGuesses}
        setAnswer={setAnswer}
      />

      <div className="game-wrapper">
        <Game
          guesses={guesses}
          setGuesses={setGuesses}
          answer={answer}
        />
      </div>
    </div>
  );
}

export default App;
