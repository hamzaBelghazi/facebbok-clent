import React from "react";

function StoryItem({ item }) {
  return (
    <div className="story card">
      <img className="story_img" src={item.storyImg} alt="" />
      <a className="story_link" href="/">
        <img className="avatar" src={item.friendImg} alt="" />
        <span className="user_name">{item.friendName}</span>
      </a>
    </div>
  );
}

export default StoryItem;
