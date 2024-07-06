import React, { useEffect, useRef, useState } from "react";
import Axios from "axios";
import "./css/main.css";

const Main = () => {
  const [animate, setAnimate] = useState(false);
  const [gameStart, setGameStart] = useState(false);
  const [showNumber, setShowNumber] = useState(0);
  const [lvalue, setLvalue] = useState(10);

  const [loading, setLoading] = useState(false);
  const [inputNum, setInputNum] = useState("");

  const [guessMode, setGuessMode] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const [score, setScore] = useState(0); 

  const inputRef = useRef(null);

  useEffect(() => {
    if (guessMode) {
      inputRef.current.focus();
    }
  }, [guessMode]);

  const handleClick = () => {
    setGuessMode(false);
    setAnimate(true);
    setGameStart(true);
    setLoading(true);
    setShowNumber(generateRandomNumber(lvalue));

    setTimeout(() => {
      setAnimate(false);
      setLoading(false);
      setGuessMode(true);
    }, 5000);
  };

  const generateRandomNumber = (lvalue) => {
    const r = Math.floor(Math.random() * lvalue);
    if (r < lvalue / 10 || r === lvalue) {
      return generateRandomNumber(lvalue);
    }
    setLvalue(lvalue * 10);
    return r;
  };

  const handleNewNumberClick = () => {
    if (inputNum) {
      if (parseInt(inputNum) === showNumber) {
        setInputNum("");
        setShowNumber(generateRandomNumber(lvalue));
        handleClick();
      } else {
        const Score = showNumber.toString().length - 1;
        setScore(Score);
        setGameOver(true);
        setGuessMode(false);
        postScore(Score);
        // setTimeout(() => {}, 3000);
      }
    }
  };

  const postScore = async (Score) => {
    try {
      const response = await Axios.post('http://localhost:4000/api/addscore', {
        username: "Anonymous", 
        points: Score,
      }, { withCredentials: true });
      console.log("Score posted:", response.data);
    } catch (error) {
      console.error("Error posting score:", error);
    }
  };


  const restartGame = () => {
    setGameOver(false);
    setLvalue(10);
    setGameStart(false);
    setGuessMode(false);
    setInputNum("");
  };

  const checkError = () => {
    const correctNo = showNumber.toString().split("");
    const wrongNo = inputNum.toString().split("");
    const maxLength = Math.max(correctNo.length, wrongNo.length);
    for (let i = 0; i < maxLength; i++) {
      if (correctNo[i] !== wrongNo[i]) {
        return [
          wrongNo.slice(0, i).join(""),
          wrongNo.slice(i, wrongNo.length).join(""),
        ];
      }
    }
    return ["", ""];
  };

  return (
    <>
      {!gameOver ? (
        <div className={`game-container ${animate ? "animate-color" : ""}`}>
          {!gameStart && (
            <div className="start">
              <p>Start The Game?</p>
              <button className="button-49" onClick={handleClick}>
                START
              </button>
            </div>
          )}

          {loading && (
            <>
              <div className="the-number">
                <p>{showNumber}</p>
              </div>
              <div className="loading-container">
                <div className="loading-box">
                  <div className="loading"></div>
                </div>
              </div>
            </>
          )}

          {guessMode && (
            <div className="the-input">
              <p className="level-counter">
                Level: {showNumber.toString().length}
              </p>
              <input
                ref={inputRef}
                type="number"
                placeholder="What was the number?"
                value={inputNum}
                onChange={(e) => setInputNum(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") handleNewNumberClick();
                }}
              />
              <button className="button-37" onClick={handleNewNumberClick}>
                Check
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="game-container wrong-color">
          <div className="game-over">
            <p className="score-board">The number was</p>
            <p className="score">{showNumber}</p>
            <p className="score-board score-boardc">Your answer</p>
            <div className="correction">
              <p className="score">{checkError()[0]}</p>
              <s>{checkError()[1]}</s>
            </div>
            <p className="score-board">Your Score</p>
            <p className="score">{score}</p>
            <button className="button-52" onClick={restartGame}>
              RESTART
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
