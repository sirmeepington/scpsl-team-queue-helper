import React, { FC } from "react";

type Queue = {
  content: string;
};

export const QueueDisplay: FC<Queue> = ({ content }) => {
  return (
    <div style={{ width: "75%" }}>
      <span>Team Queue ({content.length}):</span>
      <div>
        <span style={{ width: "100%", height: "" }}>{content}</span>
      </div>
    </div>
  );
};
