import { useState } from 'react';
import { ArrowLeft, ArrowUpRight, BarChart3, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { dashboards } from '../data/content';

export default function Dashboards() {
  const [active, setActive] = useState(dashboards[0].slug);
  const dashboard = dashboards.find(item => item.slug === active) ?? dashboards[0];
  return <div className="container inner-page dashboard-page">
    <Link to="/" className="back-link"><ArrowLeft size={17} /> Back to portfolio</Link>
    <div className="page-heading"><div className="eyebrow">DATA VISUALIZATION / POWER BI</div><h1>Interactive <span>dashboards.</span></h1><p>Explore three reports originally published in my earlier portfolio, now brought together in one gallery.</p></div>
    <div className="dashboard-switcher" role="tablist" aria-label="Select Power BI dashboard">
      {dashboards.map((item,i)=><button key={item.slug} type="button" role="tab" id={`tab-${item.slug}`} aria-selected={item.slug === active} aria-controls="dashboard-panel" onClick={() => setActive(item.slug)} className={`dashboard-tab ${active===item.slug ? 'selected' : ''}`}><span className="tab-number">0{i+1}</span><span>{item.title}</span><ArrowUpRight size={16}/></button>)}
    </div>
    <div className="dashboard-information"><div><span className="small-label">{dashboard.label.toUpperCase()}</span><h2>{dashboard.title}</h2><p>{dashboard.description}</p></div><a className="external-link" href={dashboard.src} target="_blank" rel="noreferrer">Open in Power BI <ExternalLink size={16}/></a></div>
    <div className="embed-container" id="dashboard-panel" role="tabpanel" aria-labelledby={`tab-${dashboard.slug}`}><iframe key={dashboard.slug} src={dashboard.src} title={`${dashboard.title} interactive Power BI dashboard`} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" /></div>
    <p className="embed-footnote"><BarChart3 size={16}/> Reports are hosted on Microsoft Power BI. If your browser blocks an embedded report, select “Open in Power BI” above.</p>
  </div>;
}
