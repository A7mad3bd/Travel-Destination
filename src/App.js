import './App.css';
import Home from './components/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import TourDetails from './components/TourDetails/TourDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />

      <Routes >
        <Route path='/' element={<Home />}> </Route>
        <Route path='/city/:id' element={<TourDetails />}> </Route>
      </Routes>

      <Footer />


    </>
  );
}

export default App;

/*
npx create-react-app Travel-Destination
cd Travel-Destination
npm start
*/




