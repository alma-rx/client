import React from 'react';
import HttpClient from './api/HttpClient';
import Loading from './Loading';

class PrescriptionList extends React.Component {

    state = { prescriptions: [], isLoading: true };

    componentDidMount() {
        this.setState({ isLoading: true });
        HttpClient.get('/api/v1/prescriptions').then(response => {
            this.setState({ prescriptions: response.data, isLoading: false });
        }).catch(e => {
            console.log("error" + e);
        });
    }

    rowClicked = (event) => {
        console.log(event);
    }
    render() {
        const { prescriptions, isLoading } = this.state;
        if (isLoading) {
            return (<div><Loading /></div>);
        } else {
            // Create the data
            const prescriptionsTable = prescriptions.map(p => {
                return <tr key={p.id} onClick={this.rowClicked} >
                    <td>{p.createDate}</td>
                    <td>{p.user.fullName}</td>
                    <td>{p.user.email}</td>
                    <td>{p.user.address}</td>
                    <td>{p.confirmationNumber}</td>
                    <td>{p.status}</td>
                    <td>Prescription</td>
                    <td><img src="/api/v1/1/prescriptions/2/image" /></td>
                </tr >
            });


            return (
                <div style={{ padding: '50px' }}>
                    <h2 className="ui blue image header">
                        <div className="content">
                            Prescriptions
                       </div>
                    </h2>

                    <table class="ui celled table">
                        <thead>
                            <tr><th>Issue date</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>confirmation Number</th>
                                <th>Status</th>
                                <th>Prescription</th>
                            </tr></thead>
                        <tbody>
                            {prescriptionsTable}
                        </tbody>
                    </table>
                </div >);
        }
    }

}


export default PrescriptionList;