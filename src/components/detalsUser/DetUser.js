import React, {useEffect, useState} from 'react';
import Post from '../posts/post/Post';

function DetUser(props) {
    let {params: {id}, url} = props.match;
    let [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                let value1 = value.filter(value => value.userId === +id)
                return setPost([...value1])
            })
    }, [id])

    return (
        <div>
            {
                post.map(value => <Post key={value.id} item={value} url={url}/>)
            }
        </div>
    );
}

export default DetUser;
