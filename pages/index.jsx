import LandingSlider from '../components/LandingComp/Slider'
import Packages from '../components/LandingComp/Packages'
import GalleryImages from '../components/LandingComp/GalleryImages'
import Boxes from '../components/LandingComp/Boxes'
import Information from '../components/LandingComp/Information'
import Completion from '../components/LandingComp/Completion'
import ViewInquire from '../utils/Popup'
const Home = () => {

  return (
    <>
          <LandingSlider />
          <Packages />
          <GalleryImages />
          <ViewInquire largbtn={"largbtn"}/>
          <Boxes/>
          <Information/>
          <Completion/>
    </>
  )
}

export default Home
