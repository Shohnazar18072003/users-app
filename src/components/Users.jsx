import React, { useEffect, useState } from 'react';
import './Users.scss';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [albums, setAlbums] = useState([]);


  // FETCH USERS

  const fetchUsers = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  // GET USER POSTS

  const getUserPosts = async (id) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      );
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  // GET USER TODOS

  const getUserTodos = async (id) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos?userId=${id}`
      );
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  // GET USER ALBUMS

  const getUserAlbums = async (id) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/albums?userId=${id}`
      );
      const data = await res.json();
      setAlbums(data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect function

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className='body'>

      {/* USERS */}

      <h1 className='title'>Users</h1>

      <div className="users">
        {users.map((user) => (
          <div key={user.id} className="user">
            {/* <h2>{user.id}</h2> */}
            <h5 className='title'>{user.name}</h5>
            <h6 className='title'>{user.username}</h6>
            <p className='subtitle'>Email : <a href='https://mail.google.com'>{user.email}</a></p>
            <p className='subtitle'>Website : <a href="#">{user.website}</a></p>
            <p className='subtitle'>Address : <a href="#">{user.address.city}, {user.address.street}</a></p>
            <p className='subtitle'>Phone : <a href="#">{user.phone}</a></p>

            <div className="btns">
            <button className='btn_1' onClick={() => getUserPosts(user.id)}>Posts</button>
            <button className='btn_1' onClick={() => getUserTodos(user.id)}>Todos</button>
            <button className='btn_1' onClick={() => getUserAlbums(user.id)}>Album</button>
            </div>
          </div>
        ))} 
      </div>

      {/* POSTS */}

      <h1 className='title'>Posts</h1>

      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h2><span>User_Id :</span> {post.userId}</h2>
            <h2><span>Post_title : </span> {post.title}</h2>
            <p><span>Post_subtitle : </span> {post.body}</p>
          </div>
        ))}
      </div>

      {/* TODOS */}

      <h1 className='title'>Todos</h1>

      <div className="todos">
        {todos.map((todo) => (
          <div key={todo.userId} className="todo">
            <h2><span>User_Id :</span> {todo.userId}</h2>
            <h2><span>Todo_Id :</span> {todo.id}</h2>
            <h2><span>Todo_title :</span> {todo.title}</h2>
            <p>
              {todo.completed}
              </p>
          </div>
        ))}
      </div>


      {/* ALBUM */}
      
      <h1 className='title'>Album</h1>

      <div className="albums">
        {albums.map((album) => (
          <div key={album.userId} className="album">
            <h2><span>User_Id :</span> {album.userId}</h2>
            <h2><span>Album_Id :</span> {album.id}</h2>
            <h2><span>Album_title :</span> {album.title}</h2>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Users;
