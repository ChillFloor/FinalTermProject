import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <main>
            <h2>Oops! Page Not Found</h2>
            <Link to="/">Back to Home</Link>
        </main>
    );
}

export default NotFound