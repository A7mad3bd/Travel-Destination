function Tours(props) {
    return (
        <>
            {
                props.data.map((tra, idx) => {
                    return (
                        <div key={idx}>
                            <h3>Name of the city: {tra.name} </h3>
                            <img src={tra.image} alt={tra.name} />
                        </div>
                    );
                })}
        </>
    );
}
export default Tours;
// Update Tours component:

// So in the previous task you was use div to render tours as card , but in this task and as you learn in today demo and instead of returning a <div> each time. you must return and render a <Tour/>.
// After that, you have to pass the data as props to the <Tour/ tour={tour} >.and don’t forget to add the id as a key.
// Tour component:

// In the tour component you have to display the same data that you have displayed before which are [ image, name ].