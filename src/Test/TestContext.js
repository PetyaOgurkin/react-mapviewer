import React, { useContext, useState } from 'react'


const TestContext = React.createContext();

export const useTest = () => {
    return useContext(TestContext)
}


export const TestProvider = ({ children }) => {

    const [state, setState] = useState({
        a: 1
    })

    return (
        <TestContext.Provider value={state}>
            {children}
        </TestContext.Provider>
    )
}
