import React from 'react';

import TextInput from './TextInput';
import HttpClient from './api/HttpClient';
import { Link } from 'react-router-dom';
import axios from 'axios';
class AddPrescription extends React.Component {

    // Init the state
    state = { comment: "", prescription: null, isError: false, errorMessage: "No error" };

    onFormSubmit = (event) => {
        event.preventDefault();
        const { comment, prescription } = this.state;
        const access_token = localStorage.getItem('Authontication');

        const formData = new FormData();
        formData.append('comment', comment);
        formData.append('prescription', prescription);

        const id = localStorage.getItem('id');
        const url = '/api/v1/' + id + '/prescription';
        axios.post(url, formData, {
            headers: {
                "Authorization": `${access_token}`,
                'content-type': 'multipart/form-data'
            }
        }).then((response) => {
            console.log(response.data.confirmationNumber);
            this.props.navigation.navigate('/Login');
        }).catch(error => {
            this.setState({ isError: true, errorMessage: error.response.data.message });
        });

    }
    onTextInputChange = (event) => {
        // const { name, value } = event.target;
        // const { target: { name, value } } = event
        // this.setState({ [name]: value })
        this.setState({ [event.target.name]: event.target.value });
    }
    uploadFile = (event) => {
        // const { name, value } = event.target;
        // const { target: { name, value } } = event
        // this.setState({ [name]: value })
        this.setState({ [event.target.name]: event.target.files[0] });
    }
    render() {

        return (
            <div className='column'>
                <h2 className="ui teal image header">
                    <img src="./resources/logo.png" className="image" />
                    <div className="content">
                        Add a new prescription


                   </div>
                </h2>
                {this.state.isError === true &&
                    <div className="ui error message">{this.state.errorMessage}</div>
                }
                <form className="ui large form" onSubmit={this.onFormSubmit}>
                    <div className="ui stacked segment">

                        <TextInput
                            label='prescription'
                            type='file'
                            name='prescription'
                            placeholder='Add prescription'
                            onChange={this.uploadFile}
                            value={this.state.prescription}
                        />

                        < textarea
                            label='comment'
                            type='text'
                            name='comment'
                            placeholder='Add a comment'
                            onChange={this.onTextInputChange}
                            value={this.state.password}
                        />

                        <button className="ui fluid large teal submit button" type="submit">Add</button>
                    </div >
                </form>

            </div >
        );
    }
}

export default AddPrescription;