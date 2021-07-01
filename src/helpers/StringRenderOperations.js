export const formatAddress = (address) => {
    const tempStringAddress = address;
    const addressLeftPart = tempStringAddress.slice(0, 5);
    const addressRightPart = tempStringAddress.slice(-4);
    return addressLeftPart + '...' + addressRightPart;
}

export const formatNetworkName = (name) => {
    return name[0].toUpperCase() + name.slice(1);
}

export const renderTokenAmount = (amount) => {
    return amount?.length > 11 ? amount?.slice(0, 11) + '...' : Number(amount).toFixed(2);
}
