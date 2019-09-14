import React, { Component } from 'react';
import { Button, Grid, Header, Segment, Portal } from 'semantic-ui-react';
import UpdatePrescriptionForm from './UpdatePrescriptionForm';
import axios from 'axios';
export default class UpdatePrescriptionPopup extends Component {
    state = { shipmentStatus: '', open: false }

    handleClose = () => this.setState({ open: false })
    handleOpen = () => {

        let access_token = localStorage.getItem('Authontication');
        let { userId, id } = this.props;
        let shipmentStatus = this.props.shipmentStatus;
        console.log("Status nbefore  " + shipmentStatus);
        if (shipmentStatus == 'NEW') {
            shipmentStatus = 'CONFIRMED';
        } else
            if (shipmentStatus == 'CONFIRMED') {
                shipmentStatus = 'IN_TRANSIT';
            } else if (shipmentStatus == 'IN_TRANSIT') {
                shipmentStatus = 'DELIVERED';
            }
        console.log("Status " + shipmentStatus);
        let url = "/api/v1/" + userId + "/prescriptions/" + id + "/status";
        axios.post(url,
            { shipmentStatus }, {
                headers: {
                    "Authorization": `${access_token}`,
                    'content-type': 'application/json'
                }
            }).then((response) => {
                this.props.onClick(shipmentStatus);
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

    render() {
        const { open } = this.state
        let { id } = this.props;
        return (
            <Button
                data-tooltip="Change status"
                className="ui icon button"
                content='Update Status'
                disabled={open}
                positive
                onClick={this.handleOpen}>
                <i aria-hidden="true" class="edit icon"></i>
            </Button>


            /*  <Grid columns={2}>
                  <Grid.Column>
                      <Button
                          className="ui icon button"
                          content='Update Status'
                          disabled={open}
                          positive
                          onClick={this.handleOpen}>
                          <i aria-hidden="true" class="edit icon"></i>
                      </Button>
                      <Portal onClose={this.handleClose} open={open}>
                          <div
                              style={{
                                  left: '40%',
                                  position: 'fixed',
                                  top: '50%',
                                  zIndex: 1000,
                              }}
                          >
                              <UpdatePrescriptionForm id={id} />
                          </div>
                      </Portal>
                  </Grid.Column >
              </Grid >*/
        )
    }
}


