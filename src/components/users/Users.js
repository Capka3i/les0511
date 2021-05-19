import React, {useEffect, useState} from 'react';
import User from '../user/User';

function Users(props) {
    let {url} = props.match;
    let [user, setUser] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value =>
                setUser([...value]))
    }, [])

    return (
        <div>
            {
                user.map((value, index) => <User key={index} item={value} url={url}/>)
            }
        </div>
    );
}

export default Users;
