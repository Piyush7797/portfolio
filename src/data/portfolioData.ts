import type { Project, Perspective, WorkflowStep, SkillCategory, Milestone } from '../types';

export const PERSONAL_DETAILS = {
  name: "Piyush Vishvakrma",
  role: "Data Science · Machine Learning · AI Engineering",
  location: "Indore, Madhya Pradesh, India",
  education: {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Malwa Institute of Science & Technology, Indore",
    university: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal",
    period: "2022–2026",
    status: "Graduating 2026"
  },
  github: "https://github.com/Piyush7797",
  linkedin: "https://www.linkedin.com/in/piyush-vishvakrma1115/",
  Instagram: "https://www.instagram.com/piy.ushh__/",
  email: "piyushvishvakrma7797@gmail.com",
  targetRoles: [
    "Data Analyst",
    "Data Scientist",
    "Machine Learning Engineer",
    "AI Engineer",
    "Generative AI Engineer"
  ],
  bioOpening: "I'm Piyush Vishvakrma, a Computer Science Engineering graduate exploring the intersection of data science, machine learning, and AI-powered applications."
};

export const PERSPECTIVES: Perspective[] = [
  {
    id: "analyze",
    label: "Analyze",
    headline: "Uncover patterns hidden in messy reality.",
    description: "Data without structure is noise. I approach datasets with statistical rigor—auditing distributions, cleaning anomalies, and querying relational structures to turn raw numbers into clear, actionable business intelligence.",
    visualTheme: "data-grid",
    bullets: [
      "Exploratory data analysis & statistical inference",
      "Relational querying & multi-table SQL aggregations",
      "Translating raw trends into actionable stakeholder decisions"
    ]
  },
  {
    id: "build",
    label: "Build",
    headline: "Engineer models that solve well-defined problems.",
    description: "Algorithms exist to create tangible utility. I train, tune, and evaluate machine learning models with disciplined validation, focusing on real-world reliability, interpretability, and lightweight deployment.",
    visualTheme: "neural-network",
    bullets: [
      "End-to-end scikit-learn pipelines & feature engineering",
      "Model serialization and serving via Streamlit & REST APIs",
      "Honest metric evaluation: precision, recall, ROC-AUC, and MAE"
    ]
  },
  {
    id: "explore",
    label: "Explore",
    headline: "Experiment with modern AI & emerging architectures.",
    description: "The AI landscape evolves at blistering speed. I actively test generative AI frameworks, modern LLM integration patterns, and interactive client-side computing to keep expanding what practical software can do.",
    visualTheme: "generative-mesh",
    bullets: [
      "Generative AI application workflows & prompt pipelines",
      "Interactive data visualizations with Chart.js & Recharts",
      "Continuous experimentation documented through open-source repos"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "greenshift-ai",
    number: "01",
    title: "GreenShift AI",
    tagline: "AI-Powered Carbon Footprint Tracker & Sustainability Intelligence",
    category: "ai",
    categoryLabel: "AI Applications",
    githubUrl: "https://github.com/Piyush7797/GreenShift-AI",
    problem: "Individuals and organizations lack accessible, transparent tools to accurately estimate their environmental impact across transport, energy, diet, and lifestyle habits without complex carbon accounting software.",
    approach: "Designed and developed a complete client-side sustainability web platform with a 5-step emission calculation engine, dynamic Chart.js breakdowns, Leaflet.js global emissions mapping, and an integrated EcoBot conversational assistant.",
    techStack: ["HTML5", "CSS3 / Glassmorphism", "Vanilla JavaScript", "Chart.js 4.4", "Leaflet.js", "LocalStorage"],
    features: [
      "5-Step granular carbon calculator covering Transport, Home Energy, Diet, Consumption & Flights",
      "Dynamic emission breakdown visualizations (Pie, Bar, Line charts)",
      "EcoBot AI environmental assistant supporting 16 ecological knowledge topics",
      "Interactive Leaflet global emission distribution map",
      "Client-side session persistence via LocalStorage with CSV export capability",
      "Real-time password security meter with 5 distinct entropy levels"
    ],
    outcome: "Self-contained final year engineering project operating entirely in the browser with zero server latency, verified across all 7 interactive views.",
    learnings: "Deepened practical understanding of emission factor formulas, modular client-side state architectures, and responsive data visualization without heavy UI libraries.",
    featuredMetric: {
      value: "5 Categories",
      label: "Granular emission calculation model"
    }
  },
  {
    id: "customer-behavior",
    number: "02",
    title: "Customer Shopping Behavior Analysis",
    tagline: "End-to-End Retail Intelligence & Customer Segmentation Workflow",
    category: "analytics",
    categoryLabel: "Data Analytics",
    githubUrl: "https://github.com/Piyush7797/Customer-Behavior-Data-Analyst-Portfolio--Project",
    problem: "Retailers frequently offer broad discounts without understanding which demographic segments, product lines, and shipping preferences actually maximize customer lifetime value and repeat purchase behavior.",
    approach: "Executed an end-to-end data analytics pipeline across 3,900 customer transaction records (18 features). Carried out exploratory data analysis in Python, authored business-critical queries in MySQL, and built structured reporting dashboards in Power BI.",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "MySQL", "Power BI", "Jupyter Notebook"],
    features: [
      "Data preprocessing: missing value imputation, type casting, and outlier inspection",
      "Demographic segmentation analyzing spend distributions across age brackets and genders",
      "SQL analysis evaluating revenue contribution, discount impact, and shipping choices",
      "Category performance breakdown revealing Clothing as the top revenue driver ($104K+)",
      "Subscription behavior analysis comparing subscriber basket sizes against non-subscribers",
      "Power BI multi-view visual dashboard for executive KPI tracking"
    ],
    outcome: "Identified high revenue concentration in Clothing ($104K+) and demonstrated that subscribers maintain higher transaction frequency even with fewer discounts.",
    learnings: "Mastered bridging Python exploratory workflows with relational MySQL business logic to extract strategic answers rather than just presenting raw numbers.",
    featuredMetric: {
      value: "3,900 Records",
      label: "18 Features cleaned and modeled"
    }
  },
  {
    id: "sql-music-analyzer",
    number: "03",
    title: "SQL Music Store Analyzer",
    tagline: "Relational Database Intelligence on Digital Music Commerce",
    category: "analytics",
    categoryLabel: "Data Analytics",
    githubUrl: "https://github.com/Piyush7797/Sql_music_analyser.",
    problem: "Digital music stores generate multifaceted transactions spanning tracks, invoices, customers, and genres that require structured relational queries to guide promotional decisions and regional catalog expansion.",
    approach: "Wrote structured SQL analytical query suites (Easy, Moderate, Advanced) against the Chinook relational music database schema to analyze customer lifetime value, billing geography, genre affinity, and artist popularity.",
    techStack: ["SQL (PostgreSQL / MySQL)", "Relational Schema Design", "Multi-table Joins", "Aggregations & Subqueries"],
    features: [
      "Senior employee hierarchy mapping using level-based recursive query logic",
      "Top billing country ranking to identify core regional revenue concentrations",
      "City-level invoice total aggregation to pinpoint optimal cities for promotional music events",
      "Customer lifetime spending calculation identifying top-tier VIP customers",
      "Multi-table JOIN queries extracting rock music listeners sorted by email index",
      "Top 10 rock band analysis ranking artists by track frequency and catalog depth"
    ],
    outcome: "Verified SQL query repository (`Music_Store_Query.sql`) covering 10+ business-critical analytical questions mapped directly to the database schema.",
    learnings: "Mastered writing performant multi-table JOINs, nested subqueries with set operators (`IN`, `EXISTS`), and aggregating metrics across complex relational schemas.",
    featuredMetric: {
      value: "Multi-Table Joins",
      label: "Complex relational business analytics"
    }
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: "understand",
    number: "01",
    title: "Understand",
    shortDesc: "Define the problem, specify the objective, and map the boundaries.",
    detail: "Every impactful technical solution begins with clear framing. Before touching a single line of code, I isolate the core business or research question: What metric are we optimizing? What decisions will this analysis drive? What are the constraints of the data collection process?",
    keyAction: "Framing the question & defining verifiable success criteria",
    deliverables: ["Problem statement", "Data source inventory", "Hypothesis list"]
  },
  {
    id: "explore",
    number: "02",
    title: "Explore",
    shortDesc: "Audit data health, treat anomalies, and uncover underlying distributions.",
    detail: "Real data is messy, incomplete, and full of edge cases. I inspect summary statistics, handle missing values through reasoned imputation, identify outliers, and visualize correlations to discover relationships before making modeling assumptions.",
    keyAction: "Deep EDA, data cleaning & feature engineering",
    deliverables: ["Cleaned dataset", "Distribution plots", "Correlation matrix"]
  },
  {
    id: "model",
    number: "03",
    title: "Model",
    shortDesc: "Select appropriate algorithms, establish baselines, and iterate.",
    detail: "Complexity is only justified when it delivers demonstrable improvement. I establish a simple, interpretable baseline first (such as logistic regression or summary aggregations), then systematically test feature transformations and model architectures.",
    keyAction: "Baseline benchmark & disciplined iterative training",
    deliverables: ["Benchmark metrics", "Trained model pipeline", "Feature importance"]
  },
  {
    id: "evaluate",
    number: "04",
    title: "Evaluate",
    shortDesc: "Validate against real-world metrics, inspect errors, and guard against leakage.",
    detail: "A high training accuracy often conceals overfitting or data leakage. I evaluate models using task-specific metrics (Precision, Recall, F1, ROC-AUC for classification; MAE/RMSE for regression), analyze false positives/negatives, and verify generalization.",
    keyAction: "Rigorous cross-validation & error slice analysis",
    deliverables: ["Confusion matrix", "Validation scores", "Error analysis notes"]
  },
  {
    id: "communicate",
    number: "05",
    title: "Communicate",
    shortDesc: "Translate technical outputs into dashboards, visual stories, or working apps.",
    detail: "A model or analysis that remains trapped in a Jupyter notebook provides zero value. I package findings into interactive dashboards, clear visual stories, or working web applications (Streamlit, Power BI, interactive web UI) that stakeholders can readily explore.",
    keyAction: "Visual storytelling & deployment into usable interfaces",
    deliverables: ["Interactive dashboard", "Executive summary", "Deployable web interface"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming-data",
    title: "Programming & Data",
    headline: "The foundational language of analytical computation.",
    description: "Writing maintainable, clean code to manipulate, transform, and aggregate complex datasets efficiently.",
    skills: [
      { name: "Python", level: "Core", practicalUse: "Data manipulation, statistical analysis, model development & automation scripts", relatedProject: "Customer Behavior Analysis" },
      { name: "SQL (MySQL / PostgreSQL)", level: "Core", practicalUse: "Multi-table relational queries, window functions, aggregations, and business metrics", relatedProject: "SQL Music Store Analyzer" },
      { name: "Pandas", level: "Core", practicalUse: "Dataframe transformations, time-series operations, merging, grouping & cleaning", relatedProject: "Customer Behavior Analysis" },
      { name: "NumPy", level: "Core", practicalUse: "Vectorized numerical computation, array operations & matrix mathematics", relatedProject: "Customer Behavior Analysis" },
      { name: "Statistics & Probability", level: "Applied", practicalUse: "Hypothesis testing, descriptive statistics, probability distributions & inference", relatedProject: "Customer Behavior Analysis" },
      { name: "Data Cleaning & Preprocessing", level: "Core", practicalUse: "Missing value imputation, outlier handling, categorical encoding & normalization", relatedProject: "Customer Behavior Analysis" }
    ]
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    headline: "Disciplined predictive modeling from data to evaluation.",
    description: "Developing supervised machine learning models with rigorous validation and transparent feature engineering.",
    skills: [
      { name: "Scikit-Learn", level: "Core", practicalUse: "Classification, regression, cross-validation, preprocessing pipelines & grid search", relatedProject: "Customer Behavior Analysis" },
      { name: "Regression Analysis", level: "Applied", practicalUse: "Linear, ridge & lasso modeling for continuous outcome prediction and trend estimation", relatedProject: "Bengaluru House Price" },
      { name: "Classification Algorithms", level: "Applied", practicalUse: "Logistic regression, decision trees, random forests for customer segmentation & classification", relatedProject: "Customer Behavior Analysis" },
      { name: "Model Evaluation Metrics", level: "Applied", practicalUse: "Confusion matrices, ROC-AUC, Precision-Recall curves, F1 score & RMSE", relatedProject: "Customer Behavior Analysis" },
      { name: "Feature Importance & Selection", level: "Applied", practicalUse: "Isolating key predictive signals and preventing collinearity and overfitting", relatedProject: "Customer Behavior Analysis" }
    ]
  },
  {
    id: "visualization-analytics",
    title: "Visualization & Analytics",
    headline: "Transforming numerical distributions into intuitive insight.",
    description: "Designing visual narratives that expose trends, comparisons, and outliers without visual clutter.",
    skills: [
      { name: "Power BI", level: "Applied", practicalUse: "Interactive multi-page dashboards, DAX measures, and visual retail reports", relatedProject: "Customer Behavior Analysis" },
      { name: "Matplotlib", level: "Core", practicalUse: "Publication-ready statistical plots, histograms, scatter matrices & subplots", relatedProject: "Customer Behavior Analysis" },
      { name: "Seaborn", level: "Core", practicalUse: "High-level statistical graphics, correlation heatmaps & violin/box distributions", relatedProject: "Customer Behavior Analysis" },
      { name: "Chart.js", level: "Applied", practicalUse: "Dynamic interactive client-side chart integration in modern web applications", relatedProject: "GreenShift AI" },
      { name: "Analytical Storytelling", level: "Applied", practicalUse: "Structuring data presentations with clear context, insight, and strategic takeaways", relatedProject: "Customer Behavior Analysis" }
    ]
  },
  {
    id: "ai-applications",
    title: "AI & Application Development",
    headline: "Connecting intelligence models to interactive interfaces.",
    description: "Building modern user experiences and lightweight web applications that make machine learning models usable.",
    skills: [
      { name: "Streamlit", level: "Applied", practicalUse: "Rapid deployment of interactive analytical applications and machine learning prototypes", relatedProject: "Customer Behavior Analysis" },
      { name: "HTML5 / CSS3 / JavaScript", level: "Core", practicalUse: "Frontend application development, responsive layouts & interactive web tools", relatedProject: "GreenShift AI" },
      { name: "Generative AI Fundamentals", level: "Exploring", practicalUse: "Prompt engineering, token mechanics, and LLM-powered assistant workflows", relatedProject: "GreenShift AI EcoBot" },
      { name: "REST APIs", level: "Applied", practicalUse: "Connecting client applications to inference endpoints and structured JSON data", relatedProject: "GreenShift AI" },
      { name: "NLP Fundamentals", level: "Exploring", practicalUse: "Text preprocessing, tokenization, bag-of-words & semantic embedding concepts", relatedProject: "Movie Recommendation" }
    ]
  },
  {
    id: "developer-tools",
    title: "Developer Tools & Environment",
    headline: "Modern tooling for reproducible, version-controlled work.",
    description: "Maintaining structured codebases, collaborative version control, and reproducible experimental notebooks.",
    skills: [
      { name: "Git & GitHub", level: "Core", practicalUse: "Version control, branching, repository management & open-source project sharing", relatedProject: "All Repositories" },
      { name: "Jupyter Notebook", level: "Core", practicalUse: "Interactive exploratory coding, data visualization & analytical documentation", relatedProject: "Customer Behavior Analysis" },
      { name: "VS Code", level: "Core", practicalUse: "Primary development environment for Python, web technologies, and SQL scripts", relatedProject: "All Repositories" },
      { name: "Leaflet.js", level: "Applied", practicalUse: "Interactive geospatial visualization and tiled open-source mapping", relatedProject: "GreenShift AI" }
    ]
  }
];

export const TIMELINE_MILESTONES: Milestone[] = [
  {
    year: "2022",
    title: "Began B.Tech in Computer Science Engineering",
    subtitle: "Malwa Institute of Science & Technology, Indore",
    institution: "Affiliated with Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal",
    location: "Indore, Madhya Pradesh, India",
    description: "Started the formal Computer Science Engineering curriculum. Built strong fundamentals in data structures, algorithms, object-oriented programming, and computer organization while cultivating a specific curiosity for statistical computing.",
    tags: ["Data Structures", "Algorithms", "C++", "Python Fundamentals", "Mathematics"]
  },
  {
    year: "2022 – 2026",
    title: "Hands-on Technical Projects & Applied Exploration",
    subtitle: "Data Analytics, Machine Learning & Web Applications",
    description: "Deepened applied competencies by developing practical, real-world projects. Analyzed customer transaction datasets in Python and MySQL, authored complex SQL database query suites, developed the GreenShift AI sustainability tracker, and structured reproducible repositories on GitHub.",
    tags: ["Customer Analytics", "GreenShift AI", "SQL Queries", "Power BI", "Data Modeling"]
  },
  {
    year: "2026",
    title: "B.Tech Graduation & Professional Next Chapter",
    subtitle: "Entry-Level Opportunities in Data Science & AI",
    location: "Indore, India / Open to Relocation & Remote",
    description: "Completing graduation with a solid portfolio of practical projects and verified code. Eager to contribute as an entry-level Data Analyst, Data Scientist, Machine Learning Developer, or AI Engineer in a forward-thinking engineering team.",
    tags: ["Graduation 2026", "Data Analyst", "Data Scientist", "ML Engineer", "AI Engineering"]
  }
];

export const CURIOSITY_ITEMS = [
  {
    id: "01",
    label: "Statistical Anomalies",
    headline: "Why distributions deviate from Gaussian ideals",
    description: "Real-world data is seldom normally distributed. Investigating skewed distributions and heavy tails reveals authentic user behavior."
  },
  {
    id: "02",
    label: "Model Interpretability",
    headline: "Black-box predictions vs understandable decisions",
    description: "An ML model is only as useful as the confidence it inspires in stakeholders. Feature importance and transparent baselines come first."
  },
  {
    id: "03",
    label: "Generative AI Systems",
    headline: "Augmenting analysis with language intelligence",
    description: "Exploring how LLMs and contextual retrieval can turn structured database outputs into automated executive briefings."
  },
  {
    id: "04",
    label: "Practical Sustainability",
    headline: "Data-driven climate and carbon accounting",
    description: "Designing algorithms that translate daily transport, energy, and consumption metrics into understandable personal carbon footprints."
  },
  {
    id: "05",
    label: "Open-Source Craft",
    headline: "Documenting code so others can reproduce and learn",
    description: "Clean READMEs, reproducible notebooks, and transparent repo structures make engineering verifiable and trustworthy."
  }
];

// Verified aggregate dataset from Customer Shopping Behavior Analysis (3,900 records, 18 features)
export const CUSTOMER_ANALYTICS_DATA = {
  kpis: {
    totalRevenue: "$233,081",
    totalCustomers: "3,900",
    avgTransaction: "$59.76",
    subscriptionRate: "27.0%",
    topCategory: "Clothing ($104.2K)",
    avgRating: "3.75 / 5.0"
  },
  categories: [
    { name: "Clothing", revenue: 104264, items: 1737, avgSpend: 60.02, rating: 3.72, share: 44.7 },
    { name: "Accessories", revenue: 74200, items: 1240, avgSpend: 59.84, rating: 3.76, share: 31.8 },
    { name: "Footwear", revenue: 36093, items: 599, avgSpend: 60.25, rating: 3.79, share: 15.5 },
    { name: "Outerwear", revenue: 18524, items: 324, avgSpend: 57.17, rating: 3.75, share: 8.0 }
  ],
  demographics: [
    { group: "18–25 (Young Adult)", count: 721, revenue: 43346, avgSpend: 60.12, percentage: 18.5 },
    { group: "26–35 (Early Career)", count: 1061, revenue: 63076, avgSpend: 59.45, percentage: 27.2 },
    { group: "36–50 (Prime Spender)", count: 1291, revenue: 77847, avgSpend: 60.30, percentage: 33.1 },
    { group: "51+ (Senior)", count: 827, revenue: 48712, avgSpend: 58.90, percentage: 21.2 }
  ],
  shippingMethods: [
    { method: "Free Shipping", count: 890, share: 22.8 },
    { method: "Standard", count: 827, share: 21.2 },
    { method: "Express", count: 722, share: 18.5 },
    { method: "Next Day Air", count: 632, share: 16.2 },
    { method: "Store Pickup", count: 449, share: 11.5 },
    { method: "2-Day Shipping", count: 380, share: 9.8 }
  ],
  subscriptionComparison: [
    { type: "Subscribed (Yes)", customers: 1053, avgSpend: 60.15, repeatRate: "84%", discountReliance: "Low" },
    { type: "Non-Subscribed (No)", customers: 2847, avgSpend: 59.62, repeatRate: "51%", discountReliance: "High" }
  ]
};

// GreenShift AI verified carbon calculation logic for the interactive emissions explorer
export const GREENSHIFT_FACTORS = {
  transport: {
    car: 0.21,      // kg CO2e per km
    bus: 0.08,      // kg CO2e per km
    train: 0.04,    // kg CO2e per km
    flight: 0.25    // kg CO2e per km
  },
  energy: {
    electricityKwh: 0.82 // kg CO2e per kWh (Indian grid mix avg)
  },
  diet: {
    meatLover: 7.2,   // kg CO2e per day
    average: 4.8,     // kg CO2e per day
    vegetarian: 3.2,  // kg CO2e per day
    vegan: 2.3        // kg CO2e per day
  }
};
