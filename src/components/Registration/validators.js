export const required = value => {
    return value ? undefined : 'Required';
};

export const isNotEmpty = value => {
    return value.trim() !== '' ? undefined : 'Cannot be empty';
};

export const atLeastEight = value => {
    return value.length >= 8
        ? undefined
        : 'Password must be at least 8 Characters';
};

export const isValidEmail = email => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email) ? undefined : 'Not a valid email';
};

export const emailTooLong = value => {
    return value.length < 72
        ? undefined
        : 'Password must be less than 72 characters';
};

export const passwordsMatch = (value, allValues) => {
    return value === allValues.password ? undefined : "Passwords don't match";
};
