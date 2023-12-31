import { FaUserAlt } from "react-icons/fa";
import { IoMdKey } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from '../Components/Button'
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "../Utilities/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { login, socialLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const axiosPublic = useAxiosPublic();


    const onSubmit = (data) => {

        const email = data.email;
        const password = data.password;

        login(email, password)
            .then(result => {
                console.log(result.user);
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error);
            })

    }

    const handleSocialLogin = () => {
        socialLogin()
            .then(res => {
                navigate(from, {replace: true});
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
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Account Created Successfully.",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            })
    }


    return (
        <div className="bg-[#ECE3CE] min-h-screen">
             <Helmet>
                <title>Harmony | Login</title>
            </Helmet>
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
                        <Button>Log in </Button>
                    </form>

                    <div className="flex items-center gap-5 my-5">
                        <p className="text-lg font-semibold">Or Login With </p>
                        <button className="btn bg-[#4F6F52] hover:bg-[#739072] text-white" onClick={handleSocialLogin}> <FcGoogle className="text-xl" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;