export const formatAddress = (address) => {
    const tempStringAddress = address;
    const addressLeftPart = tempStringAddress.slice(0, 5);
    const addressRightPart = tempStringAddress.slice(-4);
    return addressLeftPart + '...' + addressRightPart;
}

export const formatNetworkName = (name) => {
    return name[0].toUpperCase() + name.slice(1);
}

