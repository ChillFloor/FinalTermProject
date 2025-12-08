import React from "react";
import "./Hobbies.css"

function Hobbies() {
    return (
        <main className="hobbies-page">
            <aside className="sidebar">
                <h2>About Me</h2>
                <p>
                    Hi, I'm David Li! I'm 27 years old and am pursuing a master of software development from Boston
                    University.
                </p>

                <section>
                    <h2>Hobby 1: Video Games</h2>
                    <p>
                        This was the original inspiration for how I entered the industry.
                        I spent a lot of time on the computer playing video games when I was young
                        and became a fan of the strategy genre. I consider software development
                        similar to being paid to play video games, as problem solving feels
                        reminiscent of solving puzzles.
                    </p>
                </section>

                <section>
                    <h2>Hobby 2: Board Gaming</h2>
                    <p>
                        After becoming a software developer who spends most of the week at a computer,
                        I began to appreciate in person interactions more. Board games allow me to avoid
                        digital screens, enjoy human interaction, and still experience the gaming aspect
                        from video games.
                    </p>
                </section>

                <section>
                    <h2>Hobby 3: Marketing</h2>
                    <p>
                        I don't enjoy advertisements, but I find it fascinating how marketers exploit
                        weaknesses in human psychology. Tactics such as FOMO (Fear of Missing Out) to gamify
                        deals, or logical fallacies related to odds in gambling are interesting to me.
                        You should at least be aware of marketing, so you don't fall for it.
                    </p>
                </section>

                <section>
                    <h2>Hobby 4: Jogging</h2>
                    <p>
                        As a software developer who spends most of the week at a computer, I've come to
                        appreciate the importance of moving my body. I enjoy jogging in particular because
                        it's a “go at your own pace” activity compared to team sports, and it allows me to
                        listen to podcasts or music while exercising.
                    </p>
                </section>
            </aside>

            <section className="hobbies">
                <div className="hobby">
                    <img src={process.env.PUBLIC_URL + "/videogames.jpg"} alt="Video Games"/>
                    <p>Video Games</p>
                </div>
                <div className="hobby">
                    <img src={process.env.PUBLIC_URL + "/boardgames.jpg"} alt="Board Gaming"/>
                    <p>Board Gaming</p>
                </div>
                <div className="hobby">
                    <img src={process.env.PUBLIC_URL + "/marketing.jpg"} alt="Marketing"/>
                    <p>Marketing</p>
                </div>
                <div className="hobby">
                    <img src={process.env.PUBLIC_URL + "/jog.jpg"} alt="Jogging"/>
                    <p>Jogging</p>
                </div>
            </section>
        </main>
    );
}
export default Hobbies;
