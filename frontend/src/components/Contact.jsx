import {
  LinkedInIcon,
  GithubIcon,
  MailIcon,
  DownloadIcon,
  LeetCodeIcon,
} from "./icons/Icons.jsx";
import { LINKEDIN_URL, GITHUB_URL,LEETCODE_URL  } from "./Hero.jsx";

const EMAIL = "YOUR_EMAIL@gmail.com";

export default function Contact() {
  return (
    <section className="sec contact-sec" id="contact">
      <div className="inner">
        <div className="contact-layout">

          {/* LEFT */}

          <div className="contact-left">
            <div className="sec-tag">07 · Contact</div>

            <h2 className="sec-title">
              Let's <span>Connect</span>
            </h2>

            <p className="contact-intro-text">
              I'm a final-year Computer Science student passionate about
              building backend systems and AI-powered applications.
              <br />
              <br />
              I'm currently looking for Software Engineering and Backend
              Internship opportunities where I can contribute, learn,
              and continue building products that solve real-world
              problems.
              <br />
              <br />
              If my work resonated with you, I'd love to connect.
            </p>

           
          </div>

          {/* RIGHT */}

          <div className="contact-terminal">

            <div className="term-card">

              <div className="term-bar">
                <span className="r"></span>
                <span className="y"></span>
                <span className="g"></span>
              </div>

              <div className="term-body">

                <div>
                  <span className="p">$</span> status
                </div>

                <div className="k">
                  Open to Backend & Software Engineering Internships
                </div>

                <br />

                <div>
                  <span className="p">$</span> focus
                </div>

                <div>
                  Backend Systems
                  <br />
                  AI Applications
                  <br />
                  FastAPI
                  <br />
                  Django
                </div>

                <br />

                <div>
                  <span className="p">$</span> connect
                </div>

                <div className="hero-links contact-icons">

                  <a
                    className="icon-link li"
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedInIcon />
                  </a>

                  <a
                    className="icon-link gh"
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GithubIcon />
                  </a>

                  <a
                   className="icon-link lc"
                   href={LEETCODE_URL}
                   target="_blank"
                   rel="noreferrer"
                   title="LeetCode"
                  >
                    <LeetCodeIcon />
                  </a>

                  <a
                    className="icon-link mail"
                    href={`mailto:${EMAIL}`}
                  >
                    <MailIcon />
                  </a>

                  <a
                    className="icon-link cv"
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <DownloadIcon />
                  </a>

                </div>

                <br />

                <span className="p">$</span>{" "}
                <span className="term-cursor"></span>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}