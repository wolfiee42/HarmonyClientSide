import { useEffect, useState } from "react";
import useAuth from "../../Utilities/useAuth";
import useAxiosSecure from "../../Utilities/useAxiosSecure";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
    const axiosSecure = useAxiosSecure();
    const [posts, setpost] = useState([]);
    const { user } = useAuth();
    const [char, setChar] = useState([])
    useEffect(() => {
        axiosSecure.get(`/users/${user?.email}`)
            .then(res => {
                setChar(res.data);
                console.log(res.data);
            })
    }, [axiosSecure, user.email])

    useEffect(() => {
        axiosSecure.get(`/posts?email=${user?.email}`)
            .then(res => {
                console.log(res.data.result44);
                setpost(res.data.result44);
            })
    }, [axiosSecure, user])


    return (
        <div className="bg-[#739072] min-h-screen py-20">
             <Helmet>
                <title>Harmony | My Profile</title>
            </Helmet>
            <div className="bg-[#ECE3CE] w-[900px] mx-auto  rounded-lg">
                <div className="flex justify-between items-start p-10 ">
                    <div className="space-y-5">
                        <h1 className="uppercase text-3xl flex items-center gap-5"><span className="font-semibold">User: </span>
                            <div className="flex items-center gap-4">
                                {user?.displayName} {char?.badge === "bronze" ? <img className="w-8" src="https://i.ibb.co/bzZNwJ9/verB.png" alt="" /> : <img className="w-8" src="https://i.ibb.co/tJQ8Fqf/verG.png" />}
                            </div></h1>
                        <h1 className="text-3xl "><span className="uppercase font-semibold">Email: </span><span className="text-xl">{user?.email}</span></h1>
                        <h1 className="text-3xl uppercase  "><span className="font-semibold">badge: </span><span className="text-3xl">{char?.badge}</span></h1>
                    </div>
                    <div>
                        <img src={user?.photoURL} className="h-[400px] w-[400px] rounded-[50%]" alt="" />
                    </div>
                </div>
            </div>
            <div className="w-[900px] mx-auto mt-20">
                <h1 className="text-3xl font-semibold">Recent Posts</h1>
                {posts.map(post => <div key={post._id} className="flex bg-[#ECE3CE] rounded-md my-5 p-5 justify-around items-center shadow-2xl" >
                    <div className="w-1/2 flex flex-col items-center space-y-3">
                        <img className="rounded-[50%]" src={post.authorImg} alt="" />
                    </div>
                    <div className="w-1/2 space-y-4">
                        <h1 className="text-2xl font-semibold">Author: <span className="uppercase">{post.author}</span></h1>
                        <h1 className="text-xl font-medium">Post Title: <span>{post.title}</span></h1>
                        <p className="text-xl font-medium">Post Tag: <span className="underline font-semibold">#{post.posttag}</span></p>
                        <p className="text-xl font-mediu">Post Time: <span>{post.time.split("T")[1].split(".")[0]} {post.time.split("T")[0]}</span></p>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default MyProfile;