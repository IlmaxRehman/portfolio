import { education } from '../data/education.js'

export default function Education() {
  return (
    <section className="sec" id="education">
      <div className="inner">
        <div className="sec-head">
          <div className="sec-tag">05 · Education</div>
          <h2 className="sec-title">Academic background</h2>
        </div>
        <div className="edu-list">
          {education.map((e) => (
            <div className="edu-card" key={e.degree}>
              <div>
                <div className="deg">{e.degree}</div>
                <div className="inst">{e.institution}</div>
              </div>
              <div className="meta">{e.period}<br />{e.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
