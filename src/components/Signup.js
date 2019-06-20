import React from 'react';
import TextInput from './TextInput';
import HttpClient from './api/HttpClient';
import { Link } from 'react-router-dom';
class Signup extends React.Component {

    // Init the state
    state = { fullName: "", email: "", password: "", address: "", isError: false, errorMessage: "No error" };

    onFormSubmit = (event) => {
        event.preventDefault();
        const { fullName, email, password, address } = this.state;

        HttpClient.post('/api/v1/users', {
            fullName, email, password, address
        }).then((response) => {
            console.log("response:" + response);
        }).catch(error => {
            this.setState({ isError: true, errorMessage: error.response.data.message });
            console.log(error.response.data.message);
            console.log(error.response.status);
            console.log(error.response.headers);
        });

    }


    onTextInputChange = (event) => {
        // const { name, value } = event.target;
        // const { target: { name, value } } = event
        // this.setState({ [name]: value })
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {

        return (
            <div className='column'>
                <h2 className="ui blue image header">

                    <div className="content">
                        Sign up
                    </div>
                </h2>
                {this.state.isError === true &&
                    <div className="ui error message">{this.state.errorMessage}</div>
                }
                <form className="ui large form" onSubmit={this.onFormSubmit}>
                    <div className="ui stacked segment">
                        <TextInput
                            label='Full Name'
                            type='text'
                            name='fullName'
                            placeholder='Full Name'
                            onChange={this.onTextInputChange}
                            value={this.state.fullName}
                        />

                        <TextInput
                            label='Email'
                            type='email'
                            name='email'
                            placeholder='Email'
                            onChange={this.onTextInputChange}
                            value={this.state.email}
                        />

                        <TextInput
                            label='Password'
                            type='password'
                            name='password'
                            placeholder='Password'
                            onChange={this.onTextInputChange}
                            value={this.state.password}
                        />

                        <TextInput
                            label='Address'
                            type='text'
                            name='address'
                            placeholder='9258 sungold way, sacramento, CA'
                            onChange={this.onTextInputChange}
                            value={this.state.address}
                        />

                        <div className="required inline field">
                            <div className="ui checkbox">
                                <input type="checkbox" tabIndex="0" className="hidden" />
                                <label>I agree to the Terms and Conditions</label>
                            </div>
                        </div>
                        <button className="ui fluid large teal submit red button" type="submit">Sign up</button>
                    </div >
                </form>
                <div class="ui message">
                    Already a user?   <Link to="/" >Login</Link>
                </div>

            </div >
        );
    }
}

export default Signup;