import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPost: () => {},
};

export const PostListContext = createContext(DEFAULT_CONTEXT);

const postListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.payload];

    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload);

    case "ADD_INITIAL_POST":
      // Log the posts array for debugging
      return [...state, ...action.payload]; // Spread the posts array into the state

    default:
      return state;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    // console.log("Adding post:", post);
    dispatchPostList({ type: "ADD_POST", payload: post });
  };

  const addInitialPost = (posts) => {
    // console.log("Adding initial posts:", posts);
    dispatchPostList({ type: "ADD_INITIAL_POST", payload: posts });
  };

  const deletePost = (id) => {
    // console.log("Deleting post with id:", id);
    dispatchPostList({ type: "DELETE_POST", payload: id });
  };

  return (
    <PostListContext.Provider
      value={{ postList, addPost, deletePost, addInitialPost }} // Add `addInitialPost`
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
