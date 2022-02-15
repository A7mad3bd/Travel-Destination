
import data from '../../data/db.json'
import Tours from '../tours/Tours';
import Header from '../header/Header'
import Footer from '../footer/Footer'


function Home(props) {
    return (

        <>
            <Header />


            <Tours data={data} />

            <Footer />
        </>

    );
}
export default Home;