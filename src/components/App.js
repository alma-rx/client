import React from 'react';
import Login from './Login';
import Signup from './Signup';
import PrescriptionList from './PrescriptionList';
import ViewPrescription from './ViewPrescription';
import UsersList from './UsersList';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import AddPrescription from './AddPrescription';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>

                    <Header />
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