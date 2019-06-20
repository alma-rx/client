import React from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Divider,
    Grid,

    Icon,
    Input,
    Image,
    Label,
    Menu,
    Table
} from "semantic-ui-react";
const Header = () => {

    return (

        <div className="ui menu back borderless">

            <div className="item logo">
                <img src="./resources/logo.png" />
            </div>

            <Link to="/PrescriptionList" className="item"> Prescriptions </Link>
            <Link to="/UsersList" className="item"> Users </Link>
            <div className="right menu">
                <div className="item">
                    <div className="ui primary button">
                        <Link to="/Signup">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>

    );

};

export default Header;