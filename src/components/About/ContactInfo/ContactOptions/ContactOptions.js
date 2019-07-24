import React from 'react';
import Icons from '../../../../Icons/Icons';

 class ContactOptions extends React.Component {
    render() {
        return (
            <React.Fragment>
                <img
                    className="gmail-icon-link"
                    src="https://www.contactmonkey.com/cm_wp/wp-content/uploads/2019/04/gmail-3.png"
                    style={{ margin: '5px', width: '80px', height: '80px', backgroundColor: 'black' }} />
                <img
                    className="phone-icon-link"
                    src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
                    style={{ margin: '5px', width: '80px', height: '80px', backgroundColor: 'white' }} />
            </React.Fragment>
        );
    }
};

export default ContactOptions;