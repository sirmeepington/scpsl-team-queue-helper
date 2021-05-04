import React from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./App.css";
import { QueueDisplay } from "./QueueDisplay";
import Team from "./Team";
import { TeamButton } from "./TeamButton";
import { TeamExplainer } from "./TeamExplainer";

const teams: Team[] = [
  { color: "red", name: "SCP", id: 0 },
  { color: "blue", name: "MTF", id: 1 },
  { color: "green", name: "Chaos", id: 2 },
  { color: "yellow", name: "Scientist", id: 3 },
  { color: "darkorange", name: "Class-D", id: 4 },
  { color: "grey", name: "Spectator", id: 5 },
  { color: "lime", name: "Tutorial", id: 6 },
];

const getFromId = (id: number): Team => {
  for (let i = 0; i < teams.length; i++) {
    let iTeam = teams[i];
    if (iTeam.id === id) {
      return iTeam;
    }
  }
  return getFromId(5);
};

const getFromString = (str: string): Team[] => {
  let teamArr = Array.from(str);
  let tempArray: Array<Team> = [];
  teamArr.forEach((element) => {
    let elementId = parseInt(element);
    tempArray.push(getFromId(elementId));
  });
  return tempArray;
};

const App = () => {
  const [state, setState] = useState<Team[]>(
    getFromString("40143140314414041340")
  );

  const handleUpdateQueue = (t: Team) => {
    setState([...state, t]);
  };

  return (
    <div className="App">
      <Container>
        <div className="header">
          <QueueDisplay content={state.map((x) => x.id).join("")} />
        </div>
        <div>
          <div className="m-3">Add:</div>
          <div>
            {teams.map((x) => (
              <TeamButton
                team={x}
                updateQueue={handleUpdateQueue}
                key={x.name}
              />
            ))}
          </div>
          <div className="m-3">
            <Button
              className="m-1"
              variant="outline-danger"
              onClick={() => setState([])}
            >
              Clear
            </Button>
            <Button
              variant="outline-danger"
              className="m-1"
              onClick={() => setState(getFromString("40143140314414041340"))}
            >
              Reset
            </Button>
          </div>
        </div>
        <div>
          <TeamExplainer team={state} />
        </div>
      </Container>
    </div>
  );
};

export default App;
