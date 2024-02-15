import { useEffect, useState } from "react";
import Footer from "../../components/layouts/Footer";
import GetInTouch from "./GetInTouch";
import NewsAndEvents from "./NewsAndEvents";
import ReasonToPursue from "./ReasonToPursue";
import Schedule from "./Schedule";
import SliderCarousel from "./SliderCarousel";
import VirtualTour from "./VirtualTour";
import WelcomeToMIS from "./WelcomeToMIS";
import WhoWeAre from "./WhoWeAre";
import { FaArrowUp } from "react-icons/fa"; // Import the arrow icon for the button
import { gsap } from "gsap";
import PaperTear from "./PaperTear";
import PaperTear2 from "./PaperTear2";

const Home = () => {
  const [isVisible, setVisible] = useState(false);
  const t = gsap.timeline();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    // Initial check when component mounts
    listenToScroll();

    // Add scroll event listener
    window.addEventListener("scroll", listenToScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []); // Empty dependency array to ensure the effect runs only once on component mount

  return (
    <div className="w-full h-full mt-[5rem] relative">
      {isVisible && (
        <button
          className="text-3xl bg-textPrimary text-ctcPrimary rounded-md p-2 cursor-pointer fixed bottom-6 right-6 z-50"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
      <SliderCarousel />
      <WelcomeToMIS />
      <PaperTear />
      <WhoWeAre />
      <VirtualTour />
      <PaperTear2 />
      <ReasonToPursue />
      <PaperTear />
      <NewsAndEvents />
      <Schedule />
      <GetInTouch />
      <PaperTear2 />
      <Footer />
    </div>
  );
};

export default Home;
