import {Link} from 'react-router-dom';
import React from 'react';
import DetUser from '../detalsUser/DetUser';

function User({item, url}) {


	return (
		<div>

			<Link to={{pathname: url + '/' + item.id, state: item}}>{item.name}</Link>

</div>
)
}

export default User;
