import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BackgroundEffect from './components/BackgroundEffect';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <HashRouter>
      <BackgroundEffect 
        colors={['#E6EFFF', '#FFE6F8', '#FFF3E8']}
        resolution={0.4}
        simResolution={128}
        style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
