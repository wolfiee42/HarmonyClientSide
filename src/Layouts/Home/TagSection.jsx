const TagSection = () => {
    return (

        <div className=" my-20">
            <h1 className=" text-3xl font-semibold my-8 ">Tag Section</h1>
            <div className="indicator bg-[#ECE3CE] p-5 rounded-md flex-col min-w-full">
                <span className="indicator-item badge badge-neutral py-3">Coming Soon</span>
                <h1 className="text-lg font-semibold mb-5">With the lower tags you can Search posts</h1>
                <div className="my-4">
                    <span className="badge text-base p-5 mr-5 bg-[#4F6F52] text-white">Entertainment</span>
                    <span className="badge text-base p-5 mr-5 bg-[#4F6F52] text-white">Lifestyle</span>
                    <span className="badge text-base p-5 mr-5 bg-[#4F6F52] text-white">History</span>
                    <span className="badge text-base p-5 mr-5 bg-[#4F6F52] text-white">Payment</span>
                    <span className="badge text-base p-5 mr-5 bg-[#4F6F52] text-white">Query</span>
                    <span className="badge text-base p-5 mr-5 bg-[#4F6F52] text-white">Tour</span>
                </div>

            </div>
        </div>
    );
};

export default TagSection;