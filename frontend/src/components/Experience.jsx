import { experience } from '../data/experience.js'

export default function Experience() {
  return (
    <section className="sec" id="experience">
      <div className="inner">
        <div className="sec-head">
          <div className="sec-tag">03 · Experience</div>
          <h2 className="sec-title">Where I've worked</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <div className="tl-item" key={item.role}>
              <div className="tl-date">{item.date}</div>
              <div className="tl-role">{item.role}</div>
              <div className="tl-org">{item.org}</div>
              <div className="tl-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
