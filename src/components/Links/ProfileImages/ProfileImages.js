import React from 'react'

const ProfileImages = () => {
    return (
        <div>
            <div className='profile-list-first-row'>
                <a href='https://github.com/vincentpace2395' target='_blank'>
                    <img
                        className="github-icon-link"
                        src="https://icon-library.net/images/github-icon-png/github-icon-png-29.jpg"
                        style={{ margin: '5px', width: '80px', height: '80px', backgroundColor: 'black' }} />
                </a>
                <a href='https://www.linkedin.com/in/vincent-pace-394562b8/' target='_blank'>
                    <img
                        className="linkedin-icon-link"
                        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                        style={{ margin: '5px', width: '80px', height: '80px', backgroundColor: 'white' }} />
                </a>
                <a href='https://www.twitch.tv/vincentpace2395' target='_blank'>
                    <img
                        className="twitch-icon-link"
                        src="https://www.twitch.tv/p/assets/uploads/glitch_474x356.png"
                        style={{ margin: '5px', width: '80px', height: '80px', backgroundColor: 'white' }} />
                </a>
            </div>
            <div className='profile-list-second-row'>
                <a href='https://www.facebook.com/vinny.pace.33' target='_blank'>
                    <img
                        className="facebook-icon-link"
                        src="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19753.png"
                        style={{ margin: '5px', width: '80px', height: '80px', backgroundColor: 'white' }} />
                </a>
                <a href='https://twitter.com/v_vpace' target='_blank'>
                    <img
                        className="twitter-icon-link"
                        src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png"
                        style={{ margin: '5px', width: '80px', height: '80px', backgroundColor: 'white' }} />
                </a>
                <a href='https://www.instagram.com/vinnypace2395/' target='_blank'>
                    <img
                        className="instagram-icon-link"
                        src="https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png?w=300"
                        style={{ margin: '5px', width: '80px', height: '80px' }} />
                </a>
            </div>
        </div>
    );
};

export default ProfileImages;