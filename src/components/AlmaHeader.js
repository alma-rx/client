import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';

import { withRouter } from "react-router-dom";

import AuthManager from './AuthManager';

class AlmaHeader extends React.Component {

    componentWillMount() {

    }

    render() {

        let link, text;
        if (new AuthManager().isLoggedIn()) {
            text = 'L O G O U T';
        } else {
            return (<div />);
        }
        return (

            /**  <Grid className="ui menu borderless alma-header">
                 <div className="item logo">
                     <img src="./resources/logo.png" />
                 </div>
                 <Link to="/PrescriptionList" className="item"> Prescriptions </Link>
                 <Link to="/PrescriptionsList" className="item"> New Prescriptions </Link>
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
             ---
            <div className='pusher'>
                <div className='full height'>
                    <div className='toc'>

                        <Menu className='inverted vertical left fixed'>
                            <div className="item logo">
                                <img src="./resources/logo.png" />
                            </div>
                            <Menu.Item>
                                Home
                            <Icon name='dashboard' />
                                <Menu.Menu>
                                    <Menu.Item name='search' active={activeItem === 'search'} onClick={this.handleItemClick}>
                                        Search
                                </Menu.Item>
                                    <Menu.Item name='add' active={activeItem === 'add'} onClick={this.handleItemClick}>
                                        Add
                                </Menu.Item>
                                    <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
                                        Remove
                                </Menu.Item>
                                </Menu.Menu>
                            </Menu.Item>
                            <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
                                <Icon name='grid layout' />
                                Browse
                        </Menu.Item>
                            <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}>
                                Messages
                        </Menu.Item>

                            <Dropdown item text='More'>
                                <Dropdown.Menu>
                                    <Dropdown.Item icon='edit' text='Edit Profile' />
                                    <Dropdown.Item icon='globe' text='Choose Language' />
                                    <Dropdown.Item icon='settings' text='Account Settings' />
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu>
                    </div>

                </div>
            </div>*/
            <div>
                <div className="ui sidebar vertical left menu overlay visible" >
                    <div className="item logo">
                        <img src="./resources/logo.png" />

                    </div>
                    <div className="ui divider"></div>
                    <div className="ui accordion">

                        <a className="title item">
                            D A S H B O A R D

                        </a>
                        <div className="content">
                            <a className="item" href="dashboard.html">DASHBOARD
                              </a>
                        </div>

                        <div className="ui divider"></div>
                        <Link to="/PrescriptionsList" className="title item">
                            P R E S C R I P T I O N S
                            </Link>

                        <div className="ui divider"></div>
                        <Link to="/PrescriptionList" className="title item">
                            P R E S C R I P T I O N S ( C A R D S )
                            </Link>

                        <div className="ui divider"></div>
                        <div>
                            <Link to="/UsersList" className="title item">
                                P A T I E N T S
                            </Link>
                        </div>
                        <div className="ui divider"></div>

                    </div>

                </div>

                <div className="pusher">
                    <div className="ui menu asd borderless" style={{ background: '#373748', borderRadius: 0, border: 0, marginLeft: 260, webkitTransitionDuration: 0.1 }}>

                        <div className="right menu">
                            <div className="ui dropdown item" style={{ color: 'white' }}>
                                E N G L I S H <i className="dropdown icon"></i>
                                <div className="menu">
                                    <a className="item">English</a>
                                    <a className="item">Arbic</a>

                                </div>
                            </div>
                            <div className="item">
                                <div className="ui primary button" onClick={() => {
                                    new AuthManager().logout();
                                    this.props.history.push("/");
                                }
                                }>
                                    {text}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }

}

export default withRouter(AlmaHeader);

