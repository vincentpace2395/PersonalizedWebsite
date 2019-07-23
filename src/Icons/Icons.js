import React from 'react';

const Icons = () => {
    return (
        <React.Fragment>
            <div className='profile-list-first-row'>
                <img
                    className="gmail-icon-link"
                    src="https://www.contactmonkey.com/cm_wp/wp-content/uploads/2019/04/gmail-3.png"
                    style={{ margin: '5px', width: '80px', height: '80px', backgroundColor: 'black' }} />
                <img
                    className="phone-icon-link"
                    src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
                    style={{ margin: '5px', width: '80px', height: '80px', backgroundColor: 'white' }} />

            </div>
        </React.Fragment>
    );
};

export default Icons;