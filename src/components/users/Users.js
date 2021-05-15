import {useEffect, useState} from 'react';
import User from './user/User';
import {Route, Switch} from 'react-router-dom';
import Detals from './detal/Detals';

function Users(props) {

	let {match:{url}} = props;
	let [user, setUser] = useState([]);
	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/users')
		  .then(value => value.json())
		  .then(value => setUser([...value]))
	},[])
	return (
		<div>
			{
				user.map(value=><User key={value.id} item={value} url={url}/>)
			}
			<Switch>
			<Route path={'/users/:id'} component={Detals}/>
			</Switch>
		</div>
	);
}

export default Users;
