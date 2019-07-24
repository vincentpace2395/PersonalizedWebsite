import React from 'react';
import Bio from '../Bio/Bio';
import ContactButton from './ContactInfo/ContactButton/ContactButton';
import Description from './Description/Description';
import Skills from './Skills/Skills';
import ContactOptions from "./ContactInfo/ContactOptions/ContactOptions";

class AboutPage extends React.Component {
    state = {
        showContactInfo: false
    };


    onShowContactInfo = show => {
        this.setState({
            showContactInfo: show
        });
    };

    render() {
        return (
            <div>
                <Bio category=<Description /> />
                <ContactButton onShowContactInfo={this.onShowContactInfo}/>
                <Skills />
                { this.state.showContactInfo ? <ContactOptions /> : null }
            </div>
        );
    }
};

export default AboutPage;