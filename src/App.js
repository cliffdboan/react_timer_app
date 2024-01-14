import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { ErrorBoundary } from "react-error-boundary";

import DocumentationView from "./views/DocumentationView";
import AddPage from "./views/AddPage";
import TimersView from "./views/TimersView";
import TimerProvider from "./utils/timerProvider";

const Container = styled.div`
  background: #dbdcda;
  color: black;
  height: 100vh;
  overflow: auto;
  -webkit-text-stroke-width: .15px;
  -webkit-text-stroke-color: black;
  padding-top: 130px;
`;

const NavBar = styled.nav`
  background: #333;
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1px;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color: #c7c7c7;
    color: black;
    border-radius: 10px
  }
`;

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  )
};

const Nav = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <NavBar>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <h4>
                  Timers
                </h4>
              </Link>
            </li>
            <li>
              <Link to="/add">
                <h4>
                  Add Timer
                </h4>
              </Link>
            </li>
            <li>
              <Link to="/docs">
                <h4>
                  Docs
                </h4>
              </Link>
            </li>
          </ul>
        </nav>
      </NavBar>
    </ErrorBoundary>
  );
};

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Container>
        <Router>
          <Nav />
          <TimerProvider>
            <Routes>
              <Route path="/docs" element={<DocumentationView />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/" element={<TimersView />} />
            </Routes>
          </TimerProvider>
        </Router>
      </Container>
    </ErrorBoundary>
  );
};

export default App;
