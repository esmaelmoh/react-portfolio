import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import FAQ from "./pages/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Showcase from "./components/showcase/Showcase";
import Partners from "./components/Partners/Partners";
function App() {
  return (
    <div >
    <Home/>
    <About/>
    <Services/>
    <Showcase/>
    <FAQ/>
    <Partners/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
