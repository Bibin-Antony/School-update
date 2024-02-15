import Footer from "../../components/layouts/Footer";
import Achievements from "./Achievements";
import FaS from "./FaS";
import JoinOurTeam from "./JoinOurTeam";
import OurManagement from "./OurManagement";
import OurTeamDes from "./OurTeamDes";
import OurValues from "./OurValues";
import SupportTeam from "./SupportTeam";

const OurTeam = () => {
  return (
    <div className="mt-24 mx-auto tracking-wide">
      <OurTeamDes />
      <OurManagement />
      <Achievements />
      <FaS />
      <SupportTeam />
      <OurValues />
      <JoinOurTeam />
      <Footer />
    </div>
  );
};

export default OurTeam;
