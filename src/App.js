import React from "react";
import "./App.css";
import Team from "./components/team/Team";
import Game from "./components/game/Game";
import Scoreboard from "./components/scoreboard/Scoreboard";

function App() {
  const gazelles = {
    name: "Thomsonville Gazelles",
    logoSrc: "./assets/images/gazelle3.jpg",
  };

  const frogs = {
    name: "Younge City Frogs",
    logoSrc: "./assets/images/frog2.jpg",
  };

  const salamanders = {
    name: "ShakerTown Salamanders",
    logoSrc: "./assets/images/salamander.jpg",
  };
  const amardillos = {
    name: "Fort Brannon Amardillos",
    logoSrc: "./assets/images/amardillo.jpg",
  };
  return (
    <div className="App">
      <Team />
      <Game
        venue="Westinghouse Park"
        homeTeam={frogs}
        visitingTeam={gazelles}
      />

      <Game
        venue="Steinmitz Place"
        homeTeam={salamanders}
        visitingTeam={amardillos}
      />

      <Scoreboard />
    </div>
  );
}

export default App;
