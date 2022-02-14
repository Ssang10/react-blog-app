import React, { useContext, useEffect, useState } from "react";
import "./createPost.css";
import { useNavigate } from "react-router-dom";
import handleAddDoc from "../../firebase/services/firestore/addDoc";
import { GlobalContext } from "../../context/GlobalState";

const Createpost = () => {
  const navigate = useNavigate();

  const { isAuth } = useContext(GlobalContext);

  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [postSubmited, setPostSubmited] = useState(false);

  const handleCreatePost = async () => {
    if (!postSubmited) {
      setPostSubmited(true);
      await handleAddDoc(title, postText);
    }
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="create-post-page">
      <h2>Create Post</h2>
      <section className="create-post-input">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </section>
      <section className="create-post-input">
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        ></textarea>
      </section>
      <button className="btn" onClick={handleCreatePost}>
        Submit Post
      </button>
    </div>
  );
};

export default Createpost;
