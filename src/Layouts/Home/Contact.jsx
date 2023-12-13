import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';




const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_serviceid, import.meta.env.VITE_templeteid, form.current, import.meta.env.VITE_pubickey)
            .then((result) => {
                console.log(result.text);
                toast.success('Email Sent Successfully!')
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='pb-10'>
            <div className="min-h-fit bg-[#ECE3CE] px-5 py-10 rounded-lg">

                <h1 className='text-3xl font-semibold my-8'>Contact Us</h1>
                <div className="hero min-h-fit">
                    <div className="hero-content flex-col items-center lg:flex-row">
                        <div className="text-center w-[500px] lg:text-left">
                            <h1 className="text-2xl font-bold">Contact Information</h1>
                            <div className="card w-full bg-gray-200 mb-5">
                                <div className="card-body flex-row gap-10 items-center text-center">
                                    <FaPhoneAlt className='text-5xl' />
                                    <div>
                                        <h2 className="card-title">Contact On Phone</h2>
                                        <h2 className="card-title my-1">+88 01720-888250</h2>
                                        <h2 className="card-title">+88 01979-288250</h2>
                                    </div>

                                </div>
                            </div>
                            <div className="card w-full bg-gray-200 mb-5">
                                <div className="card-body flex-row gap-10 items-center text-center">
                                    <FaPhoneAlt className='text-5xl' />
                                    <div>
                                        <h2 className="card-title">Contact On Mail</h2>
                                        <h2 className="card-title my-1">saifalislam2022@gmail.com</h2>
                                        <h2 className="card-title">wfie48640@gmail.com</h2>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="card shrink-0 w-[700px] shadow-2xl bg-gray-200">
                            <form className="card-body " ref={form} onSubmit={sendEmail}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter Your Name..." name="user_name" className="input bg-[#ECE3CE] input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Enter Your Email..." name="user_email" className="input bg-[#ECE3CE] input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea type="text" placeholder="Enter Your Message..." name="message" className="textarea bg-[#ECE3CE] textarea-bordered textarea-md w-full " required />
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-[#4F6F52] hover:bg-[#739072] text-white border-none" type="submit" value="Send" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
            </div>
        </div>
    );
};

export default Contact;