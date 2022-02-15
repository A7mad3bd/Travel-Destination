import { useState } from "react";
import { useParams } from "react-router-dom";
import data from '../../data/db.json';

function TourDetails() {
    const [ReadMore, setReadMore] = useState(false);
    let { id } = useParams();
    const result = data.filter((ele) => ele.id === id);

    return (
        <>

            <h2>{result[0].name}</h2>

            <h2>
                {
                    ReadMore ? `Info : ${result[0].info}`
                        : `Info : ${result[0].info.substring(0, 200)}......`}

                <button onClick={() => setReadMore(!ReadMore)}>
                    {ReadMore ? "Show Less" : "Show More"}
                </button>
            </h2>

            <h2> {result[0].price}</h2>

            <img src={result[0].image} />
        </>
    );
}

export default TourDetails;