import React from 'react';
import {Link, NavLink} from "react-router-dom";

function Header(props) {
    const radius = {
            Radius:{
                borderRadius:"0px",
                height:"65px"
        },
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-lg-2 sticky-top" >
            <a className="navbar-brand" to="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    </li>
                    <li className="nav-item">
                        <Link  to={'/'} className="nav-link" href="#"> Link 1</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> Link 2 </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link 3</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">Link 4</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">Link 5</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;