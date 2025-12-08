import React from "react";
import './Projects.css';

class Projects extends React.Component {
    render(){
        return (
            <main className="projects">
                <section className="banner">
                    <img
                        src={process.env.PUBLIC_URL + '/busters.png'}
                        alt="Berkeley Pacman"
                        className="banner-image"
                    />
                    <div className="banner-content">
                        <h2>The Pac-Man Projects </h2>
                        <p> I applied AI techniques through Pac-Man </p>
                        <a href="https://inst.eecs.berkeley.edu/~cs188/fa24/projects/" className="pacman-button"> Go to Berkeley </a>
                    </div>
                </section>

                <section className="features">
                    <div className="feature-card">
                        <h3>Highly Respected</h3>
                        <p> I completed Berkeley, one of the top universities in computer science, projects that were
                            originally developed for their CS 188. These projects provided me with a strong foundation
                            in artificial intelligence. </p>
                    </div>
                    <div className="feature-card">
                        <h3> Key Topics Learned </h3>
                        <p>  Search Algorithms, Multi‑Agent Search, Probabilistic Inference, Reinforcement Learning,
                         and more! </p>
                    </div>
                </section>
            </main>
        );
    }
}
export default Projects;