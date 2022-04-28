import React from "react";
import Feed from "./feeds/Feed";
import NewFeed from "./feeds/NewFeed";
import Storys from "./story/Storys";

function Content() {
  return (
    <div className="content">
      <Storys />
      <NewFeed />
      <div className="posts_container">
        <Feed />
      </div>
    </div>
  );
}

export default Content;
