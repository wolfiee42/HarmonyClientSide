/* eslint-disable react/prop-types */
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";


const Post = ({ post }) => {

    return (
        <Link to={`/postdetails/${post._id}`}>
            <div className="flex bg-[#ECE3CE] rounded-md my-5 p-5 justify-around items-center shadow-2xl hover:cursor-pointer hover:bg-opacity-75" >
                <div className="flex flex-col items-center space-y-3">
                    <img className="rounded-[50%]" src={post.authorImg} alt="" />
                    <h1 className="text-2xl font-semibold">Author: <span className="uppercase">{post.author}</span></h1>
                </div>
                <div className="space-y-4">
                    <h1 className="text-xl font-medium">Post Title: <span>{post.title}</span></h1>
                    <p className="text-xl font-medium">Post Tag: <span className="underline font-semibold">#{post.posttag}</span></p>
                    <p className="text-xl font-mediu">Post Time: <span>{post.time}</span></p>
                    <p className="flex items-center gap-10 text-xl font-medium"><AiFillLike className="text-2xl" />: {post.UpVote}</p>
                    <p className="flex items-center gap-10 text-xl font-medium"><AiFillDislike className="text-2xl" />: {post.downvote}</p>
                </div>
            </div>
        </Link>
    );
};

export default Post;