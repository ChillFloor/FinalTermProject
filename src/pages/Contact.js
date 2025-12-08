import React, { useState } from "react";
import "./Contact.css";

function Contact() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        let isValid = true;

        if (!/^[A-Za-z]{2,}$/.test(firstName)) {
            newErrors.firstName = "Enter at least 2 alpha characters.";
            isValid = false;
        }

        if (!/^[A-Za-z]{2,}$/.test(lastName)) {
            newErrors.lastName = "Enter at least 2 alpha characters.";
            isValid = false;
        }

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            newErrors.email = "Enter a valid email address.";
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            const message = `Message received, ${firstName} ${lastName}!`
            setSuccessMessage(message);
        }
    };

    return (
        <main className="contact">
            <section className="contact-form-section">
                <h2>Contact Form</h2>
                <nav>
                    <ul>
                        <li><a href="https://github.com/ChillFloor">GitHub</a></li>
                    </ul>
                </nav>
                {!successMessage ? (
                    <form onSubmit={handleSubmit} className="contact-form">
                        <label>First Name:</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <span className="error">{errors.firstName}</span>

                        <label>Last Name:</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <span className="error">{errors.lastName}</span>

                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <span className="error">{errors.email}</span>

                        <label>Message:</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="4"
                            cols="50"
                            placeholder="Write your message here..."
                        />
                        <span className="error">{errors.message}</span>

                        <button type="submit">Submit</button>
                    </form>
                ) : (
                    <div id="success-message">{successMessage}</div>
                )}
            </section>
            <section className="contact-image-section">
                <img
                    src={process.env.PUBLIC_URL + "/contact.png"}
                    alt="Contact Image"
                />
            </section>
        </main>
    );
}

export default Contact;