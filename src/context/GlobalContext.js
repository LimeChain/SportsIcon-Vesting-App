import React, { createContext, useContext, useState, useEffect } from "react";

const initialState = {var: 'validation'}
const GlobalContext = createContext(initialState);
const UpdateGlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [variable, setVariable] = useState(initialState.var); // variable to check if global context is set up correctly
    
    return (
        <GlobalContext.Provider value={{
            variable
        }}>
            <UpdateGlobalContext.Provider value={{
                setVariable
            }}>
                {children}
            </UpdateGlobalContext.Provider>
        </GlobalContext.Provider>
    )
}

export function useGlobalContext() {
    const globalContext = useContext(GlobalContext)
    const updateGlobalContext = useContext(UpdateGlobalContext)

    return {
        ...globalContext,
        ...updateGlobalContext
    }
}
