import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useAuth } from "../contexts/AuthContext";
import { Card } from "react-bootstrap";

const Home = () => {
  const { getPosts } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <Container className="py-5">
      <Row>
        {posts.map((post, idx) => (
          <Col key={idx} md={6} lg={4}>
            <Card className="mt-3">
            {post?.img ? <Card.Img variant="top" src={post.img} /> : ''}
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                    {post.content}
                </Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
