import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Net from './pages/Net';
import Base from './pages/Base';
function App() {
  return (
          
          <Router basename="/react-auth-ui/">
                <Route exact path="/" component={Base}>
                </Route>
                <Route path="/sign-in" component={Base}>
                </Route>
                <Route path="/net" component={Net}>
                </Route>
           
        </Router>
     
  );
}

export default App;