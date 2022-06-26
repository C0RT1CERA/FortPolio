import { FaHome, FaInfo, FaBookOpen} from "react-icons/fa";
import { BsFillBrushFill, BsFillBriefcaseFill, BsFillTelephoneForwardFill, BsFillChatSquareQuoteFill, BsGearFill} from "react-icons/bs";

const SideBar = () => {
  return (
    <div className="fixed justify-evenly top-0 left-0 h-screen w-16 flex flex-col
                  bg-Paint_Light-300 dark:bg-Paint_Dark-600 shadow-lg">
                    
        <SideBarIconHome icon={<FaHome size="28"/>} text=""/>
        <Divider />
        <SideBarIcon icon={<FaInfo size="32" />} text="About Me"/>
        <SideBarIcon icon={<FaBookOpen size="20" />} text="Education" />
        <SideBarIcon icon={<BsFillBrushFill size="20" />} text="Creativity" />
        <SideBarIcon icon={<BsFillBriefcaseFill size="20" />} text="Work Experiance" />
        <SideBarIcon icon={<BsFillTelephoneForwardFill size="20" />} text="Contact" />
        <Divider />
        <SideBarIcon icon={<BsFillChatSquareQuoteFill size="20" />} text="Testimonials" />
      </div>
  );
};

const SideBarIconHome = ({icon}) => (
<div className="sidebar-icon-Home">
    {icon}
  </div>
);

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
