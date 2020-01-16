import React from 'react';
import { AppProvider } from "@shopify/polaris";
import './App.css';
import Base from "./components/cometchat/Base";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (<AppProvider>
    <Router>
      <div>
        <Route path="/:uid" component={Base} />
      </div>
    </Router>
  </AppProvider>);
}

export default App;