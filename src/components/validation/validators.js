const isNullOrEmpty = (obj) => {
    if (typeof obj !== 'undefined' && obj !== null && obj !== '' && obj.trim() !== '') {
        return null;
    } else return 'Cannot be left blank.'
}

export const validators = {
    isNullOrEmpty
}