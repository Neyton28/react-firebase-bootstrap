import React from 'react'
import { Card } from "react-bootstrap";

export default function PostBox({post}) {
    return (
        <Card className="mt-3">
        {post?.img ? <Card.Img variant="top" src={post.img} /> : ''}
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
                {post.content}
            </Card.Text>
            
          </Card.Body>
        </Card>
    )
}
