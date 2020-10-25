import React from 'react';
import { connect } from 'react-redux';
import EmailHeader from './EmailHeader';

function EmailBody(props) {
  const { email } = props;

  if (email) {
    return (
      <main>
        <EmailHeader subject={email.subject} />
        <div className="email-body">
          <h2 className="email-body__title">
            {email.tag}
            <a href={`mailto:${email.from}`} className="email-body__mail">
              &nbsp;&lt;{email.from}&gt;
            </a>
          </h2>
          <p>{email.body}</p>
        </div>
      </main>
    )
  }
 
  return (
    <svg className="email-container__envelop">
      <use xlinkHref="img/sprite.svg#icon-mail"></use>
    </svg>
  )
}

const mapStateToProps = state => ({
  email: state.inbox.currentEmail
});

export default connect(mapStateToProps)(EmailBody);
