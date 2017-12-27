import initialState from './state';

const inbox = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AS_UNREAD': {
            const updatedEmails = state.emails.map((email, i) => {
                if (i !== action.index) {
                    return email;
                }
                return {
                    ...email,
                    isReaded: false
                };
            });
            return {
                ...state,
                emails: updatedEmails
            }
        }
        case 'SET_AS_DELETED': {
            const deletedEmails = state.emails.map((email, i) => {
                if (i !== action.index) {
                    return email;
                }
                return {
                    ...email,
                    isDeleted: true
                }
            });
            return {
                ...state,
                currentEmail: null,
                emails: deletedEmails
            }
        }
        case 'SET_AS_SPAM': {
            const spamEmails = state.emails.map((email, i) => {
                if (i !== action.index) {
                    return email;
                }
                return {
                    ...email,
                    isSpam: true
                }
            });
            return {
                ...state,
                currentEmail: null,
                emails: spamEmails
            }
        }
        case 'READ_EMAIL':
            const newEmails = state.emails.map((email, i) => {
                if (i !== action.index) {
                    return email;
                }
                return {
                    ...email,
                    isReaded: true
                };
            });
            return {
                ...state,
                currentEmail: action.email,
                currentIndex: action.index,
                emails: newEmails
            }
        default:
            return state;
    }
};

export default inbox;