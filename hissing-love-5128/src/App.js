import logo from './logo.svg';
import './App.css';
import { MainRoutes } from './page/MainRoutes';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
    <MainRoutes/>
    </div>
  );
}

export default App;
