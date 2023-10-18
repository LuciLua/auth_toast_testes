'use client'

import { FormEvent, useContext, useRef, useState } from "react";
import { Field } from "./Field";
import styles from "./Form.module.scss"

import { ToastClassName, ToastContainer, ToastOptions, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormContextProvider, { FormContext } from "../../contexts/FormContext";
import { Theme, ToastIcon, ToastItemStatus, ToastPosition, TypeOptions } from "react-toastify/dist/types";

function Form() {

    const form = useRef(null)
    const [isLoginForm, setIsLoginForm] = useState(true)

    const { dataUserLogin, setDataUserLogin } = useContext(FormContext)

    function getDataFromForm() {
        const formData = new FormData(form.current)
        const formDataObj = {}
        formData.forEach((value, key) => {
            formDataObj[key] = value
        })
        return formDataObj
    }

    function tryLogin(e: FormEvent) {
        e.preventDefault()
        // const data = getDataFromForm()

        // updateDataUserLogin()

        window.location.href = '/especial'

        console.log(dataUserLogin)

    }
    function trySubscribe(e: FormEvent) {
        e.preventDefault()
        const data = getDataFromForm()

        console.log(dataUserLogin)
    }

    function toastMyOptions(icon: string, type: TypeOptions) {
        var theme: Theme = 'dark'
        var position: ToastPosition = 'bottom-left'
        return {
            closeButton: false,
            icon: icon,
            type: type,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnFocusLoss: false,
            autoClose: 1500,
            position: position,
            theme: theme,
        }
    }

    const notify = () => {
        isLoginForm ?
            toast("Login Successful", toastMyOptions('✅', 'warning'))
            :
            toast("Your account has been created", toastMyOptions('👋', 'info'))
    }

    return (
        <div className={styles.boxForm}>
            <FormContextProvider>
                <form ref={form} action="" onSubmit={isLoginForm ? e => tryLogin(e) : e => trySubscribe(e)}>
                    <h1>{isLoginForm ? 'Login' : 'Create now'}</h1>
                    <div className={styles.fieldCollection}>
                        {isLoginForm ?
                            <>
                                <Field name="username" type="text" />
                                <Field name="password" type="password" />
                                <a href="?">I forgot my password</a>
                            </>
                            :
                            <>
                                <Field name="username" type="text" />
                                <Field name="email" type="email" />
                                <Field name="confirm_email" type="email" />
                                <Field name="password" type="password" />
                                <Field name="confirm_password" type="password" />
                            </>
                        }
                    </div>
                    <div className={styles.btnCollection}>
                        <button type="submit" onClick={notify}>{isLoginForm ? 'Login' : 'Create now'}</button>
                        <button type="button" onClick={() => { setIsLoginForm(!isLoginForm) }}>
                            {isLoginForm ? 'Create new Account' : 'I already have an account'}
                        </button>
                    </div>
                </form>
            </FormContextProvider>
        </div>
    )
}


export { Form }