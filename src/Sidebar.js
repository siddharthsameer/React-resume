import SContactinfo from "./SContactinfo";
import SEducation from "./SEducation";
import SLanguage from "./SLanguage";
import SProfileText from "./SProfileText";

const Sidebar = ({ Data }) => {
  const { Profile, Contactinfo, Education, Languages } = Data;
  return (
    <div className="left_Side">
      <SProfileText Profile={Profile} />
      <SContactinfo Contactinfo={Contactinfo} />
      <SEducation Education={Education} />
      <SLanguage Languages={Languages} />
    </div>
  );
};

export default Sidebar;
