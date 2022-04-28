import React from "react";

function GroupItem(props) {
  return (
    <li>
      <a href="/">
        <div className="avatars">
          {props.groupImgs.map((img) => (
            <img src={img} alt="group" />
          ))}
        </div>
        <span className="badge online"></span>
        <span>{props.groupName}</span>
      </a>
    </li>
  );
}

export default GroupItem;
