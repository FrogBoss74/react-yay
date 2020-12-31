import React from "react";

export default function Die(props){

  return(
     <g>
     <text x = {props.index+"em"} 
           dx = "0.1em" 
           dy = "1em"
           key={"d6"+props.index} 
           id={"d"+props.index} 
           className="DiceRoll" 
           onClick={(e)=> props.handleClickHold(e,props.index)}>
     {props.val}
     </text>
     </g>
  )
}