import React, { lazy, Suspense } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

import Loading from './components/spinner/loading';

const Palindrome = lazy(() => import('./components/palindrome/palindrome.component'));
const List = lazy(() => import('./components/list/list.component'));


function App() {
  return (
    <div className="App">
      <div className="border centered">
        <br/>
        Choose a component:
        <br/>
        <Link to="/list">List</Link>
        <br/>
        <Link to="/palindrome">Palindrome</Link>
        <br/>
        <br/>
      </div>
      <Suspense fallback={<Loading />}>
          <Switch>
              <Route exact path='/list' component={List} />
              <Route exact path='/palindrome' component={Palindrome} />
          </Switch>
      </Suspense>
      
    </div>
  );
}

export default App;
