import React, { Component } from 'react';
import EmailHeader from './EmailHeader';
import EmailBody from './EmailBody';

class EmailContainer extends Component {
    render() {
        return (
            <div className="email-container">
                <EmailHeader />
                <EmailBody />
                {/*<svg className="email-container__envelop">
                    <use xlinkHref="img/sprite.svg#icon-mail"></use>
                </svg>*/}
            </div>
        )
    }
}

export default EmailContainer;