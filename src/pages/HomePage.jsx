import Slider from "../components/PublicComponents/SliderSlick";
import PopularSection from "../components/PublicComponents/Sections/PopularSection";
import WhySection from "../components/PublicComponents/Sections/WhySection";
import TopSection from "../components/PublicComponents/Sections/TopSection";
import AdvantagesSection from "../components/PublicComponents/Sections/AdvantagesSection";
import AppSection from "../components/PublicComponents/Sections/AppSection";
import PencilSection from "../components/PublicComponents/Sections/PencilSection";

const HomePage = () => {
  return (
    <>
      <TopSection />
      <PopularSection />
      <WhySection />
      <AdvantagesSection />
      <AppSection />
      <PencilSection />
    </>
  );
};

export default HomePage;
