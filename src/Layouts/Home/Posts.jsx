import useAxiosPublic from '../../Utilities/useAxiosPublic';
import { useEffect, useState } from 'react';
import Post from './Post';

const Posts = () => {
    const axiosPublic = useAxiosPublic();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axiosPublic.get('/posts')
            .then(res => {
                setPosts(res.data.reverse());

            })
            .catch(error => {
                console.log(error);
            })
    }, [axiosPublic]);


    return (
        <div>
            {
                posts.map(post => <Post key={post._id} post={post} />)
            }
        </div>
    );
};

export default Posts;