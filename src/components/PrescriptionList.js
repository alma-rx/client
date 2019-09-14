import React from 'react';
import HttpClient from './api/HttpClient';
import Loading from './Loading';
import Card from './Card';

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
                let { fullName, address, phoneNumber } = p.user;
                let userId = p.user.id;
                //let { fullName, createDate, address, phoneNumber } = p.user;
                let { id, createDate, confirmationNumber, comment, phComment, status } = p;
                let phFullName = p.pharmacist != null ? p.pharmacist.fullName : '';
                //let { phPhoneNumber } = p.pharmacist.phoneNumber;

                let image = "/api/v1/" + userId + "/prescriptions/" + id + "/image";
                let insurance = "/api/v1/" + userId + "/prescriptions/" + id + "/insurance";
                return (
                    <Card
                        id={id}
                        fullName={fullName}
                        phoneNumber={phoneNumber}
                        createDate={createDate}
                        confirmationNumber={confirmationNumber}
                        address={address}
                        comment={comment}
                        status={status}
                        image={image}
                        insurance={insurance}
                        phComment={phComment}
                        phFullName={phFullName}
                        userId={userId}
                    />);

                /*   <tr key={p.id} onClick={this.rowClicked} >
                  <td>{p.createDate}</td>
                  <td>{p.user.fullName}</td>
                  <td>{p.user.email}</td>
                  <td>{p.user.address}</td>
                  <td>{p.confirmationNumber}</td>
                  <td>{p.status}</td>
                  <td ><div className="ui centered card"><img src="/api/v1/1/prescriptions/2/image" /><div class="content right">
                      <a className="header">Elyse</a>
                  </div></div></td>
              </tr > */


            });


            return (

                <div style={{ padding: '50px' }}>
                    <h2 className="ui blue image header">
                        <div className="content">
                            Prescriptions
                       </div>
                    </h2>

                    <div className="ui celled table">

                        {prescriptionsTable}

                    </div>
                </div >);
        }
    }

}


export default PrescriptionList;