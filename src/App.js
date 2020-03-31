import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import ToolBar from './components/Navigation/Toolbar/Toolbar';

class App extends Component {
  render () {
    return (
      <div>
        <ToolBar />
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
