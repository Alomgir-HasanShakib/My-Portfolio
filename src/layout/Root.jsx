import About from "../Components/AboutMe/About"
import Banner from "../Components/Banner/Banner"
import Footer from "../Components/Footer/Footer"
import Projects from "../Components/Projects/Projects"

const Root = () => {
  return (
    <div className="container mx-auto">
      {/* <Navbar></Navbar> */}
      <Banner></Banner>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  )
}

export default Root