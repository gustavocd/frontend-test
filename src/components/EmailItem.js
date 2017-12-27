import React, { Component } from 'react';
import { connect } from 'react-redux';

class EmailItem extends Component {
    render() {
        const { index, email, currentIndex, click } = this.props;
        return (
            <div className={`email-item ${currentIndex === index ? 'active': ''}`} onClick={() => click(index, email)}>
                <svg className="email-item__icon" style={{ 'display': email.isReaded ? 'none': 'block'}}>
                    <use xlinkHref="img/sprite.svg#icon-circle"></use>
                </svg>
                <div className="email-item__header">
                    <img className="email-item__avatar" src={email.avatar} alt={email.tag} />
                    <h2 className="email-item__sender">{email.tag}</h2>
                    <time className="email-item__date">{email.date}</time>
                </div>
                <h3 className="email-item__subject">{email.subject}</h3>
                <p className="email-item__body">{email.body}</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentIndex: state.inbox.currentIndex
});

export default connect(mapStateToProps)(EmailItem);