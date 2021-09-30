import React, {useState} from "react";
import { useAuth } from "../contexts/AuthContext"
import CentredBox from "../ui/CentredBox";
import { Card, Form, Button } from "react-bootstrap";


const Dashboard = ()=>{
    const {addPost} = useAuth()
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        await addPost(title, content)
        setTitle('')
        setContent('')
      };
  
    return (
      <CentredBox>
        <Card style={{ minWidth: "350px" }}>
          <Card.Header>Добавить пост</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Заголовок"
                />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                  as="textarea" 
                  rows={3}
                  name="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  type="text"
                  placeholder="Текст"
                />
              </Form.Group>
  
              <Button variant="primary" type="submit">
                Добавити
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </CentredBox>
    );
}

export default Dashboard