import React from "react";
import img from "../../../assets/main.png";

function Feed() {
  return (
    <div className="post card">
      <div className="post_head">
        <div className="post_info">
          <a href="/" className="post_outhor_img">
            <img src={img} alt="user" />
          </a>
          <div>
            <a href="/" className="post_outhor_name">
              jhon doe
            </a>
            <a href="/" className="post_createdAt">
              Yesterday at 22:56 PM.
            </a>
          </div>
        </div>
        <div className="edit_post">
          <svg viewBox="0 0 20 20">
            <g fillRule="evenodd" transform="translate(-446 -350)">
              <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
            </g>
          </svg>
        </div>
      </div>
      <div className="post_body">
        <div className="post_decription">Me posting this facebook clone</div>
        <div className="post_media">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="post_stats">
        <div className="reactions">
          <span className="react_amount"> 1K </span>
        </div>
        <div className="comments">
          <span className="comment_amount">120</span>
          <span>Comments</span>
        </div>
      </div>
      <div className="spirator post_spir"></div>
      <div className="post_actions">
        <div className="add_like">
          <span>Like</span>
        </div>
        <div className="add_comment">
          <span>Comment</span>
        </div>
      </div>
      <div className="spirator post_spir"></div>

      <div className="post_comments"></div>
    </div>
  );
}

export default Feed;
