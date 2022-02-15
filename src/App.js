import './App.css';
import Home from './components/home/Home'
import data from './data/db.json'
import Tours from './components/tours/Tours';

import { Routes, Route } from 'react-router-dom';

//import Routes
function App() {
  return (
    <>

    
           <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/city/:id' element={ <Tours data={data} /> }/> 
         </Routes> 
         
        

    </>
  );
}

export default App;

/*
npx create-react-app Travel-Destination
cd Travel-Destination
npm start
*/




