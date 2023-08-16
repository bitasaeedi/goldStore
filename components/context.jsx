import React, {createContext, useContext, useEffect, useState} from 'react';


const AppContext = createContext();

// Create a provider
function AppProvider({ children }) {
    let [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        try {
            const accessToken = localStorage.getItem("access-token");
            setIsLogged(accessToken !== null && accessToken !== undefined);
        } catch (error) {
            console.error("Error accessing localStorage:", error);
        }
    }, []);



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
