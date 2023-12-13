import { useState } from 'react';
import Container from '../../Components/Container'
import Posts from './Posts';
import TagSection from './TagSection';
import Announ from './Announ';
import { Helmet } from 'react-helmet-async';
import Contact from './Contact';

const Home = () => {
    const [search, setSearch] = useState('');

    const handleSearch = e => {
        e.preventDefault();
        const form = e.target;
        const searchBar = form.search.value;
        setSearch(searchBar)
    }
    return (
        <div className='bg-[#739072]'>
            <Helmet>
                <title>Harmony | Home</title>
            </Helmet>
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
            <Container>
                <TagSection />
                <Announ />
                <Posts search={search} />
                <Contact />
            </Container>
        </div>
    );
};

export default Home;