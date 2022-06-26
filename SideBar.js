import { FaHome, FaInfo, FaBookOpen} from "react-icons/fa";
import { BsFillBrushFill, BsFillBriefcaseFill, BsFillTelephoneForwardFill, BsFillChatSquareQuoteFill} from "react-icons/bs";

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-20 m-0
                        flex flex-col justify-evenly
                        //bg-gray-800 bg-Paint_Light-402
                         text-green shadow-lg">
         <SideBarIcon icon={<FaHome size="28"/>} text={'Home'}/>
         <SideBarIcon icon={<FaInfo size="28"/>} text={'Information'}/>
         <SideBarIcon icon={<FaBookOpen size="28" text={'Education'}/>}/>
         <SideBarIcon icon={<BsFillBrushFill size="28" text={'Creativity'}/>}/>
         <SideBarIcon icon={<BsFillBriefcaseFill size="28" text={'Work Expariance'}/>}/>
         <SideBarIcon icon={<BsFillTelephoneForwardFill size="28" text={'Contact Info'}/>}/>
         <SideBarIcon icon={<BsFillChatSquareQuoteFill size="28"/>} text={'Testimonials'}/>
         

        </div>
    )
};

const SideBarIcon = ({ icon, text = 'tooltip' }) => (
 <div className="sidebar-icon group">
    {icon}
  <span class="sidebar-tooltip group-hover:opacity-100">
    {text}
    </span>
 </div>
);
export default SideBar;