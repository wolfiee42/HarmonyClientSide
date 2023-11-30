import { useLoaderData } from "react-router-dom";
import { MdFeedback, MdReport } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const PostComments = () => {
    const Allcommments = useLoaderData();
    console.log(Allcommments);

    return (
        <div className="bg-[#739072] min-h-screen p-10">
            <div className="overflow-x-auto  border-2 border-b-0 p-5 rounded-md bg-[#ECE3CE]">
                <Helmet>
                    <title>Harmony | Comments</title>
                </Helmet>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Comment</th>
                            <th>Feedback</th>
                            <th>Report</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Allcommments.map((comment, ind) => <tr key={comment._id}>
                                <th>{ind + 1}</th>
                                <td>{comment.userName}</td>
                                <td>{comment.userEmail}</td>
                                <td>{comment.comment}</td>
                                <td><div className="dropdown dropdown-bottom">
                                    <div tabIndex={0} role="button" className="btn m-1"><MdFeedback /></div>
                                    <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Thanks</a></li>
                                        <li><a>Irrelevant</a></li>
                                        <li><a>Slang Words</a></li>
                                    </ul>
                                </div></td>
                                <td><button className="btn hover:cursor-not-allowed"><MdReport /></button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PostComments;