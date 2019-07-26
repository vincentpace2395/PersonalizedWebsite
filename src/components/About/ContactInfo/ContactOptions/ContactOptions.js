import React from 'react';
import ReactTooltip from 'react-tooltip';
import './ContactOptions.css';

class ContactOptions extends React.Component {
    render() {
        return (
            <div style={{width: '30%', float: 'right', paddingLeft: '4%', paddingBottom: '20px'}}>
                <img
                    title="vpace@nhpace.net"
                    className="gmail-icon-link"
                    src="https://www.contactmonkey.com/cm_wp/wp-content/uploads/2019/04/gmail-3.png"
                    style={{margin: '5px', width: '60px', height: '60px', backgroundColor: 'black'}}
                />
                <img
                    title="(603) 714-1382"
                    className="phone-icon-link"
                    src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
                    style={{margin: '5px', width: '60px', height: '60px', backgroundColor: 'white'}}
                />
                <img
                    title="https://www.linkedin.com/in/vincent-pace-394562b8/"
                    className="linkedin-icon-link"
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                    style={{margin: '5px', width: '60px', height: '60px', backgroundColor: 'white'}}
                />
            </div>
        );
    }
};

export default ContactOptions;