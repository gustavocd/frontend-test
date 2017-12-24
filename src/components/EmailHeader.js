import React, { Component } from 'react';
import { connect } from 'react-redux';

class EmailHeader extends Component {
    render() {
        const { onTagEmail, subject } = this.props;
        return (
            <div className="email-header">
                <h1 className="email-header__title">{subject}</h1>
                <ul className="email-header__actions">
                    <li className="email-actions__item">
                        <a className="email-header__link" onClick={onTagEmail}>
                            <svg className="email-header__icon">
                                <use xlinkHref="img/sprite.svg#icon-circle"></use>
                            </svg>
                        </a>
                    </li>
                    <li className="email-actions__item">
                        <a className="email-header__link" onClick={onTagEmail}>
                            <svg className="email-header__icon">
                                <use xlinkHref="img/sprite.svg#icon-trash"></use>
                            </svg>
                        </a>
                    </li>
                    <li className="email-actions__item">
                        <a className="email-header__link" onClick={onTagEmail}>
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

const mapDispatchToProps = dispatch => ({
    onTagEmail: () => dispatch({ type: 'TAG_EMAIL_AS' })
});

export default connect(null, mapDispatchToProps)(EmailHeader);