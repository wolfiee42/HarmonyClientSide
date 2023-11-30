import { useEffect, useState } from "react";
import useAxiosPublic from "../../Utilities/useAxiosPublic";

const Announ = () => {
    const axiosPublic = useAxiosPublic();
    const [announcement, setannouncement] = useState([]);
    useEffect(() => {
        axiosPublic.get('/announcement')
            .then(res => {
                setannouncement(res.data);
            })
    }, [axiosPublic])

    if (announcement.length > 0) {
        return (
            <div>
                <h1 className=" text-3xl font-semibold my-8 ">Announcement Section</h1>
                {announcement.map(announc => <div key={announc._id} className="flex flex-col border-2 p-5 my-10 rounded-md shadow-2xl bg-[#ECE3CE]">
                    <div className="flex gap-5 items-center">
                        <div>
                            <img className="w-16 h-16 rounded-[50%]" src={announc.autherImg} alt="" />
                        </div>
                        <div>
                            <h1 className="text-lg">{announc.auhtorName}</h1>
                            <p>{announc.time}</p>
                        </div>
                    </div>
                    <div className="my-5 space-y-3">
                        <h1 className="text-2xl font-semibold">{announc.annTitle}</h1>
                        <p className="text-xl font-semibold">{announc.annDesc}<span className="text-xl"></span></p>
                    </div>
                </div>)}


            </div>
        );
    }

};

export default Announ;