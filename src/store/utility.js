import moment from 'moment';

export const updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject,
        ...updatedValues
    }
};

export const tagEmail = (emails, index, tag) => {
    return emails.map((email, i) => {
        if (i !== index) {
            return email;
        }
        return { ...email, ...tag };
    });
};

export const getVisibleEmails = (emails, filter) => {
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

export const format = (date) => moment(new Date(date)).format('MMM d');