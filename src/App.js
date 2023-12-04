import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { HomePage, GalleryPage, AboutPage } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
          {/* Horizontal navigation bar */}
          <nav className="bg-gray-800 p-4">
            <ul className="flex justify-center space-x-6">
              <li>
                <Link to="/" className="text-white hover:text-gray-300 mx-4">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white hover:text-gray-300 mx-4">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-gray-300 mx-4">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        
        {/* Route configuration */}
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/gallery" element={<GalleryPage/>} />
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
