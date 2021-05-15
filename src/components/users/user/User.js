import {Link} from 'react-router-dom';

function User(props) {
	let {item, url} = props;
	return (
		<div>
			{
				item.name
			}
			<Link to={`${url}/${item.id}`}> detales</Link>

		</div>
	);
}

export default User;
