import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmailItem from './EmailItem';
import EmailActions from './EmailActions';

class EmailList extends Component {
    render() {
        const { emails, onReadEmail, onSelectAction, currentIndex } = this.props;
        return (
            <div className="email-list">
                <EmailActions click={onSelectAction}/>
                {emails.map((email, index) => 
                    <EmailItem
                        click={onReadEmail}
                        currentIndex={currentIndex}
                        index={index}
                        email={email}
                        key={index}
                    />
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    emails: state.emails,
    currentIndex: state.currentIndex
});

const mapDispatchToProps = dispatch => ({
    onReadEmail: (index, email) => dispatch({ type: 'READ_EMAIL', index, email }),
    onSelectAction: () => dispatch({ type: 'FILTER_BY' })
});

export default connect(mapStateToProps, mapDispatchToProps)(EmailList);