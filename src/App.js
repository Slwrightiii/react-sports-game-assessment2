import React from "react";
import "./App.css";
import Team from "./components/team/Team";
import Game from "./components/game/Game";
import Scoreboard from "./components/scoreboard/Scoreboard";
import img1 from "../src/assets/images/gazelle3.jpg";
import img2 from "../src/assets/images/frog2.jpg";
import img3 from "../src/assets/images/salamander.jpg";
import img4 from "../src/assets/images/amardillo.jpg";

function App() {
  const gazelles = {
    name: "Thomsonville Gazelles",
    logoSrc: { img1 },
  };

  const frogs = {
    name: "Younge City Frogs",
    logoSrc: { img2 },
  };

  const salamanders = {
    name: "ShakerTown Salamanders",
    logoSrc: { img3 },
  };
  const amardillos = {
    name: "Fort Brannon Amardillos",
    logoSrc: { img4 },
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
