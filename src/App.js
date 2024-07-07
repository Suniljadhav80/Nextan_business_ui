import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <About />
    </div>
  );
}

export default App;
