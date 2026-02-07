export const personalInfo = {
  name: "Andrea Bertogalli",
  title: "PhD Student @ VisLab / Ambarella Inc.",
  email: "andrea.bertogalli.it@gmail.com",
  locations: ["VisLab, Parma, Italy"],
  linkedin: "https://www.linkedin.com/in/andrea-bertogalli-509383175",
  github: "https://github.com/andberto",
  avatar: "/images/myavatar.jpg"
};

export const aboutText = [
  "I'm a PhD student at VisLab, an Ambarella Inc. company, working on computer vision and autonomous driving. I focus on online HD mapping and perception.",
  "I like working across the whole pipeline, from ideas to code that runs on real systems, and I enjoy both research and hands-on development.",
];

export const services = [
  {
    title: "Computer Vision",
    description: "Developing neural networks and algorithms for autonomous driving.",
    icon: "ai"
  },
  {
    title: "Software Development",
    description: "Developing complex deep learning codebases in Python, PyTorch.",
    icon: "code"
  },
  {
    title: "Projects",
    description: "I'm always working on new IT projects.",
    icon: "laptop"
  }
];

export const institutions = [
  { name: "VisLab, an Ambarella Inc. company", url: "https://vislab.it/", logo: "/images/image(2).png" },
  { name: "Ambarella Inc.", url: "https://www.ambarella.com/", logo: "/images/AMBA_BIG.D-26d18599.png" },
  { name: "Politecnico di Milano", url: "https://www.polimi.it/", logo: "/images/polimi.png" },
  { name: "Università degli Studi di Parma", url: "https://www.unipr.it/", logo: "/images/unipr.png" }
];

export const education = [
  {
    institution: "VisLab, an Ambarella Inc. company",
    period: "Nov 2025 — Now",
    description: "PhD in computer vision and autonomous driving (online HD mapping and perception)."
  },
  {
    institution: "Politecnico di Milano",
    period: "Sep 2022 — Oct 2025",
    description: "Master's degree in Computer science and engineering.",
    grade: "109 / 110"
  },
  {
    institution: "Università degli studi di Parma",
    period: "Sep 2019 — Oct 2022",
    description: "Bachelor's degree, Computer, Electronic and Telecommunications Engineering.",
    grade: "110 / 110"
  }
];

export const experience = [
  {
    role: "PhD at VisLab, an Ambarella Inc. company",
    period: "Nov 2025 — Now",
    description: "PhD research in online HD mapping and perception at VisLab (Ambarella Inc.)."
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
  { name: "Computer Vision", level: 95 },
  { name: "Deep Learning", level: 80 },
  { name: "Machine Learning", level: 70 },
  { name: "Engineering", level: 80 }
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
    title: "One target to align them all: LiDAR, RGB and event cameras extrinsic calibration for Autonomous Driving",
    authors: "Andrea Bertogalli, Giacomo Boracchi, Luca Magri",
    publication: "British Machine Vision Conference (BMVC), 2025",
    abstract: "We present a novel multi-modal extrinsic calibration framework designed to simultaneously estimate the relative poses between event cameras, LiDARs, and RGB cameras, with particular focus on the challenging event camera calibration. Core of our approach is a novel 3D calibration target, specifically designed and constructed to be concurrently perceived by all three sensing modalities. The target encodes features in planes, ChArUco, and active LED patterns – each tailored to the unique characteristics of LiDARs, RGB cameras, and event cameras respectively. This unique design enables a one-shot, joint extrinsic calibration process, in contrast to existing approaches that typically rely on separate, pairwise calibrations.",
    url: "https://bmvc2025.bmva.org/proceedings/499/"
  },
  {
    title: "Multi-modal sensing for autonomous driving: a unified calibration framework for LiDAR, RGB and Event cameras",
    authors: "Andrea Bertogalli",
    publication: "Master's thesis, Politecnico di Milano, 2023/2024",
    abstract: "Autonomous driving is one of the most prominent research and application fields in computer vision. Autonomous driving frameworks combine traditional sensors such as RGB cameras and LiDARs while also incorporating more innovative and recent sensors like Event Cameras, which aim to bridge the gap between existing sensors and enhance the overall reliability of the framework. In this thesis, we address the problem of calibrating an Event Camera with multiple sensors (i.e., LiDARs and RGB cameras) to enhance an existing autonomous driving framework by integrating data from all sensors. We propose a toolbox to directly calibrate these three types of sensors, standardizing a procedure for calibrating complex frameworks.",
    url: "https://www.politesi.polimi.it/handle/10589/234675"
  },
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
