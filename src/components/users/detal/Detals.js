import {useEffect, useState} from 'react';
import React from "react";
function Detals(props) {
	let {match:{params:{id}}} = props;
	let [detal, setDetal] = useState(null);

	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/users/'+id)
		  .then(value => value.json())
		  .then(value => {setDetal(value)})
	},[detal])
	return (
		<div>
			<hr/>
			{
			detal && <div>{detal.name} - {detal.email}</div>
			}
		</div>
	);
}

export default Detals;
