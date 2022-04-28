import React from "react";

export const Item = ({ link, imgSrc, label }) => {
  return (
    <li>
      <a href={link}>
        <img src={imgSrc} alt={label} />
        <span>{label}</span>
      </a>
    </li>
  );
};
