import React, { useContext, useState } from "react";
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

  const handleCreatePost = async (e) => {
    e.preventDefault();
    if (!postSubmited) {
      setPostSubmited(true);
      await handleAddDoc(title, postText);
    }
    navigate("/");
  };

  return (
    <div className="create-post-page">
      {isAuth ? (
        <>
          <h2>Create Post</h2>
          <form onSubmit={handleCreatePost}>
            <section className="create-post-input">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </section>
            <section className="create-post-input">
              <label htmlFor="post">Post:</label>
              <textarea
                id="post"
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                required
              ></textarea>
            </section>
            <button className="btn">Submit Post</button>
          </form>
        </>
      ) : (
        <section className="create-post-login">
          <h2>Log In/Sign Up to Create Post</h2>
          <button className="btn" onClick={() => navigate("/login")}>
            Log In/Sign Up
          </button>
        </section>
      )}
    </div>
  );
};

export default Createpost;
