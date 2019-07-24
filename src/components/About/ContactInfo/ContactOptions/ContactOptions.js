import React from 'react';

 class ContactOptions extends React.Component {
    render() {
        return (
            <div style={{width: '30%', float: 'right', paddingLeft: '4%', paddingBottom: '20px'}}>


                {/*width: 30%;*/}
                {/*padding-top: 15px;*/}
                {/*margin-top: 50px;*/}
                {/*padding-right: 100px;*/}
                {/*padding-left: 10px;*/}
                {/*text-align: center;*/}
                {/*float: right;*/}


                <img
                    className="gmail-icon-link"
                    src="https://www.contactmonkey.com/cm_wp/wp-content/uploads/2019/04/gmail-3.png"
                    style={{ margin: '5px', width: '60px', height: '60px', backgroundColor: 'black' }}
                />
                <img
                    className="phone-icon-link"
                    src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
                    style={{ margin: '5px', width: '60px', height: '60px', backgroundColor: 'white' }}
                />
                <img
                    className="linkedin-icon-link"
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                    style={{ margin: '5px', width: '60px', height: '60px', backgroundColor: 'white' }}
                />
            </div>
        );
    }
};

export default ContactOptions;