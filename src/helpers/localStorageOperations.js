const localStorageOperations = () => {
    localStorage.removeItem("walletconnect");
    localStorage.removeItem("WEB3_CONNECT_CACHED_PROVIDER");
    localStorage.removeItem("connection-status");
}

export { localStorageOperations };