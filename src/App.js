import React from 'react';
import AllArticles from './container/AllArticles';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// import { render } from '@testing-library/react';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact={true}
            render={routerProps => (
              <AllArticles {...routerProps} />
            )}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
