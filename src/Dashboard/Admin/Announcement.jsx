import { Toaster } from "react-hot-toast";
import useAuth from "../../Utilities/useAuth";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Utilities/useAxiosSecure";
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';

const Announcement = () => {
    const { user } = useAuth();
    const { register, handleSubmit } = useForm();
    const axiosSecure = useAxiosSecure();

    const autherImg = user?.photoURL;
    const auhtorName = user?.displayName;

    const onSubmit = data => {
        const annTitle = data.annTitle;
        const annDesc = data.annDesc;
        const time = new Date();
        const announcement = { annTitle, annDesc, auhtorName, autherImg, time };
        axiosSecure.post('/announcement', announcement)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Announcement Posted Successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    window.location.reload();
                }
            })
    }


    return (
        <div className="bg-[#739072] min-h-screen py-16">
            <div className="flex w-[90%]  p-10 mx-auto bg-[#ECE3CE] space-x-7 rounded-md">
                <Helmet>
                    <title>Harmony | Announcement</title>
                </Helmet>
                <div className="space-y-5 w-1/3">
                    <img className="w-[200px] h-[200px] rounded-[50%]" src={user?.photoURL} alt="" />
                    <h1 className="text-xl">Author Name: <span className="font-semibold uppercase">{user?.displayName}</span></h1>
                    <h1 className="text-xl">Email: <span className="text-base">{user?.email}</span></h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 space-y-5">
                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text">Announcement Title</span>
                        </label>
                        <input {...register("annTitle", { required: true })} type="text" placeholder="Title of the post" className="input input-bordered w-full max-w-xl" />
                    </div>
                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea {...register("annDesc", { required: true })} className="textarea textarea-bordered h-24" placeholder="Express Your Thoughts"></textarea>
                    </div>
                    <div>
                        <button className="w-[576px] btn bg-[#4F6F52] hover:bg-[#739072] text-white">Post</button>
                    </div>
                </form>
                <Toaster
                    position="bottom-center"
                    reverseOrder={false}
                />
            </div>
        </div>
    );
};

export default Announcement;