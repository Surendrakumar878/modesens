
import './App.css';
import { MainRoutes } from './page/MainRoutes';
import Navbar from './components/Navbar/Navbar';
// import { HomePage } from './page/HomePage';
import { Footer } from "./components/Footer/Footer";
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Tabs from "./components/productdist/checkout"


function App() {
 return (
<Box>
{/* <Tabs/> */}
<Navbar />
<Link href="namefile" download="namefle" ></Link>
<Box pt="100px">

    <MainRoutes/>
</Box>
    <Footer />
</Box>
  
    
 
  
  );}


export default App;

