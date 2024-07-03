import About from "../Components/AboutMe/About"
import Banner from "../Components/Banner/Banner"
import Contact from "../Components/Contact/Contact"
import Footer from "../Components/Footer/Footer"
import Navbar from "../Components/Navbar/Navbar"
import Projects from "../Components/Projects/Projects"

const Root = () => {
  return (
    <div className="container mx-auto px-1">
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default Root