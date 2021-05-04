import React, { FC } from "react";
import Team from "./Team";

interface Explanation {
  team: Team[];
}

export const TeamExplainer: FC<Explanation> = ({ team }) => {
  return (
    <>
      <span>Explanation:</span>
      <div className="queue">
        {team.map((x: Team, i: number) => (
          <div className={i % 2 === 0 ? "mixedrace" : ""} key={i}>
            {x.name}
          </div>
        ))}
      </div>
    </>
  );
};
