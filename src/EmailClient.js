import React from 'react';
import './styles/styles.css';
import EmailList from './components/EmailList';
import EmailContainer from './components/EmailContainer';

function EmailClient() {
  return (
    <div className="email-client">
      <EmailList />
      <EmailContainer />
    </div>
  )
}

export default EmailClient;
