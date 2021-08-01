import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import './App.css';

require('dotenv').config();

const Home = lazy(() => import('./pages/Home/Home'));
const Post14 = lazy(() => import('./pages/Post-14/Post-14'));
const NoMatch = lazy(() => import('./pages/NoMatch/NoMatch'));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          {/* Entry page for application - the home page */}
          <Route path='/' exact>
            <Home />
          </Route>

          <Route path='/post14' exact>
            <Post14 />
          </Route>

          {/* 404 page not found route ( any routes not matching go here ) */}
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
