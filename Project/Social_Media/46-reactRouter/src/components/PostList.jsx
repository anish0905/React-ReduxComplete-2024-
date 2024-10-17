import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const signal = controller.signal;

    setFetching(true);
    console.log("Fetch started");

    fetch("https://dummyjson.com/products", { signal })
      .then((res) => res.json())
      .then((data) => {
        // Assuming `data.products` contains the post list
        addInitialPost(data.products);
        setFetching(false);
        console.log("Fetch returned");
      });
    console.log("Fetch ended");
  }, []);

  const handleGetPostsClick = () => {
    console.log("clicked on post button");
  };

  return (
    <div>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && (
        <WelcomeMessage onGetPostClicked={handleGetPostsClick} />
      )}
      {!fetching &&
        postList.map((post) => <Post key={post.name} post={post} />)}
    </div>
  );
};

export default PostList;
