import initialState from './state';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'READ_EMAIL':
            const updatedEmails = state.emails.map((email, i) => {
                if (i !== action.index) {
                    return email;
                }
                return {
                    ...email,
                    isReaded: !email.isReaded
                };
            });
            return {
                ...state,
                currentIndex: action.index,
                emails: updatedEmails
            }
        case 'FILTER_BY':
            console.log(action.type);
            return {
                ...state
            }
        case 'TAG_EMAIL_AS':
            console.log(action.type);
            return {
                ...state
            }
        default:
            return state;
    }
};

export default reducer;