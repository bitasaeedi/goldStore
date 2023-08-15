import React, { createContext, useContext, useState } from 'react';


const AppContext = createContext();

// Create a provider
function AppProvider({ children }) {

    const [isLogged, setIsLogged] = useState(false);

    return (
        <AppContext.Provider value={{ isLogged, setIsLogged}}>
            {children}
        </AppContext.Provider>
    );
}

// Create a custom hook to access the context
function useAppContext() {
    return useContext(AppContext);
}

export { AppProvider, useAppContext };
