import React from 'react';
import {Link} from 'react-router-dom';
import LogOut from '../LogOut/Logout';
import Login from '../Login/Login'
//import register from '../../Pages/Register/Register';
import './TopBar.css'


function TopBar({user}){
    return(
                <nav class="navbar navbar-light bg-light fixed-top">
                <div class="container-fluid">
                 <h4>Welcome {user.username}</h4>
                    <a class="navbar-brand" href="TopBar.css">Offcanvas navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        { user && <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Welcome {user.username}</h5>}
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        {user && 
                            <React.Fragment>
                        <li class="nav-item">
                            <Link to='/Home'>
                            <botton type="button" class="btn btn-outline-primary"><h3> Home </h3> </botton>
                            </Link>
                        </li> <li class="nav-item">
                            <Link to='/schedule'>
                            <botton type="button" class="btn btn-outline-primary"><h3> Scehdule </h3> </botton>
                            </Link>
                        </li> <li class="nav-item">
                            <Link to='/timer'>
                            <botton type="button" class="btn btn-outline-primary"><h3> Timer </h3> </botton>
                            </Link>
                        </li>  <li class="nav-item">
                            <Link to='/WorkoutLog'>
                            <botton type="button" class="btn btn-outline-primary"><h3> Log Book </h3> </botton>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <botton type="button" class="btn btn-outline-primary"><h3>{LogOut} </h3> </botton>
                        </li>
                        </React.Fragment> }
                        {!user && 
                        <React.Fragment>
                            <li class="nav-item">
                                <Link to='/Register'>
                                    <botton type="button" class="btn btn-outline-primary"><h3> Register </h3> </botton>
                                </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='/Login'>
                                    <botton type="button" class="btn btn-outline-primary"><h3> Login </h3> </botton>
                                    </Link>
                                </li>
                        </React.Fragment> }
                            </ul>
                    </div>
                    </div>
                </div>
                </nav>
    )
}

export default  TopBar;