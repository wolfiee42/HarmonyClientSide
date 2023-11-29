/* eslint-disable react/prop-types */
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";



const Post = ({ post }) => {
    return (
        <div className="flex flex-col border-2 p-5 m-3 rounded-md shadow-2xl">
            <div className="flex gap-5 items-center">
                <div>
                    <img className="w-16 h-16 rounded-[50%]" src={post.authorImg} alt="" />
                </div>
                <div>
                    <h1 className="text-lg">{post.author}</h1>
                    <p>{post.time}</p>
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-semibold">{post.title}</h1>
            </div>
            <div className="divider"></div>
            <div className="flex justify-around gap-3">
                <button className="btn flex-grow"><AiFillLike className="text-xl" /></button>
                <button className="btn flex-grow"><AiFillDislike className="text-xl" /></button>
                <button className="btn flex-grow"><FaComment className="text-xl" /></button>
            </div>
        </div>
    );
};

export default Post;