import { useEffect, useState } from "react";
import useAuth from "../../Utilities/useAuth";
import useAxiosSecure from "../../Utilities/useAxiosSecure";

const MyProfile = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [char, setChar] = useState({})
    useEffect(() => {
        axiosSecure.get(`/users/${user.email}`)
            .then(res => {
                setChar(res.data);
                console.log(res.data);
            })
    }, [axiosSecure, user.email])
    return (
        <div className="bg-[#ECE3CE] w-[900px] mx-auto mt-20 rounded-lg">
            <div className="flex justify-between items-start p-10 ">
                <div className="space-y-5">
                    <h1 className="uppercase text-3xl flex items-center gap-5"><span className="font-semibold">User: </span>
                        <div className="flex items-center gap-4">
                            {user?.displayName} {char?.badge === "bronze" ? <img className="w-8" src="https://i.ibb.co/bzZNwJ9/verB.png" alt="" /> : <img className="w-8" src="https://i.ibb.co/tJQ8Fqf/verG.png" />}
                        </div></h1>
                    <h1 className="text-3xl "><span className="uppercase font-semibold">Email: </span><span className="text-xl">{user?.email}</span></h1>
                    <h1 className="text-3xl uppercase  "><span className="font-semibold">badge: </span><span className="text-3xl">{char?.badge}</span></h1>
                </div>
                <div>
                    <img src={user?.photoURL} className="h-[400px] w-[400px] rounded-[50%]" alt="" />
                </div>
            </div>
        </div>
    );
};

export default MyProfile;