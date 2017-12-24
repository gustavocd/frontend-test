import React, { Component } from 'react';

class EmailActions extends Component {
    render() {
        return (
            <ul className="email-actions">
                <li className="email-actions__item">
                    <a className="email-actions__link" onClick={this.props.click}>
                        <svg className="email-actions__icon">
                            <use xlinkHref="img/sprite.svg#icon-drawer"></use>
                        </svg>
                        <span className="email-actions__text">Inbox</span>
                    </a>
                </li>
                <li className="email-actions__item">
                    <a className="email-actions__link" onClick={this.props.click}>
                        <svg className="email-actions__icon">
                            <use xlinkHref="img/sprite.svg#icon-trash"></use>
                        </svg>
                        <span className="email-actions__text">Trash</span>
                    </a>
                </li>
                <li className="email-actions__item">
                    <a className="email-actions__link" onClick={this.props.click}>
                        <svg className="email-actions__icon">
                            <use xlinkHref="img/sprite.svg#icon-spam"></use>
                        </svg>
                        <span className="email-actions__text">Spam</span>
                    </a>
                </li>
            </ul>
        )
    }
}

export default EmailActions;