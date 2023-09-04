import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Tasks from './components/tasks/Tasks';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Tasks />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
