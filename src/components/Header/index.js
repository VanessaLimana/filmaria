import React, { Component } from "react"; 
import './header.css'
import {link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div className="header">
                <Link to="/">Fimaria</Link>
            </div>
        );
    }
}

export default Header;

