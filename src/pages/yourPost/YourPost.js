import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase-config";
import handleDeleteDoc from "../../firebase/services/firestore/deleteDoc";
import handleGetDocs from "../../firebase/services/firestore/getDocs";
import { MdDeleteForever } from "react-icons/md";

import "./yourPost.css";
import postDate from "../../utils/postDate";

const YourPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const gettingData = async () => {
      let docs = await handleGetDocs();
      let filteredDocs = docs.filter(
        (doc) => auth.currentUser.uid === doc.author.id
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
    <div className="your-posts">
      {posts === "No Posts" ? (
        <h2 className="no-uploads">No Uploads</h2>
      ) : posts.length > 0 ? (
        posts
          .sort((a, b) => b.date.time - a.date.time)
          .map((post) => (
            <section key={post.id} className="your-posts-post">
              <h2 className="post-title">{post.title}</h2>
              <h4 className="post-date">{postDate(post.date.fullDate)}</h4>
              <p>{post.postText}</p>

              <MdDeleteForever
                className="delete-btn"
                onClick={() => handleDeletePost(post.id)}
              />
            </section>
          ))
      ) : (
        <h2 className="loading">Loading...</h2>
      )}
    </div>
  );
};

export default YourPost;
