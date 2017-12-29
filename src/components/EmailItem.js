import React, { Component } from 'react';
import { connect } from 'react-redux';
import { format } from '../store/utility';

class EmailItem extends Component {
  showActive(emailId) {
    const { currentEmail } = this.props;
    if (!currentEmail) {
      return false;
    }
    return currentEmail.id === emailId;
  }

  render() {
    const { email, click } = this.props;
    return (
      <div className={`email-item ${this.showActive(email.id) ? 'active' : ''}`} onClick={() => click(email)}>
        <svg className="email-item__icon" style={{ 'display': email.isReaded ? 'none' : 'block' }}>
          <use xlinkHref="img/sprite.svg#icon-circle"></use>
        </svg>
        <div className="email-item__header">
          <img className="email-item__avatar" src={email.avatar} alt={email.tag} />
          <h2 className="email-item__sender">{email.tag}</h2>
          <time className="email-item__date">{format(email.date)}</time>
        </div>
        <h3 className="email-item__subject">{email.subject}</h3>
        <p className="email-item__body">{email.body}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentEmail: state.inbox.currentEmail
});

export default connect(mapStateToProps)(EmailItem);
