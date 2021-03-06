import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

import postDate from "../../utils/postDate";
import "./readPost.css";

const ReadPost = () => {
  const { readPost } = useContext(GlobalContext);

  return (
    <div key={readPost.id} className="post">
      <h2 className="post-title">{readPost.title}</h2>
      <h4 className="post-author">{readPost.author.name}</h4>
      <h4 className="post-date">{postDate(readPost.date.fullDate)}</h4>
      <p className="post-text">{readPost.postText}</p>
    </div>
  );
};

export default ReadPost;
