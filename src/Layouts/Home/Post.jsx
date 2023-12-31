/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Post = ({ post }) => {

    return (
        <Link to={`/postdetails/${post._id}`}>
            <div className="flex bg-[#ECE3CE] rounded-md my-5 p-5 justify-around items-center shadow-2xl hover:cursor-pointer hover:bg-opacity-75" >
                <div className="flex flex-col w-1/2 items-center space-y-3">
                    <img className="rounded-[50%]" src={post.authorImg} alt="" />
                </div>
                <div className="space-y-4 w-1/2">
                    <h1 className="text-2xl font-semibold">Author: <span className="uppercase">{post.author}</span></h1>
                    <h1 className="text-xl font-medium">Title: <span>{post.title}</span></h1>
                    <p className="text-xl font-medium"> <span className="underline font-semibold">#{post.posttag}</span></p>
                    <p className="text-xl font-mediu"> <span>{post.time.split("T")[1].split(".")[0]} {post.time.split("T")[0]}</span></p>
                </div>
            </div>
        </Link>
    );
};

export default Post;