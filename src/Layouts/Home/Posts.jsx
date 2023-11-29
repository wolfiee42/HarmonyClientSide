import useAxiosPublic from '../../Utilities/useAxiosPublic';
import { useEffect, useState } from 'react';
import Post from './Post';

const Posts = () => {
    const axiosPublic = useAxiosPublic();
    const [posts, setPosts] = useState([]);
    const [count, setcount] = useState(null)
    const itemPerPage = 5;
    const numOfPages = Math.ceil(count / itemPerPage);
    const [currentPage, setCurrentPage] = useState(0);


    const pages = [...Array(numOfPages).keys()];

    useEffect(() => {
        axiosPublic.get(`/posts?page=${currentPage}&size=${itemPerPage}`)
            .then(res => {
                setPosts(res.data.result);

            })
            .catch(error => {
                console.log(error);
            })
    }, [axiosPublic, currentPage]);
    useEffect(() => {
        axiosPublic.get('/postcount')
            .then(res => {
                setcount(res.data.result);
            })
    }, [axiosPublic])



    return (
        <div>
            <div className='my-10'>
                {
                    posts.map(post => <Post key={post._id} post={post} />)
                }
            </div>
            <div className='my-5'>
                {
                    pages.map(page => 
                    <button onClick={() => setCurrentPage(page)} className='btn mx-2' key={page}>{page + 1}</button>
                    )
                }
            </div>
        </div>
    );
};

export default Posts;