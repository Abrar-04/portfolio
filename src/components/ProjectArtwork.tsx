import type { Project } from '../data/content';

export default function ProjectArtwork({ project, small = false }: { project: Project; small?: boolean }) {
  return <div className={`project-art art-${project.art} ${small ? 'project-art-small' : ''}`} aria-hidden="true">
    <div className="art-grain" />
    {project.art === 'research' && <svg className="art-svg research-graphic" viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M96 160 184 96 285 163 404 83 515 170M96 160 204 257 285 163 398 266 515 170M184 96 398 266M204 257 404 83" stroke="currentColor" strokeOpacity=".22" strokeWidth="1.4" />
      {[[96,160],[184,96],[285,163],[404,83],[515,170],[204,257],[398,266]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r={i===2?20:10} fill="#111718" stroke="currentColor" strokeWidth="1.5"/><circle cx={x} cy={y} r="3" fill="currentColor"/></g>)}
      <rect x="237" y="129" width="96" height="68" rx="10" fill="#b6e4cb"/><path d="M258 152h53M258 165h40M258 178h29" stroke="#315548" strokeWidth="3" strokeLinecap="round"/>
    </svg>}
    {project.art === 'segmentation' && <div className="seg-stage">
      <div className="seg-grid">{Array.from({length: 60},(_,i) => <span key={i} className={`seg-pixel pixel-${(i*13+Math.floor(i/9)*5)%7}`} />)}</div>
      <div className="seg-stamp">mIoU <span>↗</span></div>
    </div>}
    {project.art === 'radiation' && <svg className="art-svg radiation-graphic" viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[80,130,180,230,280].map(y => <path key={y} d={`M35 ${y}H565`} stroke="currentColor" strokeOpacity=".09" />)}
      {[80,160,240,320,400,480,560].map(x => <path key={x} d={`M${x} 52V302`} stroke="currentColor" strokeOpacity=".09" />)}
      <path d="M36 241 82 240 115 236 160 244 197 191 237 228 266 230 292 138 318 209 355 223 400 220 431 84 458 174 484 180 508 149 563 173" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round"/>
      <circle cx="431" cy="84" r="9" fill="#ffd29b"/><circle cx="431" cy="84" r="19" stroke="#ffd29b" strokeOpacity=".5"/>
      <path d="M36 241 82 240 115 236 160 244 197 191 237 228 266 230 292 138 318 209 355 223 400 220 431 84 458 174 484 180 508 149 563 173V304H36Z" fill="currentColor" fillOpacity=".05"/>
    </svg>}
    {project.art === 'medical' && <div className="medical-graphic"><div className="medical-target"><div className="medical-target-in"><span>+</span></div></div><div className="medical-side-lines"><span/><span/><span/><span/></div></div>}
    {project.art === 'environment' && <div className="environment-graphic"><div className="leaf leaf-left"/><div className="leaf leaf-right"/><div className="env-stem"/><div className="env-base"/></div>}
    <div className="art-corner-label">{project.category.toUpperCase()} / {project.period.split('—')[0].trim()}</div>
    <div className="art-index">↗</div>
  </div>;
}
