import { credentials } from '../data/credentials.js'

export default function Credentials() {
  return (
    <section className="sec sec--alt" id="credentials">
      <div className="inner">

        <div className="sec-head">
          <div className="sec-tag">06 · Highlights</div>
          <h2 className="sec-title">Achievements & Recognition</h2>
        </div>

        <div className="cred-grid">
          {credentials.map((c) => (
            <div className="cred-card" key={c.title}>
              <div className="issuer">{c.issuer}</div>

              <h4>{c.title}</h4>

              <p>{c.description}</p>

              {c.link !== "#" && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Credential ↗
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}