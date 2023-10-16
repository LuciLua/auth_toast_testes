'use client'

import { useContext, useState } from "react";
import { Field } from "./Field";
import styles from "./form.module.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormContextProvider, { FormContext } from "../../contexts/FormContext";

function Form() {

    const [isLoginForm, setIsLoginForm] = useState(true)

    const { dataUserLogin, setDataUserLogin } = useContext(FormContext)

    const notify = () => {
        if (isLoginForm) {
            toast("Login Successful", {
                closeButton: false,
                icon: '✅',
                position: "bottom-left",
                theme: "dark",
                type: "success",
                closeOnClick: true,
                hideProgressBar: true,
                pauseOnFocusLoss: false,
                autoClose: 1500,
            });
        } else {
            toast("Your account has been created", {
                closeButton: false,
                icon: '👋',
                position: "bottom-left",
                theme: "dark",
                type: "info",
                closeOnClick: true,
                hideProgressBar: true,
                pauseOnFocusLoss: false,
                autoClose: 1500,
            });
        }
    }

    return (
        <div className={styles.boxForm}>
            <FormContextProvider>
                <ToastContainer />
                <form action="">
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
                </form>
                <div className={styles.btnCollection}>
                    <button onClick={notify}>{isLoginForm ? 'Login' : 'Create now'}</button>
                    <button onClick={() => { setIsLoginForm(!isLoginForm) }}>
                        {isLoginForm ? 'Create new Account' : 'I already have an account'}
                    </button>
                </div>
            </FormContextProvider>
        </div>
    )
}


export { Form }