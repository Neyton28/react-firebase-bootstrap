import React from 'react'
import { Card, CloseButton } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

export default function PostBox({post, onRemove}) {
  const {currentUser} = useAuth()

  const RemoveButtonHandler = ()=>{
    onRemove(post.key)
  }

  return (
        <Card className="mt-3">
        {post?.img && <Card.Img variant="top" src={post.img} />}
          <Card.Body>
            <Card.Title>{post.title} {currentUser && <CloseButton onClick={RemoveButtonHandler} className="float-end" />}</Card.Title>
            <Card.Text>
                {post.content}
            </Card.Text>
            
          </Card.Body>
        </Card>
    )
}
