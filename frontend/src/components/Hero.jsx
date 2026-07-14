import {
  LinkedInIcon,
  GithubIcon,
  MailIcon,
  DownloadIcon,
  LeetCodeIcon
} from './icons/Icons.jsx'

export const LINKEDIN_URL = 'https://www.linkedin.com/in/ilma-rehman-b86020309'
export const GITHUB_URL = 'https://github.com/IlmaxRehman'
export const LEETCODE_URL = "https://leetcode.com/u/IlmaxRehman/"
const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export const EMAIL = "ilmarehman022@gmail.com"

export default function Hero() {
  return (
    <section className="hero">
      <div className="inner">
        <div>
          <div className="kicker">
            Final-Year Computer Science Student • Open to Software Engineering & Backend Internships
          </div>

          <h1>
            I build backend systems that <span className="accent">think.</span>
          </h1>

          <p className="lede">
            Software Engineer specializing in backend systems and AI-powered applications.
            I enjoy turning ideas into real products—from hackathon-winning AI platforms to
            production-ready software for businesses—while continuously learning, building,
            and shipping.
          </p>

          <div className="hero-cta">
            <button
              className="btn btn-primary"
              onClick={() => scrollTo('projects')}
            >
              View Projects
            </button>

            <a
              className="btn btn-ghost"
              href="https://drive.google.com/file/d/1D46630dXdmD5deHTsOp7w7IJ95WDHFpx/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </div>

          <div className="hero-links">
            <a
              className="icon-link li"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </a>

            <a
              className="icon-link gh"
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              title="GitHub"
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
              href={`mailto:${EMAIL}?subject=Internship%20Opportunity&body=Hi%20Ilma,%0D%0A%0D%0AI%20came%20across%20your%20portfolio...`}
              title="Email"
            >
              <MailIcon />
            </a>

            <a
              className="icon-link cv"
              href="https://drive.google.com/file/d/1D46630dXdmD5deHTsOp7w7IJ95WDHFpx/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              title="Resume"
            >
              <DownloadIcon />
            </a>
          </div>
        </div>

        <div className="term-card">
          <div className="term-bar">
            <span className="r" />
            <span className="y" />
            <span className="g" />
          </div>

          <div className="term-body">
            <div><span className="p">$</span> whoami</div>
            <div>ilma_rehman</div>

            <div>&nbsp;</div>

            <div><span className="p">$</span> specialization</div>
            <div>
              <span className="k">backend systems</span> +{' '}
              <span className="k">ai applications</span>
            </div>

            <div>&nbsp;</div>

            <div><span className="p">$</span> current_focus</div>
            <div>building products that solve real problems</div>

            <div>&nbsp;</div>

            <div><span className="p">$</span> status</div>
            <div>
              open_to_internships: <span className="c">true</span>
            </div>

            <div><span className="p">$</span> <span className="term-cursor" /></div>
          </div>
        </div>
      </div>
    </section>
  )
}