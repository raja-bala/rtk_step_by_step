import { useState } from "react";
import "./App.css";
import {
  useCreatePostMutation,
  useGetPostsQuery,
} from "./services/JsonPlaceholderAPI";

function App() {
  const [newPost, setNewPost] = useState({ title: "", body: "", id: 9999 });
  const { data, error, isLoading } = useGetPostsQuery(undefined);
  const [
    createPost,
    { data: postData, error: createPostError, isLoading: isCreatingPost },
  ] = useCreatePostMutation();

  if (isLoading) return <p>Loading...</p>;
  if (createPostError) return <p>Error: {createPostError.message}</p>;
  if (isCreatingPost) return <p>Creating post...</p>;
  if (postData) return <p>Post created successfully!</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleCreatePost = async () => {
    await createPost(newPost);
  };

  console.log(data);
  return (
    <>
      <h1> Leave A Like:</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Body"
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
        />

        <button onClick={handleCreatePost} disabled={isCreatingPost}>
          Create Post
        </button>
      </div>
      <div>
        {data.map((post) => (
          <p key={post.id}>{post.title}</p>
        ))}
      </div>
    </>
  );
}

export default App;
