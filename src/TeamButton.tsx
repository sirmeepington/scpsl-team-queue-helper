import React, { FC } from "react";
import { Button } from "react-bootstrap";
import Team from "./Team";

interface TeamButtonProps {
  team: Team;
  updateQueue: (t: Team) => void;
}

export const TeamButton: FC<TeamButtonProps> = ({ team, updateQueue }) => {
  return (
    <Button
      variant="outline-primary"
      className="m-1"
      onClick={() => updateQueue(team)}
      style={{ borderColor: team.color, color: team.color }}
    >
      <b>{team.name}</b>
    </Button>
  );
};
