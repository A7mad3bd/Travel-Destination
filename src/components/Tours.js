function Tours(props) {
    return (


        <>
            {
                props.data.map(tra => {
                    return (

                        <div>
                            <h3>Name of the city: {tra.name} </h3>
                            
                            <img src={tra.image} alt={tra.name} />
                      


                        </div>
                    );

                })}

        </>







    );
}
export default Tours;