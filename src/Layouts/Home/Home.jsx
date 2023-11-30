import { useState } from 'react';
import Container from '../../Components/Container'
import Posts from './Posts';

const Home = () => {
    const [search, setSearch] = useState('');

    const handleSearch = e => {
        e.preventDefault();
        const form = e.target;
        const searchBar = form.search.value;
        setSearch(searchBar)
    }
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/wsMdtH8/anton-darius-H1-ZUlh1l-C7-Q-unsplash.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <form onSubmit={handleSearch} className="w-[500px] space-x-5">
                            <input name="search" className="input input-bordered w-[350px]" type="text" placeholder="Search here..." />
                            <input className="btn" type="Submit" value='Search' />
                        </form>

                    </div>
                </div>
            </div>
            <Container>
                <Posts search={search} />
            </Container>
        </div>
    );
};

export default Home;