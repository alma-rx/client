import React from 'react';
import UpdatePrescriptionPopup from './UpdatePrescriptionPopup';
import ImageZoom from 'react-medium-image-zoom';
import ShippingStatus from './ShippingStatus';
class Card extends React.Component {
    state = {
        userId: '', phFullName: '', phAddress: '', phPhoneNumber: '', id: '', fullName: '', image: '', insurance: '', createDate: '', confirmationNumber: '', address: '', comment: '', status: '', phComment: '', phoneNumber: '', phPhoneNumber: ''
    };

    updateStatus = (data) => {

        this.setState({ status: data });
        this.setState({ phFullName: localStorage.getItem('fullName') });
        this.setState({ phAddress: localStorage.getItem('phoneNumber') });
    }
    componentDidMount() {
        this.setState(this.props);
    }

    render() {
        let { userId, phFullName, phAddress, phPhoneNumber, id, fullName, image, createDate, confirmationNumber, address, comment, status, phComment, phoneNumber, insurance } = this.state;
        return (
            <div className="ui card" style={{ width: '100%' }} >
                <div className="extra content center">
                    <ShippingStatus status={status} />
                </div>
                < div className="content" style={{ padding: '0' }} >
                    <div className="ui items">
                        <div className="item">
                            <div className="ui medium bordered image">
                                <div class="ui top attached label">Prescription</div>
                                <ImageZoom
                                    image={{
                                        src: image,
                                        className: 'img',
                                        style: { width: '50em' }
                                    }}
                                    zoomImage={{
                                        src: image
                                    }}
                                />
                            </div>

                            <div className="ui medium bordered image">
                                <div class="ui top attached label">Insurance</div>
                                <ImageZoom
                                    image={{
                                        src: insurance,
                                        className: 'img',
                                        style: { width: '50em' }
                                    }}
                                    zoomImage={{
                                        src: insurance
                                    }}
                                />
                            </div>

                            <div class="ui vertical segment">

                                <div className="content" style={{ padding: '1rem' }}>
                                    <a className="header avatar"> {fullName}</a>
                                    <div className="meta">
                                        <i class="phone icon"></i>
                                        <span className="cinema"> {phoneNumber}</span>
                                    </div>

                                    <div className="extra">
                                        <div className="ui label">confimation number: {confirmationNumber} </div>
                                        <div className="ui label"><i className="map marker alternate icon"></i> {address}</div>
                                        <div className="ui label"><i className="calendar alternate outline icon"></i> {createDate}</div>
                                    </div>


                                    <div className="ui  segment ">

                                        <p> {comment}</p>
                                    </div>
                                </div>
                                <div class="ui divider"></div>

                                {this.state.phFullName != '' &&
                                    <div className="content" style={{ padding: '1rem' }}>
                                        <a className="header avatar"> Pharmacist:  {phFullName}</a>
                                        <div className="meta">
                                            <i class="phone icon"></i>
                                            <span className="cinema"> {phPhoneNumber}</span>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="ui right" style={{ padding: '1rem' }}>
                                <UpdatePrescriptionPopup userId={userId} id={id} shipmentStatus={status} onClick={this.updateStatus} />
                            </div>
                        </div>
                    </div>
                </div >

            </div >
        );
    }

}


export default Card;