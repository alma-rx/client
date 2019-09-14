import React from 'react';



class ShippingStatus extends React.Component {

    render() {
        let { status } = this.props;
        let newOrder, confirmed, inTransit, deliverd;
        if (status == 'NEW') {
            newOrder = 'completed';
            confirmed = 'disabled';
            inTransit = 'disabled';
            deliverd = 'disabled';
        } if (status == 'CONFIRMED') {
            newOrder = 'completed';
            confirmed = 'completed';
            inTransit = 'disabled';
            deliverd = 'disabled';
        }
        else if (status == 'IN_TRANSIT') {
            newOrder = 'completed';
            confirmed = 'completed';
            inTransit = 'active';
            deliverd = 'disabled';
        } else if (status == 'DELIVERED') {
            newOrder = 'completed';
            confirmed = 'completed';
            inTransit = 'completed';
            deliverd = 'completed';
        }
        return (
            <div className="ui ordered steps">
                <div className={`${newOrder} step`}>
                    <div className="content">
                        <div className="title">Order Received</div>
                        <div className="description">Patient submited an order</div>
                    </div>
                </div>
                <div className={`${confirmed} step`}>
                    <div className="content">
                        <div className="title">Order confirmed</div>
                        <div className="description">Pharmasist confirmed</div>
                    </div>
                </div>
                <div className={`${inTransit} step`}>

                    <div className="content">

                        <div className="title">In Transit</div>
                        <div className="description">The medicine is on it's way</div>
                    </div>

                </div>
                <div className={`${deliverd} step`}>

                    <div className="content">
                        <div className="title">Delivered</div>
                        <div className="description">Patient receieved the medicine</div>
                    </div>

                </div>
            </div>
        );
    }
}


export default ShippingStatus;