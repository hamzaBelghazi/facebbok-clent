import React from "react";
import { Item } from "./Item";

export const SideNav = ({ items, className }) => {
  const classes = className ? className : "";
  return (
    <ul className={classes}>
      {items.map((i) => (
        <Item key={i.label} link={i.link} label={i.label} imgSrc={i.imgSrc} />
      ))}
    </ul>
  );
};
