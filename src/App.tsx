import { useEffect, useState } from 'react'
import './App.css'
import cvPhoto from './assets/images/cv_photo.jpg'
import cvPdf from './assets/images/pdf/my_pdf.pdf'
import NavContainer from './components/Nav/NavContainer'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer'

function App() {
  const [navbarDark, setNavbarDark] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {

      setNavbarDark(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavContainer navbarDark={navbarDark} />
      <Home />
      <About photo={cvPhoto} pdf={cvPdf} />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
