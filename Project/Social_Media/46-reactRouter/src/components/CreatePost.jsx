import React, { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = userIdElement.current.value;
    const title = postTitleElement.current.value;
    const content = postBodyElement.current.value;
    const reactions = Number(reactionsElement.current.value); // Ensure it's a number
    const tags = tagsElement.current.value.split(/\s+/); // Split tags by spaces

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(console.log);

    addPost({
      id: Date.now(), // Generate unique ID based on timestamp
      userId,
      title,
      content,
      reactions,
      tags,
    });
  };

  return (
    <div>
      <form className="create-Post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User ID
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            placeholder="Enter your userId"
            ref={userIdElement}
          />

          <label htmlFor="postTitle" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="postTitle"
            placeholder="How are you feeling today?"
            ref={postTitleElement}
          />

          <label htmlFor="reactions" className="form-label">
            Reactions
          </label>
          <input
            type="number"
            className="form-control"
            id="reactions"
            placeholder="Number of reactions"
            ref={reactionsElement}
          />

          <label htmlFor="postContent" className="form-label">
            Post Content
          </label>
          <textarea
            rows={4}
            className="form-control"
            id="postContent"
            placeholder="Enter the Post Content"
            ref={postBodyElement}
          />

          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            placeholder="Enter the Tags using space"
            ref={tagsElement}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
