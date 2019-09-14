import React from 'react';
import { Link } from 'react-router-dom';
import {
    Button, Icon,
    Grid

} from "semantic-ui-react";
import { withRouter } from "react-router-dom";

import AuthManager from './AuthManager';

class AlmaHeader extends React.Component {

    componentWillMount() {

    }

    render() {
        console.log("Header is called");
        let link, text;
        if (new AuthManager().isLoggedIn()) {
            text = 'Logout';
        } else {
            return (<div />);
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
                            onClick={() => {
                                new AuthManager().logout();
                                this.props.history.push("/");
                            }
                            }
                        >
                            {text}
                        </Button>
                    </div>
                </div>

            </Grid>

        );
    }

}

export default withRouter(AlmaHeader);

