import {useEffect, useState} from 'react';
import User from '../user/User';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Users(props) {
	// console.log(props);
	let {match:{url}} = props;
	let [user, setUser] = useState([]);
	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/users')
		  .then(value => value.json())
		  .then(value =>
		  	setUser([...value]))

	},[])
	return (
		<div>
			{
				user.map((value,index) => <User key={index} item={value} url={url}/>)

			}

		</div>
	);
}

export default Users;
