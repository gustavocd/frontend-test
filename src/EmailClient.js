import React, { Component } from 'react';
import './styles/styles.css';
import EmailList from './components/EmailList';
import EmailContainer from './components/EmailContainer';

class EmailClient extends Component {
  render() {
    return (
      <div className="email-client">
        <EmailList />
        <EmailContainer />
      </div>
    );
  }
}

export default EmailClient;
