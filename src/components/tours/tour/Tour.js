// Tour Description :

// The user should not have see the whole description
// once he/she reach to detail page he just have to see the first three lines and then he should see see more and once he click on it he have to see the rest of description and also he have see see less to shrink and description to be as he was see before in three lines .

// Hint: -You may use useState hooks to create state of the view of the description.



// import Login from "./Login";
// import { useState } from "react";

// function Home (){
//    const [isLoggedIn, setLoggedin] = useState(false);
//    const [userName, setUserName]= useState("");

//    // when the user click on the buuton I want to change the state from false to true 
//    const handleLoggin = () =>{

//     setLoggedin(!isLoggedIn) // inside the pracketes I will add the new state value 
    
//  }


//     return(
//         <>
//         <main>
//             <h2>
//                 Welcome {userName} to the Home page ;
//             </h2> 
//            <Login isLoggedIn={isLoggedIn} handleLoggin={handleLoggin} />
//         </main>
//      </>
//     )

// }

// export default Home;




// function Login (props){
 
//     console.log(props);

//     // if(props.isLoggedIn){
//     //     return(

//     //         <>
//     //           <button onClick={props.handleLoggin}>Logout</button>
        
//     //         </>
//     //         );
//     // }else{
//     //     return(

//     //         <>
//     //           <button onClick={props.handleLoggin}>Login</button>
        
//     //         </>
//     //         );
//     // }

//     return props.isLoggedIn ?   <button onClick={props.handleLoggin}>Logout</button> :   <button onClick={props.handleLoggin}>Login</button>


// }

// export default Login;


