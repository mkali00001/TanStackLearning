import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/api";

const FetchOld = () => {
  const [posts, setPosts] = useState([]);

  const getPostData = async () => {
    try {
      const res = await fetchPosts();
      res.status === 200 ? setPosts(res.data) : [];
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  useEffect(() => {
    getPostData();
  }, []);


  return (
    <div>
      <ul className="section-accordion">
        {posts?.map((post) => {
          return (
            <li key={post?.id}>
              <p>{post?.title}</p>
              <p>{post?.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchOld;
