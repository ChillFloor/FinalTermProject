import React from "react";
import "./Resume.css"

function Resume() {
    const resumeUrl = process.env.PUBLIC_URL + "/Resume_2025.pdf";

    return (
        <main className="resume-container">
            <section>
                <h2>My Resume</h2>
                <p>
                    Below you will find my resume for the year 2025 embedded along with a button to download a copy:
                </p>
            </section>

            <section>
                <object
                    data={resumeUrl}
                    title="Resume"
                    className="resume-frame"
                >
                    <p>
                        Your browser does not support embedded PDFs.
                    </p>
                </object>
                <a href={resumeUrl} download="Resume_2025.pdf" className="resume-button">
                    Download Resume
                </a>
            </section>
        </main>
    );
}

export default Resume;