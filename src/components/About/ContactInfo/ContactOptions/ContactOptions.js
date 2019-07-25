import React from 'react';
import './ContactOptions.css';

class ContactOptions extends React.Component {
    displayEmail = () => {
        console.log('vpace@nhpace.net');
        return <div>vpace@nhpace.net</div>
    };

    displayPhoneNumber = () => {
        console.log('(603) 714-1382');
        return <div style={{display: 'block', fontSize: '100px'}}>(603) 714-1382</div>
    };

    displayLinkedinUrl = () => {
        console.log('https://www.linkedin.com/in/vincent-pace-394562b8/');
        return <div>https://www.linkedin.com/in/vincent-pace-394562b8/</div>
    };

    render() {
        return (
            <div style={{width: '30%', float: 'right', paddingLeft: '4%', paddingBottom: '20px'}}>
                <img
                    className="gmail-icon-link"
                    src="https://www.contactmonkey.com/cm_wp/wp-content/uploads/2019/04/gmail-3.png"
                    style={{margin: '5px', width: '60px', height: '60px', backgroundColor: 'black'}}
                    onMouseOver={this.displayEmail}
                />
                <img
                    className="phone-icon-link"
                    src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
                    style={{margin: '5px', width: '60px', height: '60px', backgroundColor: 'white'}}
                    onMouseOver={this.displayPhoneNumber}
                />
                <img
                    className="linkedin-icon-link"
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                    style={{margin: '5px', width: '60px', height: '60px', backgroundColor: 'white'}}
                    onMouseOver={this.displayLinkedinUrl}
                />
            </div>
        );
    }
};

export default ContactOptions;