import React from 'react';
import { useEffect } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/shared/navbar';
import Home from './components/pages/home';
import Animation from './components/pages/animation';
import About from './components/pages/about';

const FormWrapper = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: #263238;
`;

const App = () => {
  useEffect(() => {
    document.title = 'My Home Page';
    document.body.style.margin = '0';
    document.body.style.backgroundColor = '#263238';
  }, []);

  return (
    <FormWrapper>
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/animation" component={Animation} />
        <Route path="/about" component={About} />
      </Router>
    </FormWrapper>
  );
};

const container = document.getElementById('contents');

render(<App />, container);
