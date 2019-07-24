import React from 'react';
import './ContactButton.css';

class ContactButton extends React.Component {
    state = {
        isDisplayed: false
    };

    onClickHandler = () => {
        this.setState({
            isDisplayed: !this.state.isDisplayed
        }, () => {
            this.props.onShowContactInfo(this.state.isDisplayed);
        })
    };


    render() {
        return (
            <div className='contact-info-box'>
                <button
                    onClick={this.onClickHandler}
                    className='btn btn-primary'
                    style={{cursor: 'pointer', marginTop: '40px', marginLeft: '60px'}}>
                    {`${this.state.isDisplayed ? 'Hide Contact Info' : 'Contact Me'}`}
                </button>
            </div>
        );
    }
};

export default ContactButton;