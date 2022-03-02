import './App.css';
import Page from './components/pages/page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingCard from './components/landingCard/landingCard';
import { VesselInfo } from './components/Vessel/vessel';
import { Rates } from './components/rates/rates';
import { NFCalendar } from './components/calendar/calendar';
import { TripDetails } from './components/tripDetails/tripDetails';
import Crew from './components/crew/crew';
import Policies from './components/policies/policies';
import Gallery from './components/gallery/gallery';
import Contact from './components/contact/contact';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Page />}>
          <Route path='/' exact element={<LandingCard />} />
          <Route path='/thenearfall' exact element={<VesselInfo />} />
          <Route path='/rates' exact element={<Rates />} />
          <Route path='/calendar' exact element={<NFCalendar />} />
          <Route path='/trip/:tripName' element={<TripDetails />} />
          <Route path='/thecrew' exact element={<Crew />} />
          <Route path='/policies' exact element={<Policies />} />
          <Route path='/gallery' exact element={<Gallery />} />
          <Route path='/contact' exact element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
