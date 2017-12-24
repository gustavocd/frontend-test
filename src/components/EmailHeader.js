import React, { Component } from 'react';

class EmailHeader extends Component {
    render() {
        return (
            <div className="email-header">
                <h1 className="email-header__title">Amazon SES Address Verification Request</h1>
                <ul className="email-header__actions">
                    <li className="email-actions__item">
                        <a className="email-actions__link">
                            <svg className="email-header__icon">
                                <use xlinkHref="img/sprite.svg#icon-circle"></use>
                            </svg>
                        </a>
                    </li>
                    <li className="email-actions__item">
                        <a className="email-actions__link">
                            <svg className="email-header__icon">
                                <use xlinkHref="img/sprite.svg#icon-trash"></use>
                            </svg>
                        </a>
                    </li>
                    <li className="email-actions__item">
                        <a className="email-actions__link">
                            <svg className="email-header__icon">
                                <use xlinkHref="img/sprite.svg#icon-spam"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default EmailHeader;