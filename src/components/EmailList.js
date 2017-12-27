import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmailItem from './EmailItem';
import EmailActions from './EmailActions';

const getVisibleEmails = (emails, filter) => {
    switch (filter) {
        case 'SHOW_DELETED':
            return emails.filter(email => email.isDeleted);
        case 'SHOW_SPAM':
            return emails.filter(email => email.isSpam);
        case 'SHOW_ALL':
        default:
            return emails;
    }
}

class EmailList extends Component {

    render() {
        const { emails, onReadEmail } = this.props;
        return (
            <div className="email-list">
                <EmailActions />
                {emails.map((email, index) =>
                    <EmailItem
                        click={onReadEmail}
                        index={index}
                        email={email}
                        key={index}
                    />)
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    emails: getVisibleEmails(state.inbox.emails, state.visibilityFilter),
    currentIndex: state.inbox.currentIndex
});

const mapDispatchToProps = dispatch => ({
    onReadEmail: (index, email) => dispatch({ type: 'READ_EMAIL', index, email })
});

export default connect(mapStateToProps, mapDispatchToProps)(EmailList);