import { HTMLInputTypeAttribute } from "react";
import styles from "./Field.module.scss"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Field({ type, name }: { type: HTMLInputTypeAttribute, name: string }) {

    const labelFormatByName = () => {
        const divideString = name.split('_')
        const upperCaseAndComplete = divideString.map(d => d.charAt(0).toLocaleUpperCase() + d.slice(1))
        return upperCaseAndComplete.join(' ')
    }

    return (
        <div className={styles.field}>
            <label htmlFor={name}>{labelFormatByName()}</label>
            <input type={type} name={name} />
        </div>
    )
}

export { Field }