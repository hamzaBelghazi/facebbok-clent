import React from "react";
import AddStory from "./AddStory";
import StoryItem from "./StoryItem";
import img from "../../../assets/main.png";

const stories = [
  {
    friendName: "jhone doe",
    storyImg: img,
    friendImg: img,
  },
  {
    friendName: "jhone doe",
    storyImg: img,
    friendImg: img,
  },
  {
    friendName: "jhone doe",
    storyImg: img,
    friendImg: img,
  },
];

function Storys() {
  return (
    <div className="story_container">
      <AddStory />
      <div className="freinds_story">
        {stories.map((story) => (
          <StoryItem item={story} />
        ))}
        <a className="see_all_stories" href="/">
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            width="1.2rem"
            height="1.2rem"
            className="a8c37x1j ms05siws l3qrxjdp b7h9ocf4 py1f6qlh jnigpg78 odw8uiq3"
          >
            <g fillRule="evenodd" transform="translate(-446 -350)">
              <g fillRule="nonzero">
                <path
                  d="M101.751 211.001a1 1 0 0 0 1.415 1.415l5.208-5.209a1 1 0 0 0 0-1.414l-5.208-5.209A1 1 0 0 0 101.75 202l4.501 4.501-4.5 4.501z"
                  transform="translate(355 153.5)"
                ></path>
                <path
                  d="M94.334 207.5h12.812a1 1 0 1 0 0-2H94.333a1 1 0 1 0 0 2z"
                  transform="translate(355 153.5)"
                ></path>
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Storys;
