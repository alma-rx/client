import React from 'react';
import { Link } from 'react-router-dom';
import {
    Button, Icon,
    Grid

} from "semantic-ui-react";
import AuthManager from './AuthManager';
const AlmaHeader = () => {
    console.log("Header called");
    let link, text;
    if (new AuthManager().isLoggedIn()) {
        console.log("T");
        text = 'Logout';
    } else {
        console.log("F");
        text = 'Login';
    }
    return (
        <Grid className="ui menu borderless alma-header">
            <div className="item logo">
                <img src="./resources/logo.png" />
            </div>
            <Link to="/PrescriptionList" className="item"> Prescriptions </Link>
            <Link to="/UsersList" className="item"> Users </Link>
            <div className="right menu">
                <div className="item">
                    <Button
                        onClick={() => { new AuthManager().logout() }}
                    >
                        {text}
                    </Button>
                </div>
            </div>

        </Grid>

    );

};

export default AlmaHeader;