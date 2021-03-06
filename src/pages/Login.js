import React, {useState} from "react";
import { Form, Button, Card } from "react-bootstrap";
import CentredBox from "../ui/CentredBox";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom"

const Login = ()=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {login} = useAuth()
    const history = useHistory()
  
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(await login(email, password)){
          setEmail('')
          setPassword('')
          history.push("/")
        }
      };
  
    return (
      <CentredBox>
        <Card style={{ minWidth: "350px" }}>
          <Card.Header>Логін</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
  
              <Button variant="primary" type="submit">
                Увійти
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </CentredBox>
    );
}

export default Login