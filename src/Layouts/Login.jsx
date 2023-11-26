import { FaUserAlt } from "react-icons/fa";
import { IoMdKey } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="bg-[#ECE3CE] min-h-screen">
            <div className="max-w-5xl mx-auto flex justify-center items-start bg-white rounded-lg">
                <div>
                    <img src="https://i.ibb.co/5GqmCBq/fax.png" alt="" />
                    <p className="text-center underline font-semibold hover:cursor-pointer hover:text-[#739072]"><Link to='/signup'>Create an account</Link></p>
                </div>
                <div className="my-20 flex flex-col text-center">
                    <h1 className="text-4xl font-bold mb-16">Log In</h1>
                    <form>
                        <div className="relative">
                            <FaUserAlt className="absolute -left-8 top-2" /> <input type="email" placeholder="Email" className="border-b-2 mb-8 p-1 w-[300px]" name="" id="" /> <br />
                        </div>
                        <div className="relative">
                            <IoMdKey className="absolute -left-8 top-2 text-2xl" />
                            <input type="password" placeholder="Your Password" className="border-b-2 mb-8 p-1 w-[300px]" name="" id="" />
                        </div>
                        <Button>Log in </Button>
                    </form>

                    <div className="flex items-center gap-5 my-5">
                        <p className="text-lg font-semibold">Or Login With </p>
                        <button className="btn"> <FcGoogle className="text-xl" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;