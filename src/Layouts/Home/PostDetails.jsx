import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import Container from "../../Components/Container";
import Swal from 'sweetalert2'
import useAuth from "../../Utilities/useAuth"
import useAxiosSecure from "../../Utilities/useAxiosSecure";



const PostDetails = () => {
    const { authorImg, author, title, time, posttag, description } = useLoaderData();
    const { user } = useAuth();
    const userEmail = user?.email;
    const userName = user?.displayName;
    const axiosSecure = useAxiosSecure();
    const location = useLocation();



    const handleComment = async () => {

        const ipAPI = "//api.ipify.org?format=json";
        const response = await fetch(ipAPI);
        const data = await response.json();
        const inputValue = data;
        const { value: comment } = await Swal.fire({
            title: "Enter your Comment",
            input: "text",
            inputLabel: "Your Comment",
            inputValue,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "You need to write something!";
                }
            }
        });
        console.log(comment);
        if (comment) {
            const commentPack = { comment, title, userEmail, userName }
            axiosSecure.post('/comments', commentPack)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire(`Your Comment is " ${comment} "`);
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
    return (
        <div className="bg-[#739072] p-10 min-h-screen">
            <Container>
                <div className="flex flex-col border-2 p-5 mx-3      rounded-md shadow-2xl bg-[#ECE3CE]">
                    <div className="flex gap-5 items-center">
                        <div>
                            <img className="w-16 h-16 rounded-[50%]" src={authorImg} alt="" />
                        </div>
                        <div>
                            <h1 className="text-lg">{author}</h1>
                            <p>{time}</p>
                        </div>
                    </div>
                    <div className="my-5 space-y-3">
                        <p className="underline">#{posttag}</p>
                        <h1 className="text-2xl font-semibold"> {title}</h1>
                        <p className="text-xl font-semibold"><span className="text-xl">{description}</span></p>
                    </div>
                    <div className="divider"></div>
                    <div className="flex justify-around gap-3">
                        <button className="btn flex-grow bg-[#4F6F52] hover:bg-[#739072] text-white"><AiFillLike className="text-xl" /></button>
                        <button className="btn flex-grow bg-[#4F6F52] hover:bg-[#739072] text-white"><AiFillDislike className="text-xl" /></button>
                        {user ?
                            <button onClick={handleComment} className="btn flex-grow bg-[#4F6F52] hover:bg-[#739072] text-white"><FaComment className="text-xl" /></button> :
                            <Link className="btn flex-grow bg-[#4F6F52] hover:bg-[#739072] text-white" to={'/login'} state={{ from: location }} replace><FaComment className="text-xl" /></Link>}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PostDetails;