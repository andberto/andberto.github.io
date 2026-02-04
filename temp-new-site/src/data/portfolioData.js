export const personalInfo = {
  name: "Andrea Bertogalli",
  title: "Computer Engineering Student",
  email: "andrea.bertogalli@outlook.com",
  birthday: "July 30, 2000",
  locations: ["Parma, Italy", "Milan, Italy"],
  linkedin: "https://www.linkedin.com/in/andrea-bertogalli-509383175",
  github: "https://github.com/andberto",
  avatar: "/images/myavatar.jpg"
};

export const aboutText = [
  "I was born in Parma, Italy in July 30th 2000. In 2014, with the start of high school, I chose to start studying computer science. In 2019 I started my university studies at \"Università degli studi di Parma\" in the course \"Ingegneria Informatica, Elettronica e delle Telecomunicazioni\". I got my Bachelor's Degree in October 2022 and currently i'm studying for my Master's Degree at \"Politecnico di Milano\" in the course \"Computer Science and Engineering\" in Milan, Italy.",
  "My plan is to graduate within the next two years and then work for an IT company. I am currently focusing my studies in the area of artificial intelligence and data science. My intent is to specialize more and more in this area."
];

export const services = [
  {
    title: "Artificial Intelligence",
    description: "I'm currently focusing on studying in the AI field.",
    icon: "ai"
  },
  {
    title: "Software Development",
    description: "As a computer scientist, I'm always developing code.",
    icon: "code"
  },
  {
    title: "Engineering",
    description: "As engineering student i'm also studying engineering related subjects.",
    icon: "gear"
  },
  {
    title: "Projects",
    description: "I'm always working on new IT projects.",
    icon: "laptop"
  }
];

export const institutions = [
  { name: "Politecnico di Milano", url: "https://www.polimi.it/", logo: "/images/polimi.png" },
  { name: "Università degli Studi di Parma", url: "https://www.unipr.it/", logo: "/images/unipr.png" }
];

export const education = [
  {
    institution: "Politecnico di Milano",
    period: "Sep 2022 — Now",
    description: "Master's degree student in Computer science and engineering."
  },
  {
    institution: "Università degli studi di Parma",
    period: "Sep 2019 — Oct 2022",
    description: "Bachelor's degree, Computer, Electronic and Telecommunications Engineering.",
    grade: "110 / 110"
  },
  {
    institution: "ITIS Leonardo Da Vinci",
    period: "Sep 2014 — Jun 2019",
    description: "Technical institute diploma, Computer Science.",
    grade: "98 / 100"
  }
];

export const experience = [
  {
    role: "IT Support Technician",
    period: "May 2019 — Sep 2019",
    description: "Self-employed IT support technician, ProntoPro platform."
  },
  {
    role: "Network Technician",
    period: "Jun 2018 — Sep 2018",
    description: "ITIS Leonardo Da Vinci, network technician internship."
  },
  {
    role: "IT Support",
    period: "Jun 2017 — Aug 2017",
    description: "Data Flow s.r.l, IT support internship."
  }
];

export const certifications = [
  {
    title: "First Certificate in English (B2)",
    period: "Jun 2022",
    description: "Cambridge University Press & Assessment English.",
    score: "174"
  },
  {
    title: "Test Of English for International Communication",
    period: "May 2022",
    description: "ETS.",
    score: "855"
  }
];

export const skills = [
  { name: "Machine Learning", level: 70 },
  { name: "Deep Learning", level: 50 },
  { name: "NLP", level: 75 },
  { name: "SW Development", level: 80 }
];

export const projects = [
  {
    title: "eMall",
    category: "applications",
    url: "https://github.com/andberto/eMall",
    image: "/images/emall.png",
    label: "Application"
  },
  {
    title: "European Road Network Analysis",
    category: "scientific",
    url: "https://github.com/andberto/Euroroad",
    image: "/images/euroroad.png",
    label: "Scientific"
  },
  {
    title: "Loans Reliability Prediction",
    category: "scientific",
    url: "https://github.com/andberto/LoansPrediction",
    image: "/images/loans.png",
    label: "Scientific"
  },
  {
    title: "DNSolver",
    category: "applications",
    url: "https://github.com/andberto/DNSolver",
    image: "/images/dnsolver.png",
    label: "Web Application"
  },
  {
    title: "Web Video Chat",
    category: "applications",
    url: "https://github.com/andberto/WebVideoChat",
    image: "/images/webvideochat.png",
    label: "Web Application"
  },
  {
    title: "Hitori",
    category: "games",
    url: "https://github.com/andberto/hitori",
    image: "/images/hitori.png",
    label: "Game"
  },
  {
    title: "Moon Patrol",
    category: "games",
    url: "https://github.com/andberto/MoonPatrol",
    image: "/images/moonpatrol.png",
    label: "Game"
  },
  {
    title: "SQuAD2.0",
    category: "scientific",
    url: "https://github.com/andberto/SQuAD2.0_Analysis",
    image: "/images/squad.png",
    label: "Scientific"
  },
  {
    title: "PPG Signals Analysis for Cardiac Abnormality Detection",
    category: "scientific",
    url: "https://github.com/andberto/PPGAnalysis",
    image: "/images/ppgs.ppm",
    label: "Scientific"
  },
  {
    title: "Leaf Classification",
    category: "scientific",
    url: "https://github.com/andberto/LeafClassification/tree/main",
    image: "/images/leafs.webp",
    label: "Scientific"
  },
  {
    title: "Road Point Cloud Estimation from Static Monocular View",
    category: "scientific",
    url: "https://github.com/andberto/3DRoadFromMonocular",
    image: "/images/iacv.png",
    label: "Scientific"
  }
];

export const articles = [
  {
    title: "Natural Language Processing and Deep Learning for Bankruptcy Prediction: An End-to-End Architecture",
    authors: "G. Lombardo, A. Bertogalli, S. Consoli, D. R. Recupero",
    publication: "IEEE Access, 2024",
    abstract: "Machine and Deep Learning methods are widely adopted to predict corporate bankruptcy events for their effectiveness. Bankruptcy prediction is commonly modeled as a binary classification task over accounting data where the positive label is associated with companies with a high likelihood of bankruptcy and the negative label with a low risk of failure. Most of the models mainly focus on exploiting accounting, stock market data, and data augmentation to deal with the intrinsic unbalance of this task. More recently, financial reports such as the US SEC annual reports have been investigated for feature engineering to boost the accuracy of the classification task.",
    url: "https://ieeexplore.ieee.org/document/10711166"
  },
  {
    title: "Document Embedding with Transformer for Bankruptcy Prediction",
    authors: "Andrea Bertogalli",
    publication: "Bachelor's thesis, 2022",
    abstract: "The aim of this thesis is to create and implement an end-to-end trainable model that surpasses current models in bankruptcy prediction. The proposed approach combines a multi-head Long Short-Term Memory (LSTM) network and a Transformer. The LSTM network handles financial data, while the Transformer processes 10-K filings from publicly listed U.S. companies on the NYSE and NASDAQ, covering the period from 2000 to 2018. This hybrid architecture is expected to improve performance by leveraging the strengths of both models in analyzing structured financial data and unstructured text.",
    url: "/docs/Thesis_Andrea_Bertogalli.pdf"
  }
];

export const sections = ["About", "Resume", "Projects", "Articles", "Contact"];
