import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase-config";
import handleDeleteDoc from "../../firebase/services/firestore/deleteDoc";
import handleGetDocs from "../../firebase/services/firestore/getDocs";

import "./yourPost.css";

const YourPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const gettingData = async () => {
      let docs = await handleGetDocs();
      let filteredDocs = docs.filter(
        (doc) => auth.currentUser.displayName === doc.author.name
      );
      setPosts(filteredDocs.length > 0 ? filteredDocs : "No Posts");
    };

    gettingData();
  }, []);

  const handleDeletePost = (id) => {
    handleDeleteDoc(id);
    let newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts.length > 0 ? newPosts : "No Posts");
  };

  return (
    <div>
      {posts === "No Posts" ? (
        <h2 className="no-uploads">No Uploads</h2>
      ) : posts.length > 0 ? (
        posts
          .sort((a, b) => b.date.time - a.date.time)
          .map((post) => (
            <section key={post.id} className="your-posts-post">
              <h2 className="post-title">{post.title}</h2>
              <p>{post.postText}</p>
              <h5 className="post-author">
                <span>@You</span> ({post.author.name})
              </h5>
              <button onClick={() => handleDeletePost(post.id)}>
                &#128465;
              </button>
            </section>
          ))
      ) : (
        <h2 className="loading">Loading...</h2>
      )}
    </div>
  );
};

export default YourPost;
