import "../styles/globals.css"

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
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}