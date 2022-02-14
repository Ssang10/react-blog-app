import React, { useEffect, useState } from "react";
import handleGetDocs from "../../firebase/services/firestore/getDocs";

import "./explore.css";

const Explore = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const gettingData = async () => {
      let docs = await handleGetDocs();
      setPosts(docs);
    };
    gettingData();
  }, []);

  const postText = (text) => {
    if (text.length < 70) {
      return text;
    } else {
      return text.split("").filter((letter, index) => index < 100);
    }
  };

  return (
    <div>
      {posts.length > 0 ? (
        <div className="explore-page">
          {posts.map((post) => (
            <section key={post.id} className="explore-post">
              <h2 className="post-title">{post.title}</h2>
              <h5 className="post-author">@{post.author.name}</h5>
              <p>{postText(post.postText)}</p>
              {post.postText.length > 70 && <button>read more</button>}
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
