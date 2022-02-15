function Tour(props) {

    return (
        <>
            <div >
                <h2>Name : {props.tour.name}</h2>
                <img src={props.tour.image} alt={props.tour.name} />
            </div>
        </>
    );
}

export default Tour;