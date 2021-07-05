import './App.css';
// import GeoLocation from './components/GeoLocation'
import Sitebar from './components/Sitebar'
//import TicketMaster from './components/TicketMaster'

import {
  BrowserRouter as Router
} from 'react-router-dom'

function App() {
  return (
    <div>

      <Router>
         <Sitebar />
      </Router>
      {/* <GeoLocation /> */}
      {/*<TicketMaster />*/}

</div>      

  );
}

export default App;