import React from 'react';
import Login from './Login';
import Signup from './Signup';
import PrescriptionList from './PrescriptionList';
import ViewPrescription from './ViewPrescription';
import UsersList from './UsersList';
import { BrowserRouter, Route } from 'react-router-dom';
import AlmaHeader from './AlmaHeader';
import AddPrescription from './AddPrescription';

import AlmaSideBar from './AlmaSideBar';

const App = () => {
    console.log("APp is called");

    return (
        <div>
            <BrowserRouter>
                <div>

                    <AlmaHeader />

                    <div className="ui middle aligned center aligned grid">

                        <Route path="/" exact component={Login} />
                        <Route path="/SignUp" component={Signup} />
                        <Route path="/UsersList" component={UsersList} />
                        <Route path="/AddPrescription" component={AddPrescription} />
                        <Route path="/ViewPrescription" component={ViewPrescription} />
                        <Route path="/PrescriptionList" component={PrescriptionList} />

                    </div>
                </div>

            </BrowserRouter>
        </div>
    );
}
export default App;