import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function NotFound() { return <div className="container not-found"><div className="eyebrow">404 / NOT FOUND</div><h1>Wrong turn.</h1><p>That page doesn't seem to exist.</p><Link className="button button-primary" to="/"><ArrowLeft size={16}/> Back home</Link></div>; }
