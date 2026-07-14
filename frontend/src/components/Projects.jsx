import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section className="sec sec--alt" id="projects">
      <div className="inner">

        <div className="sec-head">
          <div className="sec-tag">04 · Projects</div>

          <h2 className="sec-title">
            Featured Engineering Projects
          </h2>

          <p className="sec-sub">
            A selection of projects that reflect my interests in backend engineering,
            AI applications, and building software for real-world use.
          </p>
        </div>

        <div className="proj-grid">

          {projects.map((p) => (

            <article
              key={p.title}
              className={`proj-card ${p.featured ? "featured" : ""}`}
            >

              <div className="proj-image">

                <img
                  src={p.image}
                  alt={p.title}
                />

                {p.featured && (
                  <span className="featured-badge">
                    Featured
                  </span>
                )}

              </div>

              <div className="proj-content">

                <h3>{p.title}</h3>

                <p className="proj-story">
                  {p.story}
                </p>

                <p className="proj-desc">
                  {p.description}
                </p>

                <div className="proj-tags">

                  {p.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>

                <div className="proj-actions">

                  {p.live && (
                    <a
                      className="proj-btn"
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {p.title === "TruthGuard"
                        ? "Backend API"
                        : "Live"}
                    </a>
                  )}

                  <a
                    className="proj-btn"
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>

                  {p.architecture && (
                    <a
                      className="proj-btn secondary"
                      href={p.architecture}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Architecture
                    </a>
                  )}

                  {p.installer && (
                    <a
                      className="proj-btn secondary"
                      href={p.installer}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Installer
                    </a>
                  )}

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}