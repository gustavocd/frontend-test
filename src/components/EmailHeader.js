import React, { Component } from 'react';
import { connect } from 'react-redux';

class EmailHeader extends Component {
    render() {
        const { onSetAsUnread, onSetAsDeleted, onSetAsSpam, currentIndex, email } = this.props;
        return (
            <div className="email-header">
                <h1 className="email-header__title">{email.subject}</h1>
                <ul className="email-header__actions">
                    <li className="email-actions__item">
                        <a className="email-header__link" onClick={() => onSetAsUnread(currentIndex)} title="Mark as Unread">
                            <svg className="email-header__icon">
                                <use xlinkHref="img/sprite.svg#icon-circle"></use>
                            </svg>
                        </a>
                    </li>
                    <li className="email-actions__item">
                        <a className="email-header__link" onClick={() => onSetAsDeleted(currentIndex)} title="Mark as Deleted">
                            <svg className="email-header__icon">
                                <use xlinkHref="img/sprite.svg#icon-trash"></use>
                            </svg>
                        </a>
                    </li>
                    <li className="email-actions__item">
                        <a className="email-header__link" onClick={() => onSetAsSpam(currentIndex)} title="Mark as Spam">
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

const mapStateToProps = state => ({
    email: state.inbox.currentEmail,
    currentIndex: state.inbox.currentIndex
});

const mapDispatchToProps = dispatch => ({
    onSetAsUnread: (index) => dispatch({ type: 'SET_AS_UNREAD', index }),
    onSetAsDeleted: (index) => dispatch({ type: 'SET_AS_DELETED', index }),
    onSetAsSpam: (index) => dispatch({ type: 'SET_AS_SPAM', index })
});

export default connect(mapStateToProps, mapDispatchToProps)(EmailHeader);