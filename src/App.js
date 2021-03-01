import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Components
import HeroCarousel from "./components/Hero/HeroCarousel";
import Red from "./components/Red/Red";

function App() {
  return (
    <div className="App">
      <HeroCarousel />
      <Red />
    </div>
  );
}

export default App;
