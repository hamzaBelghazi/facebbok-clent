import React from "react";
import img from "../../../assets/main.png";

function AddStory() {
  return (
    <div className="main_story card">
      <img src={img} alt="user" />
      <a className="overlay_story">
        <div className="add_sory">
          <span className="add_btn">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              width="1em"
              height="1em"
              className="a8c37x1j ms05siws l3qrxjdp b7h9ocf4 ljqsnud1 jnigpg78 odw8uiq3"
            >
              <g fillRule="evenodd" transform="translate(-446 -350)">
                <g fillRule="nonzero">
                  <path
                    d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z"
                    transform="translate(354.5 159.5)"
                  ></path>
                  <path
                    d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z"
                    transform="translate(354.5 159.5)"
                  ></path>
                </g>
              </g>
            </svg>
          </span>
          <span className="create_text">Create story</span>
        </div>
      </a>
    </div>
  );
}

export default AddStory;
