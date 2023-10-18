import "../styles/globals.css"
import { ToastClassName, ToastContainer, ToastOptions, toast } from 'react-toastify';


export default function root_layout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Toast</title>
            </head>
            <body>
                <div className="container">
                    <div className="content">
                        <ToastContainer />
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}