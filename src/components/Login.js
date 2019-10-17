import React from 'react';
import TextInput from './TextInput';
import HttpClient from './api/HttpClient';
import { Link } from 'react-router-dom';


class Login extends React.Component {

    // Init the state
    state = { email: "", password: "", isError: false, errorMessage: "No error" };

    onFormSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        HttpClient.post('/api/v1/session', {
            email, password
        }).then((response) => {
            // let roles = response.data.roles.map(role => role.name + ",");
            //   localStorage.setItem('roles', roles);
            if (false) {
                this.setState({ isError: true, errorMessage: "Unauthorized user" });
            } else {
                let auth = response.data.tokenType + " " + response.data.accessToken;
                localStorage.setItem('Authontication', auth);
                localStorage.setItem('id', response.data.id);
                localStorage.setItem('fullName', response.data.fullName);
                localStorage.setItem('phoneNumber', response.data.phoneNumber);
                //  let roles = response.data.roles.map(role => role.name + ",");
                //localStorage.setItem('roles', roles);
                this.props.history.push("/PrescriptionList");
            }

        }).catch(error => {
            let errorMsg = '';
            if (error.response) {
                errorMsg = error.response.data.message;
            } else if (error.request) {
                errorMsg = "Netwrok error... Please try later";
            } else {
                errorMsg = error.message;
            }

            this.setState({ isError: true, errorMessage: errorMsg });
        });

    }
    onTextInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {

        return (
            <div className='column' style={{ top: '200px' }}>

                {this.state.isError === true &&
                    <div className="ui error message">{this.state.errorMessage}</div>
                }

                <form className="ui large form" onSubmit={this.onFormSubmit}>
                    <div className="ui stacked segment">

                        <img style={{ width: '200px' }} src="./resources/logo.png" />


                        <TextInput
                            label='Email'
                            type='email'
                            name='email'
                            placeholder='Email'
                            onChange={this.onTextInputChange}
                            value={this.state.email}
                        />

                        < TextInput
                            label='Password'
                            type='password'
                            name='password'
                            p l aceholder='Password'
                            onChange={this.onTextInputChange}
                            value={this.state.password}
                        />

                        <button className="ui fluid large teal submit black button" type="submit">Login</button>
                    </div >
                </form>
                <div className="ui message">
                    New to us?   <Link to="/Signup/" >Sign Up</Link>
                </div>
            </div >
        );
    }
}

export default Login;