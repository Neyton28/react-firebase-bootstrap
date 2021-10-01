import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import CentredBox from "../ui/CentredBox";
import { Card, Form, Button } from "react-bootstrap";

const Dashboard = () => {
  const { addPost } = useAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;

    setValidated(true)

    if (form.checkValidity() === true) {
      await addPost(title, content, thumbnail?.file);
      setTitle("");
      setContent("");
      setThumbnail("")
      setValidated(false)
      form.reset()
    }
  };

  const fileChange = (e)=>{

    const files = e.target.files

    setThumbnail({
      img: window.URL.createObjectURL(files?.[0]),
      file:files?.[0]
    })
  }

  return (
    <CentredBox>
      <Card style={{ width: "350px" }}>
        <Card.Header>Добавить пост</Card.Header>
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="text"
                name="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Заголовок"
              />
              <Form.Control.Feedback type="invalid">
                Введіть заголовок
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={3}
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                type="text"
                placeholder="Текст"
              />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Зображення</Form.Label>
              {!!thumbnail?.img ? <img style={{width:'100%'}} className="mb-3" src={thumbnail.img} alt="alt" /> : ''}
              <Form.Control 
                onChange={fileChange} 
                type="file"
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
};

export default Dashboard;
