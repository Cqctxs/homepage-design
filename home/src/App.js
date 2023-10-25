import './App.css';
import Cursor from './components/Cursor';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Cursor/>
      <Navbar/>
      <Homepage/>
    </div>
  );
}

export default App;
