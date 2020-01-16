import React from 'react';
import { AppProvider } from "@shopify/polaris";
import './App.css';
import Base from "./components/cometchat/Base";

const App = props => {
  return (<AppProvider>
    <div>
      <Base props={props} />
    </div>
  </AppProvider>);
}

export default App;