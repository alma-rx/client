import React, { Component } from 'react'
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import AuthManager from './AuthManager';
import { withRouter } from "react-router-dom";
class AlmaSideBar extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    componentDidMount() { }

    render() {
        const { activeItem } = this.state
        if (new AuthManager().isLoggedIn()) {
            return (
                <div className="ui left fixed vertical menu">
                    <div className="item">
                        <img src="./resources/logo.png" />
                    </div>

                    <Link to="/PrescriptionList" className="item"> Prescriptions </Link>
                    <Link to="/UsersList" className="item"> Users </Link>
                </div>

            )

        }
        return (<div />);
    }
}

export default withRouter(AlmaSideBar);