import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: (postId) => {},
};

export const PostListContext = createContext(DEFAULT_CONTEXT);

const postListReducer = (state, action) => {
  console.log("Action dispatched:", action); // Log the action
  console.log("Current state:", state); // Log the current state before changes

  switch (action.type) {
    case "ADD_POST":
      const newState = [...state, action.payload];
      console.log("New state after adding post:", newState); // Log the updated state
      return newState; // Add new post

    case "DELETE_POST":
      const filteredState = state.filter((post) => post.id !== action.payload);
      console.log("New state after deleting post:", filteredState); // Log the updated state
      return filteredState; // Delete post by ID

    default:
      return state; // Return current state for unrecognized actions
  }
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "First Post",
    content: "This is the content of the first post.",
    reactions: 0,
    userId: "",
    tags: ["Vacation", "Mumbai", "Enjoy"],
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the content of the second post.",
    reactions: 15,
    userId: "",
    tags: ["Congratulations", "Mumbai", "Enjoy"],
  },
];

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (post) => {
    console.log("Adding post:", post); // Log the post being added
    dispatchPostList({ type: "ADD_POST", payload: post });
  };

  const deletePost = (id) => {
    console.log("Deleting post with id:", id); // Log the post ID being deleted
    dispatchPostList({ type: "DELETE_POST", payload: id });
  };

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
