import Home from "./components/Home"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/service" element={<Service />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/contact" element={<ContactForm />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
