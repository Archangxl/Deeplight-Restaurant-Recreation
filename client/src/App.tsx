import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import Menu from './Pages/Menu';
import Testimonials from "./Pages/Testimonials";
import Nav from "./Components/Navbar/Nav";

function App() {

  return (
    <>

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Testimonials" element={<Testimonials />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
