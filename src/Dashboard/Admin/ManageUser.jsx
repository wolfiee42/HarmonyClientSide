import { useEffect, useState } from "react";
import useAxiosSecure from "../../Utilities/useAxiosSecure";
import { FaUser } from "react-icons/fa";


const ManageUser = () => {
    const axiosSecure = useAxiosSecure();
    const [users, setUsers] = useState([])
    useEffect(() => {
        axiosSecure.get('/users')
            .then(res => {
                setUsers(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [axiosSecure])
    return (
        <div className="overflow-x-auto p-10">
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
                            <td><button className="btn"><FaUser /></button></td>
                            <td>{user?.badge}</td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageUser;