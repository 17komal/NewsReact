import React, { Component } from 'react';
import './Navbar.css';
import icon from '../Assets/icon.gif';
import {  Link } from "react-router-dom";
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">News <img src={icon} alt='loading..' id='icon' /> Express</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link" to="/NewsReact">General</Link>
                                <Link className="nav-link" to="/NewsReact/business"> Business </Link>
                                <Link className="nav-link" to="/NewsReact/entertainment"> Entertainment </Link>
                                <Link className="nav-link" to="/NewsReact/health"> Health </Link>
                                <Link className="nav-link" to="/NewsReact/science"> Science </Link>
                                <Link className="nav-link" to="/NewsReact/sports"> Sports </Link>
                                <Link className="nav-link" to="/NewsReact/technology"> Technology </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
