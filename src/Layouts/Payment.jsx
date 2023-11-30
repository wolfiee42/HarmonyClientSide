import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../Utilities/useAuth"
import useAxiosSecure from "../Utilities/useAxiosSecure"
import Swal from "sweetalert2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const totalPrice = 9.99;
const Payment = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [err, setErr] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const axiosSecure = useAxiosSecure();
    const [transactionId, setTransactionId] = useState('')
    const { user } = useAuth();



    const handleForm = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })

        if (error) { //if any error occurs
            console.log("error message", error);
            setErr(error.message)
        } else { //otherwise
            console.log("payment method", paymentMethod);
            setErr('')
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || "annonymous",
                    email: user?.email || "annonymous"
                }
            }
        })

        if (confirmError) {
            console.log("cofirm error", confirmError);
        } else {
            console.log("payment intent", paymentIntent);
            if (paymentIntent.status === "succeeded") {
                console.log("transaction id: ", paymentIntent.id);
                setTransactionId(paymentIntent.id);

                axiosSecure.patch(`/users/${user?.email}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Hurrah!",
                                text: `Congratulations! Gold Pass Purchased Successfully. `,
                                icon: "success"
                            });
                        }
                    })
            }
        }



    }
    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure])
    const cardElementOptions = {
        style: {
            base: {
                fontSize: '16px',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                color: '#32325d',
                '::placeholder': {
                    color: '#aab7c4',
                },
            },
            invalid: {
                color: '#fa755a',
            },
        }
    }


    return (
        <div style={styles.cardContainer} className="text-white">
            <form onSubmit={handleForm}>
                <label style={styles.cardLabel}>
                    <FontAwesomeIcon icon={faCreditCard} style={styles.icon} /> Card details
                </label>
                <CardElement
                    options={cardElementOptions}
                />
                <button className="btn btn-neutral mt-5" type="submit"
                    disabled={!stripe}>
                    Pay
                </button>
                <p className="text-red-600">{err}</p>
                {transactionId && <p className="text-green-500 mt-5">transaction
                    completed,and your transaction ID id ' {transactionId} '</p>}
            </form>
        </div  >
    );
};
const styles = {
    cardContainer: {
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    cardLabel: {
        display: 'block',
        marginBottom: '10px',
        fontSize: '14px',
        fontWeight: 'bold',
    },
};
export default Payment;