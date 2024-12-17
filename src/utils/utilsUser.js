import { sanitizeString } from './utilsString';

export const composeFullName = (user) => {
    const { name = {} } = user || {};

    return `${sanitizeString(name.first)}${name.last ? ` ${name.last}` : ''}`;
};

export const composeAddress = (user) => {
    if (!user) {
        return '';
    }

    const location = user.location;

    if (!location) {
        return sanitizeString(user.nat);
    }

    let parts = [];
    if (location.street) {
        parts.push(`${location.street.number} ${location.street.name}`);
    }
    if (location.city) {
        parts.push(location.city);
    }
    if (location.state) {
        parts.push(location.state);
    }
    if (user.nat) {
        parts.push(user.nat);
    }
    if (location.postcode) {
        parts.push(location.postcode);
    }

    return parts.join(', ');
}
