import { useState, useEffect } from 'react';
import { fetchUsers, fetchPosts, fetchComments } from '../services/api';
import CardList from './CardList';
import '../styles/DataContainer.css';

const DataContainer = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [loadingComments, setLoadingComments] = useState(false);
  
  const [errorUsers, setErrorUsers] = useState(null);
  const [errorPosts, setErrorPosts] = useState(null);
  const [errorComments, setErrorComments] = useState(null);

  // Fetch Users
  useEffect(() => {
    const getUsers = async () => {
      setLoadingUsers(true);
      setErrorUsers(null);
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setErrorUsers(err.message);
      } finally {
        setLoadingUsers(false);
      }
    };
    getUsers();
  }, []);

  // Fetch Posts
  useEffect(() => {
    const getPosts = async () => {
      setLoadingPosts(true);
      setErrorPosts(null);
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        setErrorPosts(err.message);
      } finally {
        setLoadingPosts(false);
      }
    };
    getPosts();
  }, []);

  // Fetch Comments
  useEffect(() => {
    const getComments = async () => {
      setLoadingComments(true);
      setErrorComments(null);
      try {
        const data = await fetchComments();
        setComments(data);
      } catch (err) {
        setErrorComments(err.message);
      } finally {
        setLoadingComments(false);
      }
    };
    getComments();
  }, []);

  return (
    <div className="data-container">
      <CardList 
        items={users} 
        type="Users" 
        loading={loadingUsers} 
        error={errorUsers} 
      />
      
      <CardList 
        items={posts} 
        type="Posts" 
        loading={loadingPosts} 
        error={errorPosts} 
      />
      
      <CardList 
        items={comments} 
        type="Comments" 
        loading={loadingComments} 
        error={errorComments} 
      />
    </div>
  );
};

export default DataContainer;
