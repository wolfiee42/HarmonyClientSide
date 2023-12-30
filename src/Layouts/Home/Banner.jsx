import { useContext } from "react";
import { AuthSearchContext } from "../../Provider/SearchProvider";

const Banner = () => {
    const { updatedSearch } = useContext(AuthSearchContext);

    const handleSearch = e => {
        e.preventDefault();
        const form = e.target;
        const searchBar = form.search.value;
        updatedSearch(searchBar)
        
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/wsMdtH8/anton-darius-H1-ZUlh1l-C7-Q-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold">Search with tags</h1>
                    <form onSubmit={handleSearch} className="w-[500px] space-x-5">
                        <input name="search" className="input input-bordered w-[350px]" type="text" placeholder="Search here..." />
                        <input className="btn bg-[#4F6F52] hover:bg-[#739072] text-white" type="Submit" value='Search' />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Banner;