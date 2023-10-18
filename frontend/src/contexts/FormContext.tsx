'use client'

import { ReactNode, createContext, useEffect, useState } from "react"

export const FormContext = createContext<any>({})

export default function FormContextProvider({ children }: { children: ReactNode }) {

    const [dataUserLogin, setDataUserLogin] = useState({
        username: "default",
        password: "default"
    })

    useEffect(() =>{
        setDataUserLogin({username: "ola", password: 'tesetse'})
    }, [])

    return (
        <FormContext.Provider value={{
            dataUserLogin,
            setDataUserLogin
        }}>
            {children}
        </FormContext.Provider>
    )
}