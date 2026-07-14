export default function About() {
  return (
    <section className="sec" id="about">
      <div className="inner">
        <div className="sec-head">
          <div className="sec-tag">01 · About</div>
          <h2 className="sec-title">About Me</h2>
        </div>

        <div className="about-layout">
          <div
            className="avatar"
            style={{ backgroundImage: "url(./public/profile-photo.jpg)" }}
          >
            
          </div>

          <div>
            <p className="about-bio">
              During my third year of Computer Science, I discovered that backend
              engineering was the part of software development I genuinely
              enjoyed the most. Since then, I've focused on building scalable
              APIs, AI-powered applications, and production-ready software that
              solves real problems. Every project has taught me something new —
              from software architecture and asynchronous systems to deployment,
              product thinking, and building applications for real users.
            </p>

            <div className="stat-row">
              <div className="stat">
                <div className="num">6+</div>
                <div className="lbl">Major Projects</div>
              </div>

              <div className="stat">
                <div className="num">1</div>
                <div className="lbl">DRDO Internship</div>
              </div>

              <div className="stat">
                <div className="num">3+</div>
                <div className="lbl">Leadership Roles</div>
              </div>

              <div className="stat">
                <div className="num">1st</div>
                <div className="lbl">AI & Cybersecurity Conclave</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}