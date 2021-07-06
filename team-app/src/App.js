import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
<<<<<<< HEAD
// import GeoLocation from './components/GeoLocation'
// import Sitebar from './components/Sitebar'
import TicketMaster from './components/TicketMaster'
import reactstrap from 'reactstrap'
=======
>>>>>>> 16e98d7152baa8121fae9385c129fb8ee26ea1f6


// import GeoLocation from './components/GeoLocation'
//import TicketMaster from './components/TicketMaster'

import Sidebar from './components/site/Sidebar';
import Header from './components/site/Header';
import Footer from './components/site/Footer';

import {
  BrowserRouter as Router
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Header />
     <Router>
       <Sidebar />
     </Router>
     <Footer />
    </div>
  );
}

export default App;