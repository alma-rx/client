import React from 'react';
import TextInput from './TextInput';
import HttpClient from './api/HttpClient';
import { Link } from 'react-router-dom';
import Loading from './Loading';


class ViewPrescription extends React.Component {

    state = {
        isLoading: true,
        prescription: null,
        isError: false,
        errorMessage: "No error"
    };


    componentDidMount = () => {
        this.setState({ isLoading: true });
        HttpClient.get('/api/v1/1/prescriptions/2').then(response => {
            this.setState({ prescription: response.data, isLoading: false });

        }).catch(e => {
            console.log("error" + e);
        });
    }

    render() {
        if (this.state.isLoading) {
            return (<Loading />);
        }
        let { status, confirmationNumber, createDate } = this.state.prescription;
        let { address, email, fullName } = this.state.prescription.user;
        return (
            <div>
                <table className="ui definition table">
                    <tbody>
                        <tr>
                            <td className="two wide column">Status</td>
                            <td>{status}</td>
                        </tr>
                        <tr>
                            <td>Issue Date</td>
                            <td>{createDate}</td>
                        </tr>

                        <tr>
                            <td>Full Name</td>
                            <td>{fullName}</td>
                        </tr>
                        <tr>
                            <td>User</td>
                            <td>{email}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{address}</td>
                        </tr>
                        <tr>
                            <td>Prescription</td>
                            <td><img src="/api/v1/1/prescriptions/2/image" /></td>
                        </tr>
                        <tr>
                            <td>Confirmation Number</td>
                            <td>{this.state.prescription.confirmationNumber}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ViewPrescription;