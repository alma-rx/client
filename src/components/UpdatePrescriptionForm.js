import React from 'react';
import TextInput from './TextInput';
import HttpClient from './api/HttpClient';
import { Link } from 'react-router-dom';
import axios from 'axios';

class UpdatePrescriptionForm extends React.Component {

    // Init the state
    state = { comment: "", shipmentStatus: "", isError: false, errorMessage: "No error" };

    onFormSubmit = (event) => {
        let access_token = localStorage.getItem('Authontication');

        let { id } = this.props;
        event.preventDefault();
        const { shipmentStatus, comment } = this.state;
        let url = "/api/v1/" + localStorage.getItem("id") + "/prescriptions/" + id + "/status";
        axios.post(url,
            { shipmentStatus, comment }, {
                headers: {
                    "Authorization": `${access_token}`,
                    'content-type': 'application/json'
                }
            }).then((response) => {


                this.props.history.push("/PrescriptionList");
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
            <div>
                <div className="ui middle aligned center aligned grid">

                    <div className='column'>

                        {this.state.isError === true &&
                            <div className="ui error message">{this.state.errorMessage}</div>
                        }

                        <form className="ui large form" onSubmit={this.onFormSubmit}>
                            <div className="ui stacked segment">

                                < textarea
                                    label='comment'
                                    type='text'
                                    name='comment'
                                    placeholder='Add a comment'
                                    onChange={this.onTextInputChange}
                                    value={this.state.comment}
                                />

                                <select name="shipmentStatus" onChange={this.onTextInputChange}>
                                    <option value="ORDERED">ORDERED</option>
                                    <option value="IN_TRANSIT">IN_TRANSIT</option>
                                    <option value="DELIVERED">DELIVERED</option>
                                </select>
                                <button className="ui fluid large teal submit black button" type="submit">Save</button>
                            </div >
                        </form>
                    </div >
                </div >
            </div >
        );
    }
}

export default UpdatePrescriptionForm;