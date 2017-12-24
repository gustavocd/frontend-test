import React, { Component } from 'react';

class EmailItem extends Component {
    render() {
        return (
            <div className="email-item" onClick={(e) => this.props.click(e)}>
                <svg className="email-item__icon" style={{ 'display': !this.props.email.isReaded ? 'block': 'none'}}>
                    <use xlinkHref="img/sprite.svg#icon-circle"></use>
                </svg>
                <div className="email-item__header">
                    <img className="email-item__avatar" src={this.props.email.avatar} alt={this.props.email.tag} />
                    <h2 className="email-item__sender">{this.props.email.tag}</h2>
                    <time className="email-item__date">May 26</time>
                </div>
                <h3 className="email-item__subject">{this.props.email.subject}</h3>
                <p className="email-item__body">{this.props.email.body}</p>
            </div>
        )
    }
}

export default EmailItem;