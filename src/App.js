import './App.css';
import react from 'react';
import About from './components/About';
import Nav from './components/Nav'

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
