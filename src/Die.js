import React from "react";
import img1 from "./imgs/1.png";

export default function Die(props) {
  return (
    <g>
      <image
        src={img1}
        height="50"
        width="50"
        x={props.index * 50 + "px"}
        dx="0.1em"
        dy="1em"
        key={"d6img" + props.index}
        id={"dimg" + props.index}
        className="DiceRoll"
        onClick={e => props.handleClickHold(e, props.index)}
      />
      /*
      <text
        x={props.index + "em"}
        dx="0.1em"
        dy="1em"
        key={"d6" + props.index}
        id={"d" + props.index}
        className="DiceRoll"
        display="none"
        onClick={e => props.handleClickHold(e, props.index)}
      >
        {props.val}
      </text>
      */
    </g>
  );
}
