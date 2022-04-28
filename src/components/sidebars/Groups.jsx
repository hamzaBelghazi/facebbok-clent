import React from "react";
import GroupItem from "./GroupItem";

function Groups({ items }) {
  return (
    <ul className="groups">
      {items.map((i) => (
        <GroupItem key={i.name} groupImgs={i.images} groupName={i.name} />
      ))}
    </ul>
  );
}

export default Groups;
