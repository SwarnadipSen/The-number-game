import React from "react";
import "./css/scoreboard.css";
import Chart from "./Chart";

const Scoreboard = () => {
  return (
    <>
      <div className="score-container">
        <div className="statistics">
          <span className="titles">Statistics</span>
          <div className="stats"><Chart/></div>
        </div>
        <div className="score-borad">
          <span className="titles">Scoreboard</span>
          <table className="score-table">
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Point</th>
            </tr>
            <tr>
              <td>1</td>
              <td>username</td>
              <td>16</td>
            </tr>
            <tr>
              <td>2</td>
              <td>username</td>
              <td>10</td>
            </tr>
            <tr>
              <td>3</td>
              <td>username</td>
              <td>16</td>
            </tr>
            <tr>
              <td>4</td>
              <td>username</td>
              <td>10</td>
            </tr>
            <tr>
              <td>5</td>
              <td>username</td>
              <td>16</td>
            </tr>
            <tr>
              <td>6</td>
              <td>username</td>
              <td>10</td>
            </tr>
            <tr>
              <td>7</td>
              <td>username</td>
              <td>16</td>
            </tr>
            <tr>
              <td>8</td>
              <td>username</td>
              <td>10</td>
            </tr>
            <tr>
              <td>9</td>
              <td>username</td>
              <td>16</td>
            </tr>
            <tr>
              <td>10</td>
              <td>username</td>
              <td>10</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Scoreboard;
