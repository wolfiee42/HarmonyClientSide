import Container from '../../Components/Container'
import Posts from './Posts';
import TagSection from './TagSection';
import Announ from './Announ';
import { Helmet } from 'react-helmet-async';
import Contact from './Contact';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='bg-[#739072]'>
            <Helmet>
                <title>Harmony | Home</title>
            </Helmet>
            <Banner />
            <Container>
                <TagSection />
                <Announ />
                <Posts />
                <Contact />
            </Container>
        </div>
    );
};

export default Home;