import React, { useEffect, useState } from "react";

function CRUDComponent() {
  const API_URL = "https://jsonplaceholder.typicode.com/posts";

  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editId, setEditId] = useState(null);

  // =======================
  // 1. READ (GET)
  // =======================
  const fetchPosts = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setPosts(data.slice(0, 5)); // show only 5 items
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // =======================
  // 2. CREATE (POST)
  // =======================
  const handleCreate = async () => {
    const newPost = { title, body };

    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });

    const data = await res.json();
    setPosts([data, ...posts]);
    setTitle("");
    setBody("");
  };

  // =======================
  // 3. UPDATE (PUT)
  // =======================
  const handleUpdate = async () => {
    const updatedPost = { id: editId, title, body };

    const res = await fetch(`${API_URL}/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedPost),
    });

    const data = await res.json();

    setPosts(posts.map((p) => (p.id === editId ? data : p)));

    setEditId(null);
    setTitle("");
    setBody("");
  };

  // =======================
  // 4. DELETE (DELETE)
  // =======================
  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });

    setPosts(posts.filter((p) => p.id !== id));
  };

  // =======================
  // UI
  // =======================
  return (
    <div style={{ margin: "40px" }}>
      <h2>React CRUD with Fetch API</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      {editId ? (
        <button onClick={handleUpdate} style={{ marginLeft: "10px" }}>
          Update
        </button>
      ) : (
        <button onClick={handleCreate} style={{ marginLeft: "10px" }}>
          Create
        </button>
      )}

      <hr />

      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "15px" }}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>

          <button
            onClick={() => {
              setEditId(post.id);
              setTitle(post.title);
              setBody(post.body);
            }}
          >
            Edit
          </button>

          <button
            onClick={() => handleDelete(post.id)}
            style={{ marginLeft: "10px", background: "red", color: "white" }}
          >
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default CRUDComponent;
