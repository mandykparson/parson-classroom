import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import PrimaryNavigation from './components/PrimaryNavigation/PrimaryNavigation';
import Units from './pages/UnitsPage/Units';
import Resources from './pages/ResourcesPage/Resources';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Router>
        <PrimaryNavigation />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/units" element={<Units />} />
            <Route path="/resources" element={<Resources />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
