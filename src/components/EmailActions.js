import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SET_VISIBILITY_FILTER } from '../store/actions/actions';

class EmailActions extends Component {
  render() {
    const { onShowAll, onShowDeleted, onShowSpam, currentFilter } = this.props;
    return (
      <ul className="email-actions">
        <li className="email-actions__item">
          <a className={`email-actions__link ${currentFilter === 'SHOW_ALL' ? 'active' : ''}`} onClick={() => onShowAll()}>
            <svg className="email-actions__icon">
              <use xlinkHref="img/sprite.svg#icon-drawer"></use>
            </svg>
            <span className="email-actions__text">Inbox</span>
          </a>
        </li>
        <li className="email-actions__item">
          <a className={`email-actions__link ${currentFilter === 'SHOW_DELETED' ? 'active' : ''}`} onClick={() => onShowDeleted()}>
            <svg className="email-actions__icon">
              <use xlinkHref="img/sprite.svg#icon-trash"></use>
            </svg>
            <span className="email-actions__text">Trash</span>
          </a>
        </li>
        <li className="email-actions__item">
          <a className={`email-actions__link ${currentFilter === 'SHOW_SPAM' ? 'active' : ''}`} onClick={() => onShowSpam()}>
            <svg className="email-actions__icon">
              <use xlinkHref="img/sprite.svg#icon-spam"></use>
            </svg>
            <span className="email-actions__text">Spam</span>
          </a>
        </li>
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  currentFilter: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  onShowAll: () => dispatch({ type: SET_VISIBILITY_FILTER, filter: 'SHOW_ALL' }),
  onShowDeleted: () => dispatch({ type: SET_VISIBILITY_FILTER, filter: 'SHOW_DELETED' }),
  onShowSpam: () => dispatch({ type: SET_VISIBILITY_FILTER, filter: 'SHOW_SPAM' })
});

export default connect(mapStateToProps, mapDispatchToProps)(EmailActions);
