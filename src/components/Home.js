
import '../App.css';
import data from '../data.json'
import Tours from './Tours';
import Header from './Header'
import Footer from './Footer'

function Home(props) {
    return (

        <>
        <Header/>

                <Tours data={data} />

<Footer/>
        </>

    );
}

export default Home;