import data from '../../data/db.json'
import Tours from '../tours/Tours.js'

function Home(props) {
    return (

        <>
            <Tours data={data} />
        </>
    );
}
export default Home;