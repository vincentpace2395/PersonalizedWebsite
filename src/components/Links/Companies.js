import React from 'react';
import './Companies.css';

const Companies = () => {
    return (
        <div className='col-md-8'>
            <div className='company-list'>
                <div>
                    <a href='http://www.trapize.com/' target='_blank'>
                        <img
                            className="trapize-icon-link"
                            src="https://media.licdn.com/dms/image/C4E0BAQHjtPg6P91wig/company-logo_400_400/0?e=1571270400&v=beta&t=cFcNPp2zAbDfIP9rOl7WIKdQxI-yIgDzqFhORmanRQY"
                            style={{margin: '5px', width: '120px', height: '120px', backgroundColor: 'black'}}
                        />
                    </a>
                </div>
                <div>
                    <a href='https://wellsmith.com' target='_blank'>
                        <img
                            className="wellsmith-icon-link"
                            src="https://media.licdn.com/dms/image/C560BAQFcS508g8xOEA/company-logo_400_400/0?e=1571270400&v=beta&t=WA5WsP7WE9dWOWfpOp_2eAGFyi-3D1BMwaV1wClDPC0"
                            style={{margin: '5px', width: '120px', height: '120px', backgroundColor: 'black'}}
                        />
                    </a>
                </div>
                <div>
                    <a href='https://www.anaconda.com' target='_blank'>
                        <img
                            className="anaconda-icon-link"
                            src="https://media.licdn.com/dms/image/C4E0BAQFjEhn97VlSBg/company-logo_400_400/0?e=1571270400&v=beta&t=10tOKNw00tq4QW_Y6S7SWLWL7BqTcIO9ZtzlVHZNuM8"
                            style={{margin: '5px', width: '120px', height: '120px', backgroundColor: 'white'}}
                        />
                    </a>
                </div>
                <div>
                    <a href='https://www.cvent.com' target='_blank'>
                        <img
                            className="cvent-icon-link"
                            src="https://media.licdn.com/dms/image/C4D0BAQH2hGDmYXhc6A/company-logo_400_400/0?e=1571270400&v=beta&t=KT3mXgUQ5sQ4Q1tqTx3ymkWazmTLaP9RrbWHOjg3GgY"
                            style={{margin: '5px', width: '120px', height: '120px', backgroundColor: 'black'}}
                        />
                    </a>
                </div>
            </div>
        </div>

    )
};

export default Companies;