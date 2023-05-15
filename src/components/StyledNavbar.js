import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return (
        <nav className="navbar" id="main_nav">
            <NavLink to="/" style={({isActive})=>{return {color:isActive? 'red' : 'grey'};}}>Home</NavLink>
            <NavLink to="/about" className={({isActive})=>isActive? 'link active' : 'link'}>About</NavLink>
            <NavLink to="/songs" className={({isActive})=>isActive? 'link active' : 'link'}>Songs</NavLink>
            <NavLink to="/gallery" className={({isActive})=>isActive? 'link active' : 'link'}>Gallery</NavLink>
            <NavLink to="/contactus" className={({isActive})=>isActive? 'link active' : 'link'}>Contact</NavLink>
            {/* <NavLink to="/login" className={({isActive})=>isActive? 'link active' : 'link'}>Login</NavLink> */}
        </nav>
    );
};

export default Navbar;