import React from 'react';
import HttpClient from './api/HttpClient';
import Loading from './Loading';

import { Table } from 'semantic-ui-react'
class UsersList extends React.Component {

    state = { users: [], isLoading: true };

    componentDidMount() {
        this.setState({ isLoading: true });
        HttpClient.get('/api/v1/users').then(response => {
            console.log("Response" + response.data);
            this.setState({ users: response.data, isLoading: false });

        }).catch(e => {
            console.log("error" + e);
        });
    }

    render() {
        const { users, isLoading } = this.state;
        if (isLoading) {
            return (<div><Loading /></div>);
        } else {
            // Create the data
            const userstable = users.map(user => {
                return <Table.Row key={user.id}>
                    <Table.Cell>{user.fullName}</Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell>{user.phoneNumber}</Table.Cell>
                    <Table.Cell>{user.address}</Table.Cell>

                    <Table.Cell>{user.dateOfBirth}</Table.Cell>
                    <Table.Cell>{user.age}</Table.Cell>
                    <Table.Cell>{user.gender}</Table.Cell>
                    <Table.Cell>{user.roles.map(role => role.name + "\n")}</Table.Cell>
                </Table.Row>
            });


            return (
                <div >
                    <div className="page-header">
                        P A T I E N T S
                   </div>
                    <div className="ui divider"></div>
                    <Table celled padded style={{ margin: '30px' }}>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell rowSpan='1' textAlign='center' >Full name</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='1' textAlign='center'>Email</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='1' textAlign='center'>Phone number</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='1' textAlign='center'>Address</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='1' textAlign='center'>Date of birth</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='1' textAlign='center'>Age</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='1' textAlign='center'>Gender</Table.HeaderCell>
                                <Table.HeaderCell>Role</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {userstable}
                        </Table.Body>
                    </Table>
                </div >);
        }
    }

}


export default UsersList;