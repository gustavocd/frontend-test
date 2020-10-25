import initialState from '../state';
import { updateObject, tagEmail } from '../utility';
import * as actionTypes from '../actions/actions';
import { v1 as uuid } from 'uuid';

const inbox = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_AS_UNREAD: {
      const unreadEmails = tagEmail(state.emails, action.index, { isReaded: false });
      return updateObject(state, { emails: unreadEmails });
    }
    case actionTypes.SET_AS_DELETED: {
      const deletedEmails = tagEmail(state.emails, action.index, { isDeleted: true, isSpam: false, isReaded: true });
      return updateObject(state, { currentEmail: null, emails: deletedEmails });
    }
    case actionTypes.SET_AS_SPAM: {
      const spamEmails = tagEmail(state.emails, action.index, { isSpam: true, isDeleted: false, isReaded: true });
      return updateObject(state, { currentEmail: null, emails: spamEmails });
    }
    case actionTypes.READ_EMAIL:
      const updatedEmails = tagEmail(state.emails, action.email.id, { isReaded: true });
      return updateObject(state, {
        currentEmail: action.email,
        emails: updatedEmails
      });
    case actionTypes.EMAILS_RECIEVE:
      const emailsWithId = state.newEmails.map(email => {
        return { ...email, id: uuid() };
      });
      const recieveEmails = [...emailsWithId, ...state.emails];
      return updateObject(state, { emails: recieveEmails });
    default:
      return state;
  }
};

export default inbox;
