import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';


// import GeoLocation from './components/GeoLocation'
//import TicketMaster from './components/TicketMaster'

      {/* <Sitebar /> */}
      {/* <GeoLocation /> */}
      {/* <TicketMaster /> */}
      <Nasa />

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