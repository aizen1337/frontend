import * as React from 'react';
import SportsMmaRoundedIcon from '@mui/icons-material/SportsMmaRounded';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return ( 
        <div className="h-screen w-32 m-0
        flex flex-col
        bg-gray-900 text-white shadow-lg
        sticky top-0
        ">
            <i><Link to="/"><div className="home text-center pt-5 pb-5">boxing.info</div></Link></i>
            <i><Tooltip title="Strona główna" placement='right'><Link to="/"><div className="sidebar-icon"><HomeSharpIcon fontSize="large"/></div></Link></Tooltip></i>
            <i><Tooltip title="Twoje konto" placement='right'><Link to="/"><div className="sidebar-icon"><AccountCircleSharpIcon fontSize="large"/></div></Link></Tooltip></i>
            <i><Tooltip title="Dodaj walkę" placement='right'><Link to="/add"><div className="sidebar-icon"><SportsMmaRoundedIcon fontSize="large"/></div></Link></Tooltip></i>
            <i><Tooltip title="Zmień motyw" placement='right'><Link to="/"><div className="sidebar-icon"><Brightness6Icon fontSize="large"/></div></Link></Tooltip></i>
        </div>
     );
}
 
export default Sidebar;