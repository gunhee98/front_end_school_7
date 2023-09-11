import React from "react";
import "./MenuListItem.css";
export default function MenuListItem(props) {
  const onItemClick = () => {
    props.setCurrentMood(props.mood);
  };
  console.log(props);
  return (
    <li key={props.index}>
      <button onClick={onItemClick}>기분이 : {props.mood}</button>
    </li>
  );
}
