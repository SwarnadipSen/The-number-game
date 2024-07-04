import React, { useEffect, useRef, useState } from "react";
import "./css/main.css";

const Main = () => {
  const [animate, setAnimate] = useState(false);
  const [gameStart, setGameStart] = useState(false);
  const [showNumber, setShowNumber] = useState(0);
  const [lvalue, setLvalue] = useState(100);

  const [loadingber, setLoadingber] = useState(false);
  const [input_num, setInput_num] = useState("");

  const [guessMode, setGuessmode] = useState(false);
  const [gameover, setGameover] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    if (guessMode) {
      inputRef.current.focus();
    }
  }, [guessMode]);

  const handleClick = () => {
    setGuessmode(false);
    setAnimate(true);
    setGameStart(true);
    setLoadingber(true);
    setShowNumber(random_num(lvalue));

    setTimeout(() => {
      setAnimate(false);
      setLoadingber(false);
      setGuessmode(true);
    }, 5000);
  };

  function random_num(lvalue) {
    const r = Math.round(Math.random() * lvalue);
    if (r < lvalue / 10 || r === lvalue) {
      return random_num(lvalue);
    }
    setLvalue(lvalue * 10);
    return r;
  }

  const handleNewNumberClick = () => {
    if (input_num) {
      if (parseInt(input_num) === showNumber) {
        setInput_num("");
        setShowNumber(random_num(lvalue));
        handleClick();
      } else {
        setGameover(true);
        setGuessmode(false);
        setTimeout(() => {}, 3000);
      }
    }
  };

  const restart = () => {
    setGameover(false);
    setLvalue(10);
    setGameStart(false);
    setGuessmode(false);
    setInput_num("");
  };

  function check_error() {
    const correct_no = showNumber.toString().split("");
    const wrong_no = input_num.toString().split("");

    for (let i = 0; i < correct_no.length; i++) {
      if (correct_no[i] !== wrong_no[i]) {
        return [
          wrong_no.slice(0, i).join(""),
          wrong_no.slice(i, wrong_no.lengt).join(""),
        ];
      }
    }
  }

  return (
    <>
      {!gameover && (
        <div
          className={`game-container ${animate ? "animate-color" : ""}
           
      `}
        >
          <div className={`${gameStart ? "hide" : "start"}`}>
            <p>Start The Game?</p>
            <button className="button-49" onClick={handleClick}>
              START
            </button>
          </div>

          {loadingber && (
            <div className="the-number">
              <p>{showNumber}</p>
              <div className="loading"></div>
            </div>
          )}

          {guessMode && (
            <div className="the-input">
              <input
                ref={inputRef}
                type="number"
                placeholder="What was the number?"
                value={input_num}
                onChange={(e) => setInput_num(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") handleNewNumberClick();
                }}
              />

              <button class="button-37" onClick={handleNewNumberClick}>
                Check
              </button>
            </div>
          )}
        </div>
      )}

      {gameover && (
        <div className="game-container wrong-color">
          <div className="game-over">
            <p className="score-board">The number was</p>
            <p className="score">{showNumber}</p>
            <p className="score-board score-boardc">Your answer</p>
            <div className="correction">
              <p className="score"> {check_error()[0]}</p>
              <s>{check_error()[1]}</s>
            </div>
            <p className="score-board">Your Score</p>
            <p className="score">{showNumber.toString().length - 1}</p>
            <button className="button-52" onClick={restart}>
              RESTART
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
