import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Github, Linkedin, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectArtwork from '../components/ProjectArtwork';
import { dashboards, education, experiences, languages, profile, projects, publication, skillGroups } from '../data/content';

function SectionHeading({ eyebrow, title, detail }: { eyebrow: string; title: string; detail?: string }) {
  return <header className="section-heading section-heading-refined">
    <div><div className="section-kicker">{eyebrow}</div><h2>{title}</h2></div>
    {detail && <p>{detail}</p>}
  </header>;
}

export default function Home() {
  return <>
    <section className="hero hero-refined container" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-main">
        <div className="hero-content">
          <div className="eyebrow"><span className="signal" /> HAMBURG, GERMANY <span className="eyebrow-dash">/</span> DATA SCIENCE · TECHNOLOGY</div>
          <h1>Connecting technology <span>with meaningful impact.</span></h1>
          <p className="hero-description">I'm <strong>Abrar</strong> — a technical business analyst and data science master's student who enjoys bringing <em>people, products, software, and AI</em> together to solve practical problems.</p>
          <p className="hero-secondary">I've worked across software development, machine learning, and technical business analysis, and I enjoy the mix of building things and figuring out what should be built.</p>
          <div className="hero-focus"><span>BUSINESS & PRODUCT</span><i /> <span>SOFTWARE & DATA</span><i /> <span>AI & SUSTAINABILITY</span></div>
          <div className="hero-actions">
            <Link className="button button-primary" to="/#experience">View my work <ArrowUpRight size={18} /></Link>
            <a className="button button-outline" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> Connect on LinkedIn</a>
          </div>
        </div>
        <div className="hero-portrait-wrap"><div className="hero-portrait-frame"><img src={`${import.meta.env.BASE_URL}images/abrar-portrait.webp`} alt="Portrait of Abrar" loading="eager" /></div><div className="portrait-meta"><span>MAHBOOB ABRAR ALI SYED</span><span>HAMBURG · GERMANY</span></div></div>
      </div>
      <div className="hero-bottom"><span>EXPLORE MY PORTFOLIO</span><ArrowDown size={15} /><span className="hero-bottom-right">STRATEGY <span>·</span> ENGINEERING <span>·</span> IMPACT</span></div>
    </section>

    <section id="experience" className="section container experience-section">
      <SectionHeading eyebrow="PROFESSIONAL EXPERIENCE" title="Experience that connects the dots." detail="From delivering enterprise solutions to aligning business needs with technology teams." />
      <div className="experience-list">
        {experiences.map(exp => <article className="experience-item" key={`${exp.company}-${exp.period}`}>
          <div className="exp-side"><span className="exp-period">{exp.period}</span><span className="exp-location">{exp.location}</span></div>
          <div className="exp-body"><p className="exp-company">{exp.company}</p><h3>{exp.role}</h3><ul>{exp.highlights.map(item => <li key={item}>{item}</li>)}</ul></div>
        </article>)}
      </div>
    </section>

    <section id="projects" className="section container">
      <SectionHeading eyebrow="SELECTED PROJECTS" title="Building, experimenting, learning." detail="A mix of applied research, scalable systems, computer vision, healthcare, and environmental projects." />
      <div className="project-grid">
        {projects.map((project, i) => <article key={project.slug} className={`project-card ${i === 0 ? 'project-featured' : ''}`}>
          <Link to={`/projects/${project.slug}`} className="project-art-link" aria-label={`Explore ${project.title}`}><ProjectArtwork project={project} /></Link>
          <div className="project-card-body"><div className="project-card-meta"><span>{project.eyebrow}</span><span>{project.period}</span></div>
            <div className="project-title-row"><h3><Link to={`/projects/${project.slug}`}>{project.title}</Link></h3><Link to={`/projects/${project.slug}`} className="circle-arrow" aria-label={`Read about ${project.title}`}><ArrowUpRight size={20} /></Link></div>
            <p>{project.summary}</p><div className="tag-row">{project.tags.slice(0, 4).map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
          </div>
        </article>)}
      </div>
    </section>

    <section className="section container analytics-section" id="analytics">
      <div className="analytics-panel"><div className="analytics-content"><div className="section-kicker">DATA VISUALIZATION</div>
        <h2>Turning data into decisions.</h2><p>Three interactive Power BI dashboards exploring hotel reservations, mobile sales, and retail performance — practical examples of communicating patterns and insights clearly.</p>
        <Link className="text-link" to="/dashboards">Explore dashboards <ArrowUpRight size={18} /></Link>
      </div>
      <div className="analytics-display" aria-hidden="true"><div className="display-toolbar"><span /><span /><span /></div><div className="dashboard-mock-top"><div /><div /><div /></div><div className="mock-chart"><div className="mock-y" /><div className="mock-bars">{[44,58,38,74,57,84,66,93,75,86].map((n,i) => <i key={i} style={{ height: `${n}%` }} />)}</div></div><div className="mock-row"><div /><div /></div><span className="analytics-count">0{dashboards.length} REPORTS</span></div>
      </div>
    </section>

    <section id="research" className="section container publication-section">
      <SectionHeading eyebrow="RESEARCH & PUBLICATION" title="Research driven by real problems." detail="Exploring how emerging technologies can make complex work faster, safer, and more accessible." />
      <a className="publication-card publication-card-refined" href={publication.url} target="_blank" rel="noreferrer">
        <div className="publication-icon"><BookOpen size={27} /></div>
        <div className="publication-main"><div className="pub-overline">IEEE XPLORE <span>·</span> 2021 <span>·</span> PEER-REVIEWED CONFERENCE</div><h3>{publication.title}</h3><p>{publication.description}</p><span className="pub-venue">{publication.venue}</span></div>
        <div className="publication-side"><div><strong>{publication.metric}</strong><span>{publication.metricLabel}</span></div><ArrowUpRight size={26} className="publication-arrow" /></div>
      </a>
    </section>

    <section id="about" className="section container about-section">
      <SectionHeading eyebrow="ABOUT ME" title="Equally curious about the 'why' and the 'how'." />
      <div className="about-lead"><div className="about-big"><span className="small-label">BEYOND THE JOB TITLE</span><h3>Technology is only useful when it solves the right problem.</h3></div>
        <div className="about-prose"><p>My work sits between understanding problems and building solutions. I've worked with product and engineering teams to turn requirements into reliable releases, and I've developed software and machine-learning systems from idea to implementation.</p><p>I enjoy working on both the technical details and the bigger picture. Sometimes that means developing a solution or working through a complex dataset; other times, it's understanding business requirements, collaborating with different teams, or finding a better way to approach a problem.</p><p>I'm particularly drawn to work that has a practical purpose, whether it's improving a product, simplifying a process, or addressing a challenge that matters beyond the technology itself.</p><div className="about-place"><MapPin size={17} /> Based in Hamburg, Germany</div></div>
      </div>
      <div className="about-bottom">
        <div className="education-block"><h3 className="block-heading">Education</h3>{education.map(e => <div className="education-item" key={e.degree}><div className="edu-period">{e.period}</div><h4>{e.degree}</h4><p>{e.school}</p><span>{e.detail}</span></div>)}<div className="language-block"><h3 className="block-heading">Languages</h3>{languages.map(l => <div key={l.name} className="language-item"><strong>{l.name}</strong><span>{l.level}</span></div>)}</div></div>
        <div className="skills-block"><h3 className="block-heading">Tools & expertise</h3><p className="skills-intro">An interdisciplinary toolkit — from aligning stakeholders and defining requirements to building and evaluating technical systems.</p>
          <div className="skills-groups">{skillGroups.map(group => <div className="skills-group" key={group.title}><h4>{group.title}</h4><p>{group.skills.join('  ·  ')}</p></div>)}</div></div>
      </div>
    </section>

    <section className="contact-section container" id="contact"><div className="contact-inner"><div className="eyebrow"><span className="signal" /> LET'S CONNECT</div><h2>Good projects start <span>with a conversation.</span></h2><p>Open to conversations about technical business analysis, project and product roles, software engineering, AI, and sustainability-focused work.</p>
      <div className="contact-actions"><a className="button button-primary" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> Connect on LinkedIn <ArrowUpRight size={17} /></a><a className="button button-outline" href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> Explore GitHub <ArrowRight size={17} /></a></div>
    </div></section>
  </>;
}
