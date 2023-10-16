'use client'

import { ReactNode, createContext, useState } from "react"

export const FormContext = createContext<any>({})

export default function FormContextProvider({ children }: { children: ReactNode }) {

    const [dataUserLogin, setDataUserLogin] = useState({
        username: "",
        email: "",
        password: ""
    })

    return (
        <FormContext.Provider value={{ dataUserLogin, setDataUserLogin }}>
            {children}
        </FormContext.Provider>
    )
}