
import React from 'react';
import HttpClient from './api/HttpClient';
import { Button } from 'semantic-ui-react';

import Loading from './Loading';

import { Table } from 'semantic-ui-react'
class PrescriptionsList extends React.Component {

    state = { prescriptions: [], isLoading: true };

    componentDidMount() {
        this.setState({ isLoading: true });
        HttpClient.get('/api/v1/prescriptions').then(response => {
            this.setState({ prescriptions: response.data, isLoading: false });
        }).catch(e => {
            console.log("error" + e);
        });
    }

    render() {
        const { prescriptions, isLoading } = this.state;
        if (isLoading) {
            return (<div><Loading /></div>);
        } else {

            const prescriptionsTable = prescriptions.map(p => {
                let { fullName, email, address, phoneNumber, age } = p.user;
                let userId = p.user.id;
                //let { fullName, createDate, address, phoneNumber } = p.user;
                let { id, createDate, confirmationNumber, comment, phComment, status } = p;
                let phFullName = p.pharmacist != null ? p.pharmacist.fullName : '';
                //let { phPhoneNumber } = p.pharmacist.phoneNumber;

                let image = "/api/v1/" + userId + "/prescriptions/" + id + "/image";
                let insurance = "/api/v1/" + userId + "/prescriptions/" + id + "/insurance";
                return (
                    <Table.Row >
                        <Table.Cell>{fullName}</Table.Cell>
                        <Table.Cell>{email}</Table.Cell>
                        <Table.Cell>{phoneNumber}</Table.Cell>
                        <Table.Cell>{address}</Table.Cell>
                        <Table.Cell>{age}</Table.Cell>
                        <Table.Cell>{createDate}</Table.Cell>
                        <Table.Cell>{confirmationNumber}</Table.Cell>
                        <Table.Cell>{status}</Table.Cell>

                        <Table.Cell>      <Button
                            data-tooltip="Change status"
                            className="ui icon button"
                            content='Update Status'

                            positive
                            onClick={this.handleOpen}>
                            <i aria-hidden="true" class="edit icon"></i>
                        </Button></Table.Cell>

                    </Table.Row>)

            });

            return (
                <div >
                    <div className="page-header">
                        P R E S C R I P T I O N S
                   </div>
                    <div className="ui divider"></div>
                    <Table celled padded singleLine style={{ margin: '30px' }}>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell colSpan='5' textAlign='center'>User Info</Table.HeaderCell>
                                <Table.HeaderCell colSpan='5' textAlign='center'>Prescriptions</Table.HeaderCell>
                            </Table.Row>
                            <Table.Row>
                                <Table.HeaderCell rowSpan='1' textAlign='center' >Full name</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='1' textAlign='center'>Email</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='1' textAlign='center'>Phone number</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='1' textAlign='center'>Address</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='1' textAlign='center'>Age</Table.HeaderCell>


                                <Table.HeaderCell textAlign='center'>Create Date</Table.HeaderCell>
                                <Table.HeaderCell textAlign='center'>Confirmation Number</Table.HeaderCell>
                                <Table.HeaderCell textAlign='center'>Status</Table.HeaderCell>

                                <Table.HeaderCell textAlign='center'>Action</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {prescriptionsTable}
                        </Table.Body>
                    </Table>
                </div >);
        }
    }

}


export default PrescriptionsList;