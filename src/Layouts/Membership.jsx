import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./Payment";
import { useEffect, useState } from "react";
import useAxiosSecure from "../Utilities/useAxiosSecure";
import useAuth from "../Utilities/useAuth";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";



const Membership = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_payment_gatway);
    const axiosSecure = useAxiosSecure();
    const [gold, setgold] = useState();

    const { user } = useAuth();
    useEffect(() => {
        axiosSecure.get(`/users/${user?.email}`)
            .then(res => {
                console.log(res.data.badge);
                setgold(res.data.badge)
            })
    }, [axiosSecure, user])

    if (gold === "gold") {
        Swal.fire({
            title: "You're already a Gold Badge Holder",
            icon: "info"
        });
        return <Navigate to='/'></Navigate>
    }

    return (
        <div className="bg-[#739072] min-h-screen text-white py-20">
            <div className="w-[550px] mx-auto">
                <Helmet>
                    <title>Harmony | Memberbership</title>
                </Helmet>
                <div className="flex justify-between items-center mb-7 text-xl font-bold">
                    <h1>Make Your Payment for Membership</h1>
                    <p>Total bill: $9.99</p>
                </div>
                <Elements stripe={stripePromise}>
                    <Payment />
                </Elements>
            </div>
        </div>
    );
};

export default Membership;