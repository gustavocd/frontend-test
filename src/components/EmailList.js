import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmailItem from './EmailItem';
import EmailActions from './EmailActions';
import { READ_EMAIL, EMAILS_RECIEVE } from '../store/actions/actions';
import { getVisibleEmails } from '../store/utility';

class EmailList extends Component {

  componentDidMount() {
    setInterval(this.props.onRecieveEmails, 90000);
  }

  render() {
    const { emails, onReadEmail } = this.props;
    return (
      <div className="email-list">
        <EmailActions />
        {emails.length > 0 ? emails.map((email, index) =>
          <EmailItem
            click={onReadEmail}
            email={email}
            key={index}
          />) : <div className="email-item">No items</div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  emails: getVisibleEmails(state.inbox.emails, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  onReadEmail: (email) => dispatch({ type: READ_EMAIL, email }),
  onRecieveEmails: () => dispatch({ type: EMAILS_RECIEVE })
});

export default connect(mapStateToProps, mapDispatchToProps)(EmailList);
