import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Users from './components/users/Users';
import DetUser from './components/detalsUser/DetUser';
import DetPost from './components/posts/detPost/DetPost';
import Comments from './components/comments/Comments';

function App() {
  return (
      <Router>
        <div>
          <Link to={'/users'} >Users</Link>
            <br/>
          <Switch>
            <Route exact path={'/users'} component={Users}/>
            <Route exact path={'/users/:id'} component={DetUser}/>
            <Route path={'/users/:id/:postId'} component={DetPost}/>
            <Route path={'/users/:id/:postId/:id'} component={Comments}/>


          </Switch>

        </div>
      </Router>
  );
}

export default App;
