import { Routes, Route } from 'react-router-dom';
import { TacoTrucksListing } from './pages/TacoTruckListing';
import { ChakraProvider } from "@chakra-ui/react"
import { NavbarComponent } from './components/Navbar';
import { Footer } from "./components/Footer";

const App = () => {
 
  return (
    <ChakraProvider>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<TacoTrucksListing />}> </Route>
      </Routes>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
