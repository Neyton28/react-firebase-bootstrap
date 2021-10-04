import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useAuth } from "../contexts/AuthContext";
import PostBox from "../components/PostBox"

const Home = () => {
  const { getPosts, destroyedGetPost } = useAuth();
  const [posts, setPosts] = useState([]);

  const updatePosts = (post) => {
    posts.push(post)
    setPosts(posts.slice().reverse())
  }

  useEffect(async() => {
    await getPosts(updatePosts)
    return destroyedGetPost
  });

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
