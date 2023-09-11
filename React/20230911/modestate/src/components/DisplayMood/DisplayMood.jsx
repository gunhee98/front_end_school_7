import React from "react";
import "./DisplayMood.css";

export default function DisplayMood(props) {
  return (
    <div className="container">
      <h2>
        {props.currentMood
          ? `기분이 ${props.currentMood}`
          : "아직 선택하지 않았어요..."}
      </h2>
    </div>
  );
}
