import { BrowserRouter } from 'react-router-dom';

import Header from "./components/Headers";
import Hero from './components/Hero'
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Hero />
      <About/>
      <Services/>
      <ContactForm/>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
