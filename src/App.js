
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Topbar from './layout/Topbar';

// Layout 
import Header from './layout/Header';
import FixContent from './layout/FixContent';
import Footer from './layout/Footer';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurWorks from './pages/OurWorks';
import ContactUs from './pages/ContactUs';
import Services from './pages/services';

// Services
import Electrical from './pages/services/Electrical';
import Plumbing from './pages/services/Plumbing';
import Painting from './pages/services/Painting';
import Carpenter from './pages/services/Carpenter';
import LeakageRepair from './pages/services/LeakageRepair';
import InteriorRenation from './pages/services/InteriorRenation';
import CeilingPartition from './pages/services/CeilingPartition';



function App() {

  return (
    <BrowserRouter basename='/'>
      <Topbar />
      <Header />
      <FixContent />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/service' element={<Services />} />

              <Route path='/service/elecrical' element={<Electrical />} />
              <Route path='/service/plumbing' element={<Plumbing />} />
              <Route path='/service/painting' element={<Painting />} />
              <Route path='/service/carpenter' element={<Carpenter />} />        
              <Route path='/service/leakage_repair' element={<LeakageRepair/>} />
              <Route path='/service/interior_renovation' element={<InteriorRenation />} />
              <Route path='/service/ceiling_partition' element={<CeilingPartition />} />

          <Route path='/ourworks' element={<OurWorks />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
