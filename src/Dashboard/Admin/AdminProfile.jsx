import { useEffect, useState } from "react";
import useAuth from "../../Utilities/useAuth";
import useAxiosSecure from "../../Utilities/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';

const AdminProfile = () => {
    const axiosSecure = useAxiosSecure();
    const [post, setPost] = useState(0);
    const [comments, setcomments] = useState(0);
    const [users, setusers] = useState(0);

    useEffect(() => {
        axiosSecure.get('/postcount')
            .then(res => {
                setPost(res.data.result);
            })
    }, [axiosSecure])

    useEffect(() => {
        axiosSecure.get('/commnetcount')
            .then(res => {
                setcomments(res.data.result);
            })
    }, [axiosSecure])

    useEffect(() => {
        axiosSecure.get('/usercount')
            .then(res => {
                setusers(res.data.result);
            })
    }, [axiosSecure])




    const { user } = useAuth();
    return (
        <div className="bg-[#739072] min-h-screen py-20">
            <div className="w-[900px] mx-auto rounded-lg">
                <Helmet>
                    <title>Harmony | Admin</title>
                </Helmet>
                <div className="bg-[#ECE3CE] w-[900px] mx-auto rounded-lg">
                    <div className="flex justify-between items-center p-10 ">
                        <div className="space-y-5">
                            <h1 className="uppercase text-3xl flex items-center gap-5"><span className="font-semibold">User: </span>
                                <div className="flex items-center gap-4">
                                    {user?.displayName}
                                </div></h1>
                            <h1 className="text-3xl "><span className="uppercase font-semibold">Email: </span><span className="text-xl">{user?.email}</span></h1>
                        </div>
                        <div>
                            <img src={user?.photoURL} className="h-[400px] w-[400px] rounded-[50%]" alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center h-[200px]" >
                    <div className="stats shadow rounded-md w-[900px] mx-auto bg-[#ECE3CE]">

                        <div className="stat">
                            <div className="stat-figure text-[#4F6F52]">
                                <FaUsers className="text-3xl" />
                            </div>
                            <div className="stat-title">Total Users</div>
                            <div className="stat-value">{users}</div>
                            <div className="stat-desc">Jan 1st - Feb 1st</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-[#4F6F52]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                            </div>
                            <div className="stat-title">Total Posts</div>
                            <div className="stat-value">{post}</div>
                            <div className="stat-desc">↗︎ 400 (22%)</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-[#4F6F52]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                            </div>
                            <div className="stat-title">Total Comments</div>
                            <div className="stat-value">{comments}</div>
                            <div className="stat-desc">↘︎ 90 (14%)</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;