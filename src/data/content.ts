// Edit portfolio content here. UI pages read from these typed collections.
export const profile = {
  name: 'Mahboob Abrar Ali Syed',
  shortName: 'Abrar',
  location: 'Hamburg, Germany',
  headline: 'Bridging technology, data, and real-world impact.',
  subtitle: 'Technical business analyst and data science master’s student combining product thinking, project delivery, software engineering, and applied AI — with a particular interest in sustainability.',
  github: 'https://github.com/Abrar-04',
  // Set these when ready. Empty values are deliberately hidden in the UI.
  linkedin: 'https://www.linkedin.com/in/syed-abrar-ali/',
  email: '',
  resumeUrl: '',
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  tags: string[];
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: 'Technical Business Analyst',
    company: 'ABOUT YOU',
    location: 'Hamburg, Germany',
    period: 'Jul 2025 — Present',
    tags: ['Product & Engineering', 'API Validation', 'Looker Studio'],
    highlights: [
      'Coordinate e-commerce data and system changes from requirements gathering and process analysis to user stories, testing, release validation, and implementation with Product and Engineering teams.',
      'Analyze operational processes and production issues across integrations, internal platforms, and backend services, contributing to a 25% reduction in average resolution time.',
      'Design test cases and validate data flows, new features, integrations, logs, and API payloads, contributing to a 20% reduction in post-release issues.',
      'Build KPI dashboards and performance reports in Looker Studio to identify recurring patterns and support data-driven prioritization.',
    ],
  },
  {
    role: 'Salesforce Engineer',
    company: 'Deloitte Consulting',
    location: 'Hyderabad, India',
    period: 'Jan 2023 — Sep 2024',
    tags: ['Apex & LWC', 'REST APIs', 'Automation'],
    highlights: [
      'Developed workflow and data-processing automations using Apex, Salesforce Flows, and REST APIs, reducing manual processing effort by 30%.',
      'Migrated legacy Aura components to Lightning Web Components, improving UI performance and reducing component load times by 25%.',
      'Supported delivery from requirements and implementation through testing, UAT, deployment, production releases, and troubleshooting.',
      'Worked with clients and engineering teams to translate business and data requirements into configurations, validation rules, integrations, and application enhancements.',
    ],
  },
  {
    role: 'Machine Learning Engineer',
    company: 'Freelance',
    location: 'Remote',
    period: 'Aug 2022 — Dec 2022',
    tags: ['Computer Vision', 'YOLOv5', 'TensorFlow'],
    highlights: [
      'Developed an image-based AI pipeline to detect and segment individuals in group photographs and estimate age and gender with deep learning models.',
      'Trained and fine-tuned YOLOv5 for clothing detection and classification across topwear, bottomwear, and footwear, alongside background segmentation for improved recognition.',
      'Extracted dominant clothing colors and generated TensorFlow feature embeddings for similarity-based fashion recommendations.',
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  period: string;
  status: 'In progress' | 'Completed';
  category: string;
  art: 'research' | 'segmentation' | 'radiation' | 'medical' | 'environment';
  summary: string;
  introduction: string;
  problem: string;
  approach: string;
  highlights: string[];
  pipeline: string[];
  outcome: string;
  tags: string[];
  github?: string;
  caution?: string;
};

export const projects: Project[] = [
  {
    slug: 'research-patent-intelligence',
    title: 'Research-to-Patent Intelligence',
    eyebrow: 'MASTER’S THESIS · APPLIED AI',
    period: 'Sep 2026 — Present',
    status: 'In progress',
    category: 'Research / NLP',
    art: 'research',
    summary: 'Exploring how scientific research moves into technological innovation through links between circular-economy papers and patents.',
    introduction: 'An applied research project studying knowledge transfer from scientific publications to patented technological inventions in the circular economy.',
    problem: 'Paper and patent collections are large, heterogeneous, and difficult to connect. Shared terminology alone may not establish a meaningful research-to-innovation relationship.',
    approach: 'Building and evaluating a retrieval-oriented proof of concept, beginning with lexical baselines and exploring semantic representations, ranking strategies, and evidence-aware review.',
    highlights: [
      'Work with scientific literature and publicly available patent metadata to investigate candidate paper–patent relationships.',
      'Develop TF-IDF baselines and explore Transformer-based embeddings, semantic search, and LLM-supported reranking as extensions.',
      'Explore a LangChain-based orchestration workflow for retrieval, evidence checks, synthesis, and human review of uncertain matches.',
    ],
    pipeline: ['Science & patent data', 'Lexical / semantic retrieval', 'Candidate ranking', 'Evidence review'],
    outcome: 'Ongoing research. Evaluation criteria, retrieval architecture, and final methodology are being refined; no final performance claims are made yet.',
    tags: ['Python', 'TF-IDF', 'Transformers', 'LLMs', 'LangChain', 'Information Retrieval'],
    caution: 'Research in progress: some methods shown here are proposed or being evaluated, not completed production components.',
  },
  {
    slug: 'hydraseg',
    title: 'HydraSeg',
    eyebrow: 'MASTER’S RESEARCH PROJECT · COMPUTER VISION',
    period: 'Oct 2025 — Mar 2026',
    status: 'Completed',
    category: 'Deep Learning',
    art: 'segmentation',
    summary: 'A scalable semantic segmentation framework exploring Vision Transformers and inference-time efficiency tradeoffs.',
    introduction: 'HydraSeg investigates how semantic segmentation systems can be evaluated across different model capacities and compute environments.',
    problem: 'High-quality segmentation can be expensive to run. Real-world applications require understanding the tradeoffs between prediction quality, latency, and available hardware.',
    approach: 'Developed a framework around Vision Transformer-based segmentation, with repeatable training, evaluation, and comparison of model configurations.',
    highlights: [
      'Designed a segmentation workflow supporting dynamic model scaling at inference time.',
      'Built end-to-end training and evaluation routines to compare models on CPU and GPU environments.',
      'Benchmarked configurations using mean Intersection over Union (mIoU), inference latency, and resource utilization.',
    ],
    pipeline: ['Available ADE20K dataset', 'Scalable HydraViT encoder & mask decoder', 'Multi-width evaluation', 'Hardware & accuracy trade-offs'],
    outcome: 'The repository documents experiments on ADE20K, including multi-width mIoU results, model-compute comparisons, latency and throughput measurements, and inference examples. See the benchmark tables and figures below for reported values.',
    tags: ['PyTorch', 'Vision Transformers', 'Semantic Segmentation', 'Evaluation'],
    github: 'https://github.com/Abrar-04/HydraSeg',
  },
  {
    slug: 'radiation-tracking',
    title: 'Real-time Radiation Tracking',
    eyebrow: 'DATA ENGINEERING · STREAM PROCESSING',
    period: 'Dec 2024 — Feb 2025',
    status: 'Completed',
    category: 'Data Engineering',
    art: 'radiation',
    summary: 'A Kafka–Flink streaming system for monitoring radiation measurements and surfacing live anomalies.',
    introduction: 'A real-time processing application for ingesting, transforming, and monitoring Safecast radiation measurements at scale.',
    problem: 'Radiation measurement feeds require continuous ingestion and processing to keep monitoring views timely and identify abnormal readings.',
    approach: 'Built a containerized pipeline using Kafka for event ingestion, Apache Flink for distributed stream processing, and Server-Sent Events for pushing updates to a web interface.',
    highlights: [
      'Processed approximately 29 GB of Safecast radiation data with Kafka and Flink, including counts-per-minute updates and anomaly detection.',
      'Helped build containerized processing and application services for live updates and threshold-based radiation alerts.',
      'Worked on the Google Cloud deployment and integration of ingestion, Flink processing, an API layer, and a Leaflet-based visualization.',
    ],
    pipeline: ['Safecast readings', 'Kafka event streams', 'Flink enrichment & alerts', 'Node.js API & live updates', 'Leaflet monitoring map'],
    outcome: 'Built a cloud-deployed, Docker-based monitoring prototype as part of a team project, combining stream processing, configurable alerts, and a geographic visualization of radiation measurements.',
    tags: ['Apache Kafka', 'Apache Flink', 'Docker', 'GCP', 'Python', 'Server-Sent Events'],
    github: 'https://github.com/Abrar-04/radiationTracking',
  },
  {
    slug: 'dr-detect',
    title: 'Dr.Detect',
    eyebrow: 'APPLIED AI · HEALTHCARE',
    period: 'Oct 2022',
    status: 'Completed',
    category: 'Computer Vision',
    art: 'medical',
    summary: 'An experimental medical-image analysis web application using segmentation and classification models.',
    introduction: 'A proof-of-concept application investigating how computer vision could assist with interpreting medical images and reports.',
    problem: 'Medical-image assessment requires specialist knowledge and can be difficult to access consistently. The project explored assistive analysis workflows for six medical conditions.',
    approach: 'Collected and prepared medical imaging data, experimented with architectures including U-Net and DenseNet, and built a web application deployed to Azure.',
    highlights: [
      'Designed a web-based application for classifying and identifying abnormalities across six medical conditions.',
      'Performed data preparation and feature engineering, and trained models using U-Net and DenseNet-based approaches.',
      'Deployed the application to Azure and gathered user feedback through surveys to refine the experience.',
    ],
    pipeline: ['Medical-image data', 'Data preprocessing', 'Model inference', 'Application interface'],
    outcome: 'Built and deployed a research prototype demonstrating a medical-image analysis workflow.',
    tags: ['Deep Learning', 'Object Detection', 'Healthcare', 'Azure', 'Web Application'],
    github: 'https://github.com/Abrar-04/dr_detect',
    caution: 'Academic / experimental project only. Not a clinically validated diagnostic tool or a substitute for medical professionals.',
  },
  {
    slug: 'swachh-companion',
    title: 'Swachh-Companion',
    eyebrow: 'MOBILE DEVELOPMENT · SUSTAINABILITY',
    period: 'Aug 2021',
    status: 'Completed',
    category: 'Mobile AI',
    art: 'environment',
    summary: 'A mobile app for image-based waste segregation and community volunteering.',
    introduction: 'A mobile application combining on-device image classification with community-oriented environmental features.',
    problem: 'Everyday waste sorting can be confusing, and opportunities to volunteer with local environmental initiatives are not always easy to discover.',
    approach: 'Trained and optimized a MobileNet image classifier, deployed inference through TensorFlow Lite, and included a feature connecting prospective volunteers with NGOs.',
    highlights: [
      'Developed an application to distinguish biodegradable and non-biodegradable waste from images.',
      'Prepared image data and optimized a MobileNet classifier for faster on-device inference with TensorFlow Lite.',
      'Included a volunteer-discovery feature aimed at supporting NGO-led clean-up and recycling initiatives.',
    ],
    pipeline: ['Camera / image input', 'MobileNet inference', 'Waste category', 'Mobile experience'],
    outcome: 'Produced a mobile waste-classification prototype with an additional community-engagement feature.',
    tags: ['Waste Classification', 'Flutter', 'TensorFlow Lite', 'Volunteering'],
    github: 'https://github.com/Abrar-04/Swachh-Companion',
  },
];

export type Dashboard = { slug: string; title: string; label: string; description: string; src: string };
export const dashboards: Dashboard[] = [
  {
    slug: 'hotel',
    title: 'Hotel Reservation',
    label: 'Hospitality analytics',
    description: 'An interactive Power BI report exploring hotel reservation data.',
    src: 'https://app.powerbi.com/view?r=eyJrIjoiZWQyNTIwODgtNWU0YS00ZTFmLTgyNWItYWQ1NjJhNmMwMmNiIiwidCI6Ijg5OTI4NDk3LTY5NjMtNDk5Yi04YjQ3LTE3Mzg2ZGIxNjVkMyJ9',
  },
  {
    slug: 'mobile',
    title: 'Mobile Sales',
    label: 'Sales analytics',
    description: 'A Power BI report presenting mobile sales patterns and metrics.',
    src: 'https://app.powerbi.com/view?r=eyJrIjoiMDFiNDQzYTMtNDhlNS00NzIxLTlkZWYtNzk3ZWRjOTlhNWVlIiwidCI6Ijg5OTI4NDk3LTY5NjMtNDk5Yi04YjQ3LTE3Mzg2ZGIxNjVkMyJ9',
  },
  {
    slug: 'superstore',
    title: 'SuperStore',
    label: 'Retail analytics',
    description: 'An interactive report exploring retail sales and operational performance.',
    src: 'https://app.powerbi.com/view?r=eyJrIjoiNGNmYjlmYmEtNzIzNy00ZjMxLTllOWMtNmU4OTY5ODExMjYzIiwidCI6Ijg5OTI4NDk3LTY5NjMtNDk5Yi04YjQ3LTE3Mzg2ZGIxNjVkMyJ9',
  },
];

export const publication = {
  title: 'Early Detection of Malpositioned Catheters and Lines on Chest X-Rays using Deep Learning',
  venue: 'International Conference on Artificial Intelligence and Computer Science Technology, Indonesia · 2021',
  period: 'Mar 2021 — Jun 2021',
  description: 'Explored automated detection of misplaced catheters and lines in chest X-rays, a time-sensitive clinical imaging problem. Our transfer-learning CNN approach, inspired by U-Net and EfficientNet, achieved 0.972 AUC on the RANZCR CLiP Kaggle challenge. The work focused on efficient recognition that could help surface potential complications for clinical review.',
  metric: '0.972',
  metricLabel: 'AUC · RANZCR CLiP challenge',
  url: 'https://ieeexplore.ieee.org/abstract/document/9497809',
};

export const education = [
  { degree: 'M.Sc. Data Science', school: 'Hamburg University of Technology (TUHH)', period: '2024 — Present', detail: 'Expected Jun 2027 · Hamburg, Germany' },
  { degree: 'B.E. Computer Science Engineering', school: 'Osmania University', period: '2018 — 2022', detail: 'Hyderabad, India' },
];

export const skillGroups = [
  { title: 'Product, projects & delivery', skills: ['Technical Business Analysis', 'Requirements & User Stories', 'Stakeholder Management', 'Product & Engineering Collaboration', 'Agile / Scrum', 'UAT & Release Validation', 'Process Improvement', 'Root Cause Analysis', 'Jira', 'Confluence'] },
  { title: 'Programming & software engineering', skills: ['Python', 'SQL', 'Java', 'JavaScript', 'HTML / CSS', 'R', 'REST APIs', 'FastAPI', 'Django', 'Flask', 'React (basic)', 'Flutter (basic)', 'Testing & Debugging'] },
  { title: 'AI, machine learning & research', skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Transformers', 'LLM APIs', 'LangChain', 'Computer Vision', 'YOLOv5', 'Model Evaluation', 'Information Retrieval', 'Pandas', 'NumPy'] },
  { title: 'Data, analytics & visualization', skills: ['Power BI', 'Tableau', 'Looker Studio', 'Excel', 'KPI Analysis', 'A/B Testing', 'Log & Payload Analysis', 'Apache Kafka', 'Apache Flink', 'BigQuery', 'PostgreSQL', 'Streamlit', 'Gradio'] },
  { title: 'Platforms & developer workflow', skills: ['GCP', 'Azure', 'Docker', 'Git', 'Linux', 'CI/CD', 'Code Reviews', 'Salesforce Apex', 'Lightning Web Components', 'Salesforce Flows', 'Server-Sent Events'] },
];

export const languages = [
  { name: 'English', level: 'C2' },
  { name: 'German', level: 'A2 · B1 in progress' },
];
