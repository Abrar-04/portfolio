import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import ProjectArtwork from '../components/ProjectArtwork';
import { projects } from '../data/content';
import NotFound from './NotFound';

const hydraImage = (file: string) => `https://raw.githubusercontent.com/Abrar-04/HydraSeg/main/repo_images/${file}`;

type ResultCell = string | number | null;

type ResultTableProps = {
  title: string;
  columns: string[];
  rows: ResultCell[][];
  note?: string;
  groups?: { label: string; count: number }[];
};

/** Source data is transcribed from the HydraSeg README, not recomputed. */
function ResultTable({ title, columns, rows, note, groups }: ResultTableProps) {
  return <div className="result-table-block">
    <h4 className="result-table-title">{title}</h4>
    <div className="benchmark-scroll" role="region" aria-label={title} tabIndex={0}>
      <table className="benchmark-table">
        <thead>
          {groups && <tr className="benchmark-groups"><th scope="col" rowSpan={2}>Width (p)</th>{groups.map(g => <th key={g.label} scope="colgroup" colSpan={g.count}>{g.label}</th>)}</tr>}
          <tr>{(groups ? columns.slice(1) : columns).map((column, i) => <th scope="col" key={`${column}-${i}`}>{column}</th>)}</tr>
        </thead>
        <tbody>{rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell === null || cell === '' ? '—' : cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
    {note && <p className="evidence-footnote">{note}</p>}
  </div>;
}

function HydraFigure({ file, alt, caption, size = 'medium' }: { file: string; alt: string; caption: string; size?: 'small' | 'medium' | 'wide' }) {
  return <figure className={`evidence-figure evidence-figure-${size}`}>
    <img src={hydraImage(file)} alt={alt} loading="lazy" decoding="async" />
    <figcaption>{caption}</figcaption>
  </figure>;
}

function HydraResults() {
  return <section className="project-evidence" id="hydraseg-results">
    <div className="small-label">PROJECT RESULTS & VISUALS</div>
    <h2>Architecture, experiments & inference.</h2>
    <p>HydraSeg was trained and evaluated using the publicly available <a href="https://ade20k.csail.mit.edu/" target="_blank" rel="noreferrer" className="inline-evidence-link">ADE20K semantic segmentation dataset</a>. The research compares scalable transformer widths using segmentation accuracy (mIoU), computational complexity, and runtime on different hardware. The figures and tables below reproduce the results reported in the project README.</p>

    <div className="result-section">
      <div className="small-label benchmark-label">01 / ARCHITECTURE</div>
      <h3 className="evidence-subtitle">One framework, adjustable compute.</h3>
      <HydraFigure file="HydraSegArchitecture.png" alt="Figure 1: HydraSeg architecture" caption="Figure 1 · HydraSeg architecture" size="medium" />
      <div className="evidence-twins">
        <HydraFigure file="HydraVitEncoder.png" alt="Figure 2: HydraViT encoder design" caption="Figure 2 · HydraViT encoder" size="small" />
        <HydraFigure file="pMaskTransformerDecoder.png" alt="Figure 3: p-aware mask transformer decoder" caption="Figure 3 · p-aware mask transformer decoder" size="small" />
      </div>
    </div>

    <div className="result-section">
      <div className="small-label benchmark-label">02 / SEMANTIC SEGMENTATION ACCURACY</div>
      <h3 className="evidence-subtitle">ADE20K at 224 × 224.</h3>
      <p className="evidence-explainer">Validation mean IoU (%) for different active widths and training configurations, with DeiT baseline entries.</p>
      <ResultTable title="ADE20K (224 × 224) · validation mIoU (%)" columns={['Width (p)', 'Multi-p 90', 'Multi-p 120', 'Multi-p 200', 'Single 192', 'Single 384', 'Single 576', 'Single 768', 'DeiT 192', 'DeiT 384', 'DeiT 768']} groups={[{label:'HydraViT — pretrained',count:7},{label:'DeiT — baseline',count:3}]} rows={[
        ['768','37.540','38.300','38.050',null,null,null,'37.680',null,null,'39.840'],
        ['576','37.530','38.250','38.260',null,null,'37.650',null,null,null],
        ['384','36.310','37.260','37.670',null,'37.370',null,null,null,'37.670',null],
        ['192','30.980','31.200','32.280','31.390',null,null,null,'30.990',null,null],
      ]} note="Multi-p columns indicate 90, 120, and 200 training epochs; single-width/DeiT baselines are reported at 64 epochs. — denotes values not reported in the README." />
      <HydraFigure file="new_hydraSeg_vs_deit_224.png" alt="Figure 4: HydraSeg and DeiT validation mIoU at 224x224" caption="Figure 4 · HydraSeg vs DeiT at 224 × 224" />
    </div>

    <div className="result-section">
      <h3 className="evidence-subtitle">ADE20K at 512 × 512.</h3>
      <p className="evidence-explainer">Validation mean IoU (%) at a higher input resolution across HydraViT width settings.</p>
      <ResultTable title="ADE20K (512 × 512) · validation mIoU (%)" columns={['Width (p)', 'Multi-p 90', 'Multi-p 120', 'Multi-p 200', 'Single 192', 'Single 384', 'Single 576', 'Single 768']} groups={[{label:'HydraViT — pretrained',count:7}]} rows={[
        ['768','43.220','43.280','44.250',null,null,null,'43.920'],
        ['576','43.230','43.610','44.800',null,null,'43.990',null],
        ['384','42.770','42.610','43.700',null,'42.910',null,null],
        ['192','36.540','36.540','38.160','36.200',null,null,null],
      ]} note="Training-epoch conventions follow the project README. Blank experiment combinations are intentionally shown as —." />
      <HydraFigure file="new_512hydraSeg_vs_deit.png" alt="Figure 5: HydraSeg ADE20K validation mIoU at 512x512" caption="Figure 5 · HydraSeg comparison at 512 × 512" />
    </div>

    <div className="result-section">
      <div className="small-label benchmark-label">03 / EFFICIENCY</div>
      <h3 className="evidence-subtitle">Computational complexity & runtime.</h3>
      <ResultTable title="Computational complexity comparison" columns={['Configuration', 'Segmenter params (M)', 'Segmenter GMACs', 'Segmenter GFLOPs', 'HydraSeg params (M)', 'HydraSeg GMACs', 'HydraSeg GFLOPs']} rows={[
        ['Tiny · p=192','6.9064','12.6411','25.3249','102.6129','12.6411','25.3249'],
        ['Small · p=384','26.4190','38.4039','76.8922','102.6129','38.4039','76.8922'],
        ['Medium · p=576',null,null,null,'102.6129','77.2883','154.7028'],
        ['Base · p=768','103.2666','129.2945','258.7567','102.6129','129.2945','258.7567'],
      ]} note="The model's stored parameter count is reported separately from active computation, which varies by width." />
      <ResultTable title="Runtime performance" columns={['Width (p)', 'Forward latency (ms)', 'Throughput (images/s)']} rows={[
        ['768','48.570','20.590'],['576','36.980','27.040'],['384','28.610','34.950'],['192','29.270','34.170'],
      ]} note="Forward-pass latency and throughput as reported in the project README." />
      <HydraFigure file="final_hydraseg_side_by_side_tradeoff_reversed.png" alt="Figure 6: HydraSeg complexity–accuracy and runtime–accuracy trade-offs" caption="Figure 6 · Complexity–accuracy and runtime–accuracy trade-offs" size="wide" />
    </div>

    <div className="result-section">
      <div className="small-label benchmark-label">04 / IMAGE INFERENCE</div>
      <h3 className="evidence-subtitle">Inference across hardware.</h3>
      <HydraFigure file="img1_768.jpg" alt="Figure 7: Semantic segmentation output for an indoor image" caption="Figure 7 · Image inference at active width p = 768" size="medium" />
      <ResultTable title="Image inference runtime comparison" columns={['Width (p)','CUDA inference (s)','CUDA total (s)','MPS inference (s)','MPS total (s)','CPU inference (s)','CPU total (s)']} groups={undefined} rows={[
        ['768','0.256','0.33','1.909','2.60','3.638','3.81'],
        ['576','0.231','0.32','1.316','2.00','2.941','3.11'],
        ['384','0.227','0.32','0.897','1.50','1.910','2.13'],
        ['192','0.195','0.26','0.551','1.11','1.162','1.38'],
      ]} note="Total time includes overhead beyond model inference. Times are in seconds, as reported in the README." />
    </div>

    <div className="result-section">
      <div className="small-label benchmark-label">05 / VIDEO INFERENCE</div>
      <h3 className="evidence-subtitle">Segmentation on video frames.</h3>
      <HydraFigure file="out3.gif" alt="Figure 8: Animated video inference showing semantic segmentation of frames" caption="Figure 8 · Video inference demonstration (out3.gif)" size="medium" />
      <ResultTable title="Video inference performance" columns={['Width (p)','CUDA total (s)','CUDA FPS','CUDA s/frame','CUDA realtime','MPS total (s)','MPS FPS','MPS s/frame','MPS realtime']} groups={[{label:'CUDA GPU',count:4},{label:'Apple MPS',count:4}]} rows={[
        ['768','19.09','18.55','0.054','0.52×','471.59','0.82','1.216','0.02×'],
        ['576','15.06','24.61','0.041','0.66×','284.75','1.49','0.673','0.04×'],
        ['384','11.94','33.19','0.030','0.84×','177.10','2.78','0.360','0.06×'],
        ['192','10.61','38.80','0.026','0.94×','123.59','6.14','0.163','0.08×'],
      ]} note="CUDA GPU and Apple MPS video inference results from the repository. Realtime factors are relative to the video's playback rate." />
    </div>
    <p className="result-source">All figures and numbers: <a href="https://github.com/Abrar-04/HydraSeg/blob/main/README.md" target="_blank" rel="noreferrer">HydraSeg project README ↗</a>. Command-line instructions are intentionally omitted.</p>
  </section>;
}

function RadiationArchitecture() {
  return <section className="radiation-architecture"><div className="small-label">SYSTEM ARCHITECTURE</div><h2>From raw readings to an interactive map.</h2><p>Rather than a complex flowchart, here's the core data flow from the team project.</p>
    <div className="architecture-list">
      {[
        ['01', 'Ingestion', 'Safecast readings are streamed by a Python producer into Kafka topics.'],
        ['02', 'Stream processing', 'Apache Flink performs validation, enrichment, CPM aggregation and threshold-based alerting.'],
        ['03', 'Application services', 'A Node.js API makes processed events available for the visualization layer.'],
        ['04', 'Monitoring interface', 'A Leaflet web map visualizes readings and supports live monitoring.'],
        ['05', 'Deployment', 'Docker Compose brings the services together; the project was deployed on Google Compute Engine.'],
      ].map(([n,title,detail]) => <div className="architecture-row" key={n}><span>{n}</span><strong>{title}</strong><p>{detail}</p></div>)}
    </div>
    <div className="radiation-facts"><div><strong>29 GB</strong><span>Safecast dataset processed</span></div><div><strong>Kafka + Flink</strong><span>Stream ingestion & processing</span></div><div><strong>GCP</strong><span>Cloud deployment</span></div></div>
    <p className="evidence-footnote">Collaborative Big Data Lab project at TUHH. Abrar is listed as team coordinator in the repository. See the repository for complete implementation and deployment details.</p>
  </section>;
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(x => x.slug === slug);
  if (!project) return <NotFound />;
  const others = projects.filter(x => x.slug !== project.slug).slice(0, 2);
  const enriched = slug === 'hydraseg' || slug === 'radiation-tracking';
  return <div className="inner-page project-detail container">
    <Link to="/#projects" className="back-link"><ArrowLeft size={17} /> All projects</Link>
    <div className="project-detail-header"><div className="eyebrow">{project.eyebrow}</div><h1>{project.title}<span className="heading-period">{project.period}</span></h1><p>{project.summary}</p><div className="detail-meta"><span className={`project-status ${project.status === 'In progress' ? 'progress' : ''}`}><i />{project.status}</span><span>{project.category}</span>{project.github && <a href={project.github} target="_blank" rel="noreferrer">View repository <Github size={16} /><ArrowUpRight size={14} /></a>}</div></div>
    <div className="detail-art"><ProjectArtwork project={project} /></div>
    <div className="detail-layout"><aside className="detail-sidebar"><span className="small-label">STACK & METHODS</span><div className="detail-tags">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><span className="small-label detail-sidebar-label">PROJECT STATUS</span><div>{project.status}</div></aside>
      <div className="detail-copy"><section><div className="small-label">OVERVIEW</div><h2>What it's about.</h2><p>{project.introduction}</p></section><section><div className="small-label">THE CHALLENGE</div><h2>Why build it?</h2><p>{project.problem}</p></section>
      <section><div className="small-label">APPROACH</div><h2>How it works.</h2><p>{project.approach}</p>{!enriched && <div className="process-inline">{project.pipeline.map((step, i) => <div key={step}><span>{String(i+1).padStart(2, '0')}</span><strong>{step}</strong></div>)}</div>}</section>
        {slug === 'radiation-tracking' && <RadiationArchitecture />}
      <section><div className="small-label">ENGINEERING & DELIVERY</div><h2>What I worked on.</h2><ul className="detail-bullets">{project.highlights.map(item => <li key={item}>{item}</li>)}</ul></section>
      <section><div className="small-label">OUTCOME</div><h2>Where it stands.</h2><p>{project.outcome}</p>{project.caution && <div className="research-note">{project.caution}</div>}</section></div>
    </div>
    {slug === 'hydraseg' && <HydraResults />}
    <div className="other-projects"><div className="other-title"><h2>Explore more work</h2><Link to="/#projects">View all <ArrowUpRight size={15} /></Link></div><div className="other-grid">{others.map(item => <Link to={`/projects/${item.slug}`} className="other-card" key={item.slug}><span>{item.category}</span><strong>{item.title}</strong><ArrowUpRight size={20} /></Link>)}</div></div>
  </div>;
}
