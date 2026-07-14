import {
  PythonIcon,
  FastAPIIcon,
  CeleryIcon,
  RedisIcon,
  PostgresIcon,
  GroqIcon,
  SpacyIcon,
  SentenceTransformerIcon,
  ScikitIcon,
  OpenCVIcon,
  YOLOIcon,
  RestApiIcon,
  RenderIcon,
  VercelIcon,
  GithubActionsIcon,
  DatabaseDesignIcon,
  SystemDesignIcon,
  ReactIcon,
  NextIcon,
  DockerIcon,
  GitIcon,
  DSAIcon,
  SecurityIcon
} from './icons/Icons.jsx'

const categories = [
  {
    label: 'Backend Engineering',
    items: [
      { Icon: PythonIcon, name: 'Python' },
      { Icon: FastAPIIcon, name: 'FastAPI' },
      { Icon: RestApiIcon, name: 'REST APIs' },
      { Icon: CeleryIcon, name: 'Celery' },
      { Icon: RedisIcon, name: 'Redis' },
      { Icon: PostgresIcon, name: 'PostgreSQL' },
    ]
  },

  {
    label: 'AI & Machine Learning',
    items: [
      { Icon: GroqIcon, name: 'Groq API' },
      { Icon: SpacyIcon, name: 'spaCy' },
      { Icon: SentenceTransformerIcon, name: 'Sentence Transformers' },
      { Icon: ScikitIcon, name: 'Scikit-learn' },
      { Icon: OpenCVIcon, name: 'OpenCV' },
      { Icon: YOLOIcon, name: 'YOLOv8' },
    ]
  },

  {
    label: 'Frontend & Deployment',
    items: [
      { Icon: ReactIcon, name: 'React' },
      { Icon: NextIcon, name: 'Next.js' },
      { Icon: DockerIcon, name: 'Docker' },
      { Icon: GitIcon, name: 'Git & GitHub' },
      { Icon: GithubActionsIcon, name: 'GitHub Actions' },
      { Icon: RenderIcon, name: 'Render' },
      { Icon: VercelIcon, name: 'Vercel' },
    ]
  },

  {
    label: 'Engineering Foundations',
    items: [
      { Icon: DSAIcon, name: 'Problem Solving (Java)' },
      { Icon: DSAIcon, name: 'Data Structures & Algorithms' },
      { Icon: DatabaseDesignIcon, name: 'SQL & Database Design' },
      { Icon: SystemDesignIcon, name: 'System Design' },
      { Icon: SecurityIcon, name: 'Cybersecurity' },
      { Icon: RestApiIcon, name: 'API Design' },
    ]
  }
]

export default function Skills() {
  return (
    <section className="sec sec--alt" id="skills">
      <div className="inner">
        <div className="sec-head">
          <div className="sec-tag">02 · Skills</div>
          <h2 className="sec-title">Technical Toolkit</h2>
        </div>

        <div className="skill-cols">
          {categories.map((cat) => (
            <div className="skill-col" key={cat.label}>
              <h4>{cat.label}</h4>

              <ul>
                {cat.items.map(({ Icon, name }) => (
                  <li key={name}>
                    <Icon />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}