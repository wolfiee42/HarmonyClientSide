import { FaUserAlt } from "react-icons/fa";
import { IoMdKey } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "../Utilities/useAxiosPublic";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { login, socialLogin } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const onSubmit = (data) => {

        const email = data.email;
        const password = data.password;

        login(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })

    }

    const handleSocialLogin = () => {
        socialLogin()
            .then(res => {
                const badge = "bronze"
                const user = {
                    name: res.user?.displayName,
                    email: res.user?.email, 
                    badge
                };
                axiosPublic.post("/users", user)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.insertedId) {
                            alert("account created")
                        }
                    })
            })
    }


    return (
        <div className="bg-[#ECE3CE] min-h-screen">
            <div className="max-w-5xl mx-auto flex justify-center items-start bg-white rounded-lg  shadow-2xl">
                <div>
                    <img src="https://i.ibb.co/5GqmCBq/fax.png" alt="" />
                    <p className="text-center underline font-semibold hover:cursor-pointer hover:text-[#739072]"><Link to='/signup'>Create an account</Link></p>
                </div>
                <div className="my-20 flex flex-col">
                    <h1 className="text-4xl font-bold mb-16 text-center">Log In</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="relative">
                            <FaUserAlt className="absolute -left-8 top-2" />
                            <input type="email" {...register("email", { required: true })} placeholder="Email" className="border-b-2 mb-8 p-1 w-[300px]" /> <br />
                        </div>
                        <div className="relative">
                            <IoMdKey className="absolute -left-8 top-2 text-2xl" />
                            <input type="password" {...register("password", { required: true })} placeholder="Your Password" className="border-b-2 mb-8 p-1 w-[300px]" />
                        </div>
                        <button className="btn">Log in </button>
                    </form>

                    <div className="flex items-center gap-5 my-5">
                        <p className="text-lg font-semibold">Or Login With </p>
                        <button className="btn" onClick={handleSocialLogin}> <FcGoogle className="text-xl" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;