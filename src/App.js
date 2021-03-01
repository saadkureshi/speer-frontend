import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Components
import HeroCarousel from "./components/Hero/HeroCarousel";
import Red from "./components/Red/Red";
import HamburgerMenu from './components/HamburgerMenu';

function App() {
  return (
    <div className="App">
      <HamburgerMenu />
      <HeroCarousel />
      <Red />
    </div>
  );
}

export default App;
