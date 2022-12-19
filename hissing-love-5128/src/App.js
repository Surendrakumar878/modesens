
import './App.css';
import { MainRoutes } from './page/MainRoutes';
import Navbar from './components/Navbar/Navbar';
// import { HomePage } from './page/HomePage';
import { Footer } from "./components/Footer/Footer";
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
function App() {
  
  
  return (
<Box>

<Navbar />
<Link href="namefile" download="namefle" ></Link>
<Box pt="100px">

    <MainRoutes/>
</Box>
    <Footer />
</Box>
  
    
 
  
  );}


export default App;

