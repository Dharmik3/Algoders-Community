import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './TopBar.css'

const TopBar = () => {
    const { user,dispatch } = useContext(Context);
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };
        
    return <div className='top'>
        <div className='topLeft'>
            <i className="topIcon fab fa-facebook"></i>
            <i className="topIcon fab fa-twitter"></i>
            <i className="topIcon fab fa-pinterest"></i>
            <i className="topIcon fab fa-instagram"></i>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'>
                    <Link to='/' className='link'>Home</Link>
                </li>
                <li className='topListItem'><Link to='/' className='link'>About</Link></li>
                <li className='topListItem'><Link to='/' className='link'>Contact</Link></li>
                <li className='topListItem'><Link to='/write' className='link'>Write</Link></li>
                <li className='topListItem'><Link to='/' className='link' onClick={handleLogout}>{user&&"Logout" }</Link></li>
            </ul>
        </div>
        <div className='topRight'>
            {user ?<Link to="/settings"> <img className='topImg' src={user.profilePic} alt="" /></Link> : (<>
                <ul className='topList'>
                    <li className='topListItem'><Link to='/login' className='link'>Login</Link></li>
                    <li className='topListItem'><Link to='/register' className='link'>register</Link></li>
            </ul>
                
            </>)}
           
            <i className="topSearchIcon fas fa-search"></i>
        </div>
  </div>;
};

export default TopBar;