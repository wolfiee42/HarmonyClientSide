import { useState } from "react";
import useAxiosSecure from "../../Utilities/useAxiosSecure";
import useAuth from "../../Utilities/useAuth";
import { FaCommentDots } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyPost = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [posts, setposts] = useState([]);

    const { data, refetch } = useQuery({
        queryKey: [user?.email],
        queryFn: () => {
            axiosSecure.get(`posts?email=${user?.email}`)
                .then(res => {
                    console.log(res.data.result22);
                    setposts(res.data.result22);
                })
        }
    })

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/posts/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            console.log(_id);
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }

        });
    }



    return (
        <div className="bg-[#739072] min-h-screen p-10">
            <div className="overflow-x-auto  border-2 border-b-0 p-5 rounded-md bg-[#ECE3CE]">
                <Helmet>
                    <title>Harmony | My Posts</title>
                </Helmet>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Post Title</th>
                            <th>Votes</th>
                            <th>Comments</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post, ind) => <tr key={post._id}>
                            <th>{ind + 1}</th>
                            <td>{post.title}</td>
                            <td>Rendering</td>
                            <td> <Link to={`/dashboard/mypost/${post.title}`} className="btn"><FaCommentDots className="hover:cursor-pointer text-2xl" /></Link></td>
                            <td> <button onClick={() => handleDelete(post._id)} className="btn"><FaRegTrashCan className="hover:cursor-pointer text-red-600 text-2xl" /></button></td>

                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPost;