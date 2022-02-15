
import { Link } from "react-router-dom";
import Tour from "../tours/tour/Tour";

function Tours(props) {

    return (
        <>
            {props.data.map((tra, idx) => {
                return (
                    <div key={idx}>
                        <Link to={`/city/${tra.id}`}> <Tour tour={tra} /></Link>
                    </div>
                );
            })}
        </>
    );
}

export default Tours;