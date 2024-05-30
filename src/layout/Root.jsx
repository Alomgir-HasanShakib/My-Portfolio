import About from "../Components/AboutMe/About"
import Banner from "../Components/Banner/Banner"
import Footer from "../Components/Footer/Footer"
import Navbar from "../Components/Navbar/Navbar"

const Root = () => {
  return (
    <div className="container mx-auto">
      {/* <Navbar></Navbar> */}
      <Banner></Banner>
      <About></About>
      <Footer></Footer>
    </div>
  )
}

export default Root