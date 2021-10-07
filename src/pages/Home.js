import React, { useState, useEffect, useCallback } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useAuth } from "../contexts/AuthContext";
import PostBox from "../components/PostBox"

const Home = () => {
  const { getPosts, destroyedGetPost } = useAuth();
  const [posts, setPosts] = useState([]);

  // const updatePosts = (post) => {
  //   posts.push(post)
  //   setPosts(posts.slice().reverse())
  // }

  const updatePosts = useCallback((post)=>{
    posts.push(post)
    setPosts(posts.slice().reverse())
  }, [setPosts, posts])

  useEffect(() => {
    getPosts(updatePosts)
    return ()=>{destroyedGetPost()}
  }, [getPosts, destroyedGetPost, updatePosts]);

  return (
    <Container className="py-5">
      <Row>
        {posts.map((post, idx) => (
          <Col key={idx} md={6} lg={4}>
            <PostBox post={post} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
