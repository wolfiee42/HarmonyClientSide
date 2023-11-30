import { useState } from "react";
import useAxiosSecure from "../../Utilities/useAxiosSecure";
import { FaUser } from "react-icons/fa";
import Swal from 'sweetalert2'
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Utilities/useAuth";
import { Helmet } from "react-helmet-async";

const ManageUser = () => {
    const axiosSecure = useAxiosSecure();
    const [users, setUsers] = useState([]);
    const { user } = useAuth()
    // useEffect(() => {
    //     axiosSecure.get('/users')
    //         .then(res => {
    //             setUsers(res.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }, [axiosSecure]);

    const { data, refetch } = useQuery({
        queryKey: [user?.email],
        queryFn: async () => {
            axiosSecure.get('/users')
                .then(res => {
                    setUsers(res.data);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    })


    const handleMakeAdmin = (user) => {
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
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Hurrah!",
                                text: `${user.name} has been updated to ADMIN.`,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="bg-[#739072] min-h-screen p-10">
            <div className="overflow-x-auto border-2 border-b-0 p-5 rounded-md bg-[#ECE3CE]">
                <Helmet>
                    <title>Harmony | Manage User</title>
                </Helmet>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Memberbership Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, ind) => <tr key={user.email}>
                                <th>{ind + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                {/* <td><button onClick={() => handleMakeAdmin(user)} className="btn"><FaUser /></button></td> */}
                                <td>
                                    {user?.role ? "admin" : <button onClick={() => handleMakeAdmin(user)} className="btn bg-[#4F6F52] hover:bg-[#739072] text-white"><FaUser /></button>}

                                </td>
                                <td>{user?.badge}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;