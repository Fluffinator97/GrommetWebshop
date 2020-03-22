import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
                {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            products
            </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <button>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus " />
                        </span>
            my cart
          </button>
                </Link>
            </nav>
        );
    }
}

