import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../../context/GlobalState";
import handleGetDocs from "../../firebase/services/firestore/getDocs";
import postDate from "../../utils/postDate";
import "./explore.css";

const Explore = () => {
  const { setReadPost } = useContext(GlobalContext);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const gettingData = async () => {
      let docs = await handleGetDocs();
      setPosts(docs);
    };
    gettingData();
  }, []);

  const postText = (text) => {
    return text.split("").filter((letter, index) => index < 120);
  };

  return (
    <div>
      {posts.length > 0 ? (
        <div className="explore-page">
          {posts
            .sort((a, b) => b.date.time - a.date.time)
            .map((post) => (
              <section key={post.id} className="explore-post">
                <h2 className="post-title">{post.title}</h2>
                <h4 className="post-author">{post.author.name}</h4>
                <h4 className="post-date">{postDate(post.date.fullDate)}</h4>
                <p className="post-text">
                  {postText(post.postText)}
                  {post.postText.length > 120 && (
                    <button className="btn-read-more">
                      <Link to="/readpost" onClick={() => setReadPost(post)}>
                        Read More
                      </Link>
                    </button>
                  )}
                </p>
              </section>
            ))}
        </div>
      ) : (
        <h2 className="loading">Loading...</h2>
      )}
    </div>
  );
};

export default Explore;
