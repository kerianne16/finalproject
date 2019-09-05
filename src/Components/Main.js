import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Login from './Login';
import '../style.css';

class Main extends Component {
    render() {
        return (
            <div>
                <header>
                    <h3>Book with Bombshell Beauty</h3>
                    <NavLink to="/login">Login/Sign Up</NavLink>
                    <Login />
                </header>
            </div>
        )
    }
}

export default Main;