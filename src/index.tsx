import { useEffect } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './shared/Navbar';
import Home from './pages/Home';
import Animation from './pages/Animation';
import About from './pages/About';

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
        <Route exact path='/' component={Home} />
        <Route path='/animation' component={Animation} />
        <Route path='/about' component={About} />
      </Router>
    </FormWrapper>
  );
};

render(<App />, document.getElementById('root'));
