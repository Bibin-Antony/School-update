import AboutUs from "./AboutUs";
import AdmissionInfo from "./AdmissionInfo";
import Faculty from "./Faculty";
import OurPrograms from "./OurPrograms";
import Resource from "./Resource";
import Footer from "../../components/layouts/Footer";
import PaperTear from "./PaperTear";

const Academics = () => {
  return (
    <div>
      <AboutUs />
      <OurPrograms />
      <PaperTear />
      <Faculty />
      <AdmissionInfo />
      <Resource />
      <Footer />
    </div>
  );
};

export default Academics;
