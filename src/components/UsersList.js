import React from 'react';
import HttpClient from './api/HttpClient';
import Loading from './Loading';

class UsersList extends React.Component {

    state = { users: [], isLoading: true };

    componentDidMount() {
        this.setState({ isLoading: true });
        HttpClient.get('/api/v1/users').then(response => {
            console.log("Response" + response.data);
            this.setState({ users: response.data, isLoading: false });
            response.data.map(g => {
                console.log(g);
            });
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
                return <tr key={user.id}>
                    <td>{user.fullName}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>{user.roles.map(role => role.name + "\n")}</td>
                </tr>
            });


            return (
                <div style={{ padding: '50px' }}>
                    <h2 className="ui blue image header">
                        <div className="content">
                            Users
                   </div>
                    </h2>
                    <table class="ui celled table">
                        <thead>
                            <tr><th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Role</th>
                            </tr></thead>
                        <tbody>
                            {userstable}
                        </tbody>
                    </table>
                </div >);
        }
    }

}


export default UsersList;