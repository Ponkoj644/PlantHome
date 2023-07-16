import Banner from "../../Components/Banner/Banner";
import Exclusive from "../../Components/Exclusive/Exclusive";
import OurGallery from "../../Components/OurGallery/OurGallery";
import OurStory from "../../Components/OurStory/OurStory";
import Plants from "../../Components/Plants/Plants";
import UpComming from "../../Components/UpComming/UpComming";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Plants />
      <Exclusive />
      <UpComming />
      <OurGallery />
      <OurStory />
    </div>
  );
};

export default HomePage;
