import './App.css';
import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import Users from './components/users/Users';
import Detals from './components/users/detal/Detals';
import Posts from './components/posts/Posts';
import DetPosts from './components/posts/decent/DetPosts';
import Comments from './components/coment/coments/Comments';
import Detal from './components/coment/detal/Detal';

function App() {
	return (
		<Router>

			<div>
				<Link to={'/users'}>users</Link>
				<br/>
				<Link to={'/posts'}>posts</Link>
				<br/>
				<Link to={'/comments'}>coments</Link>
				<br/>
				<Link to={'/'}>/</Link>
				<br/>

				<hr/>
				<Switch>
					<Route exact path={'/'}>hello from /</Route>

					<Route path={'/users'} component={Users}/>
					{/*<Route path={'/users/:id'} component={Detals}/>*/}

					<Route exact path={'/posts'} component={Posts}/>
					<Route path={'/posts/:id'} component={DetPosts}/>

					<Route exact path={'/comments'} component={Comments}/>
					<Route path={'/comments/:id'} component={Detal}/>


				</Switch>
				<hr/>
			</div>

		</Router>
	);
}

export default App;
