import { useEffect, useState } from "react";
import useAuth from "../../Utilities/useAuth";
import useAxiosSecure from "../../Utilities/useAxiosSecure";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";
import { Toaster } from 'react-hot-toast';



const AddPost = () => {
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit } = useForm();
    const { user } = useAuth();
    const [char, setChar] = useState({});
    const [tag, setTag] = useState("");
    const handleTag = e => {
        e.preventDefault();
        const selectedTag = e.target.value;
        setTag(selectedTag)

    }

    useEffect(() => {
        axiosSecure.get(`/users/${user.email}`)
            .then(res => {
                setChar(res.data);
            })
    }, [axiosSecure, user.email]);

    const onsubmit = data => {
        const author = char?.name;
        const authorImg = user?.photoURL;
        const authorEmail = char?.email;
        const time = new Date();
        const title = data.title;
        const description = data.description;
        const posttag = tag;
        const UpVote = 0;
        const downvote = 0;

        const post = { author, authorImg, authorEmail, time, title, description, posttag, UpVote, downvote };

        axiosSecure.post('/posts', post)
            .then(res => {
                console.log(res.data);
            })

    }





    return (
        <div className="flex w-[90%] my-16 p-10 mx-auto bg-[#ECE3CE] space-x-7 rounded-md">
            <div className="space-y-5 w-1/3">
                <img className="w-[200px] h-[200px] rounded-[50%]" src={user.photoURL} alt="" />
                <h1 className="text-xl">Author Name: <span className="font-semibold uppercase">{char.name}</span></h1>
                <h1 className="text-xl">Author Email: <span className="text-base">{char.email}</span></h1>
            </div>
            <form onSubmit={handleSubmit(onsubmit)} className="w-2/3 space-y-5">
                <div className="form-control w-full max-w-xl">
                    <label className="label">
                        <span className="label-text">Post Title</span>
                    </label>
                    <input {...register('title', { required: true })} type="text" placeholder="Title of the post" className="input input-bordered w-full max-w-xl" />
                </div>
                <div className="form-control w-full max-w-xl">
                    <label className="label">
                        <span className="label-text">Post Description</span>
                    </label>
                    <textarea  {...register('description', { required: true })} className="textarea textarea-bordered h-24" placeholder="Express Your Thoughts"></textarea>
                </div>
                <div className="form-control w-full max-w-xl">
                    <label className="label">
                        <span className="label-text">Tag</span>
                    </label>
                    <select required className="select select-bordered w-full" onChange={handleTag}>
                        <option disabled selected>Pick one</option>
                        <option value='Entertainment'>Entertainment</option>
                        <option value='Lifestyle'>Lifestyle</option>
                        <option value='History'>History</option>
                        <option value='Payment'>Payment</option>
                        <option value='Query'>Query</option>
                        <option value='Update'>Update</option>
                        <option value='Tour'>Tour</option>
                    </select>
                </div>
                <div className="flex justify-between ">
                    <div className="flex-grow">
                        <button disabled className="btn w-[240px]"><AiFillLike className="text-xl" /> (0)</button>
                    </div>
                    <div className="flex-grow">
                        <button disabled className="btn w-[240px]"><AiFillDislike className="text-xl" /> (0)</button>
                    </div>
                </div>
                <div>
                    <button className="w-[576px] btn"> Add Post</button>
                </div>
            </form>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default AddPost;