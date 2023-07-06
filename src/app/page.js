import Navbar from "./components/Navbar";
import About from "./components/About";
import MySkills from "./components/MySkills";
import MyProjects from "./components/MyProjects";
import AboutSection from "./components/AboutSite";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import MyComponent from "./components/Poppy";
export default function Home() {
  return (
    <>
    <Navbar/>
    <About/>
    <MySkills/>
    <MyProjects/>
    <AboutSection/>
    <ContactSection/>
    <Footer/>
    <MyComponent/>
    </>
  )
}
