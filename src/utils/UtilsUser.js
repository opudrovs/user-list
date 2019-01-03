export function composeFullName(user) {
    if (!user || !user.name) {
        return '';
    }

    const name = user.name;
    return `${name.first || ''}${name.last ? ` ${name.last}` : ''}`;
}

export function composeAddress(user) {
    if (!user) {
        return '';
    }

    const location = user.location;

    if (!location) {
        return user.nat || '';
    }

    let parts = [];
    if (location.street) {
        parts.push(location.street);
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
