import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { FaFlagCheckered } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { GiF1Car } from "react-icons/gi";
export const SidebarData = [
{
    title: 'Home',
    icon: <FaHome />,
    path: "/home"
},
{
    title: 'Drivers',
    icon: <GiFullMotorcycleHelmet />,
    path: "/drivers"
},
{
    title: 'Races',
    icon: <FaFlagCheckered/>,
    path: "/races"
},
{
    title: 'Standings',
    icon: <TbBrandGoogleAnalytics />,
    path: "/standings"
},
{
    title: 'Monoposts',
    icon: <GiF1Car />,
    path: "/monoposts"
},

]