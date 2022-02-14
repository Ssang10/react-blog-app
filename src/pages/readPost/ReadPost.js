import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

import "./readPost.css";

const ReadPost = () => {
  const { readPost } = useContext(GlobalContext);

  return (
    <div key={readPost.id} className="post">
      <h2 className="post-title">{readPost.title}</h2>
      <h5 className="post-author">@{readPost.author.name}</h5>
      <p>{readPost.postText}</p>
    </div>
  );
};

export default ReadPost;
