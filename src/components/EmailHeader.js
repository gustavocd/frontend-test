import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actions';

function EmailHeader(props) {
  const { onSetAsUnread, onSetAsDeleted, onSetAsSpam, email } = props;
  return (
    <div className="email-header">
      <h1 className="email-header__title">{email.subject}</h1>
      <ul className="email-header__actions">
        <li className="email-actions__item">
          <a className="email-header__link" onClick={() => onSetAsUnread(email.id)} title="Mark as Unread">
            <svg className="email-header__icon">
              <use xlinkHref="img/sprite.svg#icon-circle"></use>
            </svg>
          </a>
        </li>
        <li className="email-actions__item">
          <a className="email-header__link" onClick={() => onSetAsDeleted(email.id)} title="Mark as Deleted">
            <svg className="email-header__icon">
              <use xlinkHref="img/sprite.svg#icon-trash"></use>
            </svg>
          </a>
        </li>
        <li className="email-actions__item">
          <a className="email-header__link" onClick={() => onSetAsSpam(email.id)} title="Mark as Spam">
            <svg className="email-header__icon">
              <use xlinkHref="img/sprite.svg#icon-spam"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  email: state.inbox.currentEmail
});

const mapDispatchToProps = dispatch => ({
  onSetAsUnread: (index) => dispatch({ type: actionTypes.SET_AS_UNREAD, index }),
  onSetAsDeleted: (index) => dispatch({ type: actionTypes.SET_AS_DELETED, index }),
  onSetAsSpam: (index) => dispatch({ type: actionTypes.SET_AS_SPAM, index })
});

export default connect(mapStateToProps, mapDispatchToProps)(EmailHeader);
