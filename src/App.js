import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Header from "./components/Header"
import styled from "styled-components";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./pages/Dashboard"
import PrivareRoute from "./components/PrivareRoute"

const Main = styled.main`
  min-height: calc(100vh - 56px);
  display: flex;
`

function App() {    
  return (
    <Router>
      <div>
        <AuthProvider>
          <Header />
          <Main>
            <Switch>
              <PrivareRoute path="/dashboard" component={Dashboard} />
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Main>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
