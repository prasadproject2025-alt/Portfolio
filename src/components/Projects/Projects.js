import React, { useState, useMemo } from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectModal from "./ProjectModal";
import Particle from "../Particle";
import { BsSearch, BsArrowRepeat } from "react-icons/bs";

// Project visual assets
import cropRagImg from "../../Assets/Projects/crop-rag.svg";
import nlpAdvImg from "../../Assets/Projects/nlp-adversarial.svg";
import springBootFarmImg from "../../Assets/Projects/springboot-farm.svg";
import clothDonationImg from "../../Assets/Projects/cloth-donation.svg";
import smartLightingImg from "../../Assets/Projects/smart-lighting.svg";
import potatoCloudImg from "../../Assets/Projects/potato-cloud.svg";
import mangoHybridImg from "../../Assets/Projects/mango-hybrid.svg";
import secureHealthImg from "../../Assets/Projects/secure-health-sftp.svg";
import prometheusMlopsImg from "../../Assets/Projects/prometheus-mlops.svg";
import bigmartSalesImg from "../../Assets/Projects/bigmart-sales.svg";
import parkwiseImg from "../../Assets/Projects/parkwise.svg";

import yoloMidasImg from "../../Assets/Projects/yolo-midas.svg";
import uavCrowdImg from "../../Assets/Projects/uav-crowd.svg";
import cesAiImg from "../../Assets/Projects/ces-ai.svg";
import handBioImg from "../../Assets/Projects/hand-biometrics.svg";
import noteShareImg from "../../Assets/Projects/noteshare.svg";
import autoPenImg from "../../Assets/Projects/autopen.svg";
import inventoryResImg from "../../Assets/Projects/inventory-res.svg";
import smartPillImg from "../../Assets/Projects/smart-pill.svg";
import flamAiImg from "../../Assets/Projects/flamai-audit.svg";
import leafImg from "../../Assets/Projects/leaf.png";
import codeEditorImg from "../../Assets/Projects/codeEditor.png";

const projectsData = [
  {
    id: "nlp-adversarial",
    title: "Adversarial Attack and Defense Mechanisms for Robust NLP",
    categoryGroup: "AI & LLMs",
    category: "AI & NLP Robustness",
    language: "Python",
    imgPath: nlpAdvImg,
    ghLink: "https://github.com/prasadproject2025-alt/LeetCode",
    description: "Evaluates transformer-based NLP model (BERT bert-base-uncased) vulnerability under character, word, and sentence perturbations on IMDB, and implements input normalization, adversarial training, and ensembling.",
    longDescription: "Investigates the vulnerability of transformer models to adversarial attacks (TextAttack). Evaluated performance drops under character edits, word-level synonym substitutions, and sentence rephrasing. Defenses like input normalization, adversarial training, and ensemble predictions restored model accuracy from 78.6% up to 88.9% (Precision: 88.2%, Recall: 89.5%, F1: 88.8%).",
    highlights: [
      "Fine-tuned BERT (bert-base-uncased) on sentiment classification tasks.",
      "TextAttack character, word-synonym, and sentence perturbation evaluation.",
      "Adversarial training & input normalization defenses.",
      "Improved accuracy from 78.6% (attacked) up to 88.9% (defended, F1: 88.8%)."
    ],
    tags: ["BERT", "TextAttack", "Adversarial Training", "PyTorch", "NLP", "IMDB Dataset"],
    interactiveType: "nlp-adversarial",
    interactiveTitle: "BERT Adversarial Attack & Defense Evaluator"
  },
  {
    id: "crop-rag",
    title: "Multilingual Crop Disease Assistant (Hybrid RAG)",
    categoryGroup: "AI & LLMs",
    category: "Applied AI & RAG",
    language: "Python / Flask",
    imgPath: cropRagImg,
    ghLink: "https://github.com/prasadproject2025-alt/AI-Powered-Multilingual-Crop-Disease-Assistant-Using-Hybrid-RAG",
    demoLink: "https://ai-powered-multilingual-crop-diseas.vercel.app",
    description: "AI decision-support system assisting rural farmers across 11 regional languages (Tamil, Telugu, Malayalam, Marathi, etc.) with Web Speech STT/TTS, Google Gemini API, and Hybrid RAG grounding.",
    longDescription: "Combines fuzzy string matching (rapidfuzz) and synonym mapping against factual CSV knowledge bases (crop_kb.csv) with Google's Gemini API. Processes voice/text inputs, enforces structured 3-section outputs (Symptoms, Cause, Remedy), and synthesizes spoken audio via Google Text-to-Speech (gTTS).",
    highlights: [
      "Supports 11 Indian regional languages with gTTS audio synthesis.",
      "Hybrid RAG architecture eliminating LLM hallucinations using crop_kb.csv.",
      "Web Speech API Integration (STT / TTS) for low-literacy accessibility.",
      "Responsive 3-panel grid layout (Sidebar, Chat Window, Knowledge Insight Panel)."
    ],
    tags: ["Python", "Hybrid RAG", "Gemini API", "Flask", "gTTS", "Web Speech API", "rapidfuzz"],
    interactiveType: "crop-rag",
    interactiveTitle: "Multilingual Agricultural RAG Simulator"
  },
  {
    id: "springboot-farm",
    title: "Smart Farming Knowledge & Commerce Platform (Spring Boot)",
    categoryGroup: "Full Stack Web",
    category: "Full Stack Enterprise",
    language: "Java / Spring Boot",
    imgPath: springBootFarmImg,
    ghLink: "https://github.com/prasadproject2025-alt/inventory-management-system",
    description: "Enterprise web platform connecting farmers, agro experts, and buyers. Features OpenWeatherMap API, soil health analysis, direct farm-to-table marketplace, and agro expert certification workflows.",
    longDescription: "Built using Java 17, Spring Boot 2.7+, Hibernate JPA, PostgreSQL, and Thymeleaf. Incorporates Spring Security RBAC, JWT tokens, bcrypt encryption, SHA-256 audit logging, and automated UI/API testing with Selenium, Postman, and Apache JMeter.",
    highlights: [
      "Spring Boot 2.7+, Java 17, Hibernate Data JPA & PostgreSQL backend.",
      "Soil analysis engine & OpenWeatherMap API real-time weather insights.",
      "Spring Security RBAC, JWT, bcrypt password hashing & SHA-256 audit ledger.",
      "Automated testing with Selenium WebDriver, Postman, and JMeter."
    ],
    tags: ["Java 17", "Spring Boot", "PostgreSQL", "Spring Security", "JSP/Thymeleaf", "Selenium"],
    interactiveType: "springboot-farm",
    interactiveTitle: "Spring Boot Soil & Weather Advisory Simulator"
  },
  {
    id: "noteshare",
    title: "NoteShare Academic Collaboration Platform",
    categoryGroup: "Full Stack Web",
    category: "Full Stack Web",
    language: "PHP / JS",
    imgPath: noteShareImg,
    ghLink: "https://github.com/prasadproject2025-alt/NoteShare",
    demoLink: "https://notesharevit.vercel.app",
    description: "Centralized web platform for VIT students to share academic notes, buy, sell, rent, and batch-share study materials using coin-based transaction models and Firebase Realtime Database.",
    longDescription: "Solves campus study resource fragmentation. Enforces institutional email validation (@vitstudent.ac.in), OTP-based verification via PHPMailer, bcrypt security, coin-based resource exchange, and integrated peer-to-peer messaging.",
    highlights: [
      "Institutional domain restriction (@vitstudent.ac.in) & OTP email verification.",
      "Coin-based transaction model incentivizing quality note contributions.",
      "Real-time Firebase database synchronization & peer-to-peer messaging.",
      "Batch sharing, note renting, and structured resource search."
    ],
    tags: ["PHP", "JavaScript", "Firebase Realtime DB", "PHPMailer", "bcrypt", "HTML5/CSS3"],
    interactiveType: "noteshare",
    interactiveTitle: "NoteShare Campus Notes Explorer"
  },
  {
    id: "cloth-donation",
    title: "Sevaarth: NGO Resource & Cloth Donation App",
    categoryGroup: "Full Stack Web",
    category: "Native Mobile (Android)",
    language: "Java / Android",
    imgPath: clothDonationImg,
    ghLink: "https://github.com/prasadproject2025-alt/testing",
    description: "Native Android app connecting donors with verified NGOs to streamline resource distribution (clothes, food, books, blood, medicines) with Google Maps and iText PDF Event Card generation.",
    longDescription: "Engineered in Java on Android BaaS architecture (Firebase Realtime DB & Auth) and Cloudinary media storage. Features admin verification workflows for NGOs, Google Maps integration, direct WhatsApp/SMS intents, Glide image caching, and PDF event card creation.",
    highlights: [
      "Native Android development in Java with Firebase BaaS & Cloudinary.",
      "Manual administrative verification workflow for NGO legitimacy.",
      "Google Maps API geolocation, WhatsApp/SMS/Call intents.",
      "Auto-generates shareable PDF Event Cards via iText library."
    ],
    tags: ["Android", "Java", "Firebase", "Cloudinary", "Google Maps API", "iText PDF"],
    interactiveType: "cloth-donation",
    interactiveTitle: "Sevaarth NGO Donation & Event Simulator"
  },
  {
    id: "smart-pill",
    title: "Smart Automated Medication Assistant (Face AI & RFID)",
    categoryGroup: "Security & IoT",
    category: "IoT & Healthcare",
    language: "C++ / Python",
    imgPath: smartPillImg,
    ghLink: "https://github.com/prasadproject2025-alt/pill-dispense-system-with-rfid-and-face-recognition",
    description: "IoT healthcare device built on ESP32 & ESP32-CAM with RC522 RFID patient dispensing verification, facial recognition caregiver refill checks, load cells, RTC scheduling, and Firebase/Blynk IoT alerts.",
    longDescription: "Solves medication non-adherence and unauthorized drug access. Features dual-layer authentication (RFID for patients, ESP32-CAM face recognition for caregivers), servo motor pill dispensing, load cell stock tracking, and instant mobile alerts via Blynk and Firebase.",
    highlights: [
      "Dual Authentication: RC522 RFID for patients + ESP32-CAM Face Recognition for caregivers.",
      "Servo motor pill dispensing & load cell continuous weight monitoring.",
      "Firebase & Blynk IoT cloud synchronization with timestamped audit trails.",
      "100% dispensing accuracy & 98% biometric/RFID authentication reliability."
    ],
    tags: ["ESP32", "ESP32-CAM", "RFID RC522", "Face Recognition", "Firebase", "Blynk IoT", "C++"],
    interactiveType: "biometrics",
    interactiveTitle: "Smart Medication & Face AI Auth Simulator"
  },
  {
    id: "smart-lighting",
    title: "Smart Classroom Lighting System (IoT Level 2)",
    categoryGroup: "Security & IoT",
    category: "IoT & Energy Systems",
    language: "C++ / Arduino",
    imgPath: smartLightingImg,
    ghLink: "https://github.com/prasadproject2025-alt/RFID-based-Warehouse-System",
    description: "IoT-based energy management solution automating classroom illumination using ESP8266, PIR motion sensors, LDR ambient light sensors, relays, and Blynk IoT remote control.",
    longDescription: "Minimizes power wastage in academic buildings using an IoT Level 2 architecture. Automatic Mode executes conditional logic (lights activate only when PIR detects motion during low ambient lux), complemented by manual override via Blynk.",
    highlights: [
      "ESP8266 Wi-Fi MCU, PIR motion sensor, LDR ambient light sensor & relays.",
      "Dual-mode: Occupancy + Lux conditional logic & Blynk smartphone override.",
      "Real-time sensor-actuator feedback loop reducing lighting energy consumption."
    ],
    tags: ["ESP8266", "PIR Sensor", "LDR Sensor", "Blynk IoT", "Arduino C++", "Energy Automation"],
    interactiveType: "smart-lighting",
    interactiveTitle: "Classroom IoT Occupancy & Lux Simulator"
  },
  {
    id: "potato-cloud",
    title: "Cloud-Based Smart Potato Disease Detection (AWS)",
    categoryGroup: "Computer Vision",
    category: "Cloud Vision & AI",
    language: "Python / React",
    imgPath: potatoCloudImg,
    ghLink: "https://github.com/prasadproject2025-alt/Plant-leaf-disease-prediction",
    description: "Computer vision platform for early diagnosis of potato leaf diseases (Early Blight, Late Blight, Healthy). Built with TensorFlow/Keras, OpenCV, Flask, AWS EC2, S3, and React.js.",
    longDescription: "Trained a CNN on 2,152 PlantVillage potato leaf images with CLAHE contrast enhancement and pixel normalization. Deployed on AWS EC2 (Ubuntu 20.04) with S3 bucket image logging, serverless AWS Lambda endpoints, and a React.js interface.",
    highlights: [
      "TensorFlow/Keras CNN with CLAHE contrast enhancement & augmentation.",
      "Deployed on AWS EC2 (t2.micro) with S3 cloud storage & AWS Lambda.",
      "React.js frontend interface providing instant diagnostic predictions."
    ],
    tags: ["Python", "TensorFlow", "OpenCV", "AWS EC2", "AWS S3", "AWS Lambda", "React.js"],
    interactiveType: "potato-cloud",
    interactiveTitle: "AWS Cloud Potato Diagnostic Simulator"
  },
  {
    id: "hand-biometrics",
    title: "Contactless Payment System Using Hand Biometrics",
    categoryGroup: "Computer Vision",
    category: "Biometrics & FinTech",
    language: "Python / Streamlit",
    imgPath: handBioImg,
    ghLink: "https://github.com/prasadproject2025-alt/CONTACTLESS-PAYMENT-USING-HAND-BIOMETRICS",
    description: "Touchless financial authentication platform utilizing MobileNetV2 CNN feature extraction, SVM classification (RBF kernel), AES Fernet encryption, and Twilio SMS fraud alerts.",
    longDescription: "Hygienic biometric payment system deployed via Streamlit. Preprocesses hand images (224x224 OpenCV resizing), extracts discriminative features with MobileNetV2, classifies with an SVM RBF kernel (93.5% accuracy), encrypts payloads with AES Fernet, and triggers Twilio SMS alerts on suspicious transactions.",
    highlights: [
      "MobileNetV2 CNN feature extraction paired with SVM RBF kernel.",
      "AES Fernet symmetric encryption protecting transaction payloads.",
      "Twilio API real-time SMS fraud alerts (<80% confidence or > ₹50,000).",
      "93.5% Accuracy, 91.2% Precision, 3.2% False Positive Rate."
    ],
    tags: ["MobileNetV2", "SVM RBF", "AES Fernet", "Twilio API", "Streamlit", "OpenCV", "Python"],
    interactiveType: "biometrics",
    interactiveTitle: "Contactless Hand Biometric & Fraud Alert Simulator"
  },
  {
    id: "mango-hybrid",
    title: "Hybrid Deep Learning Framework for Mango Leaf Disease",
    categoryGroup: "Computer Vision",
    category: "Computer Vision",
    language: "Python / TensorFlow",
    imgPath: mangoHybridImg,
    ghLink: "https://github.com/prasadproject2025-alt/Plant-leaves-diseases-prediction",
    description: "Advanced computer vision system classifying 8 mango leaf disease categories using a hybrid CNN + EfficientNet-B0 + Capsule Network (CapsNet) with dynamic routing.",
    longDescription: "Synergizes a custom CNN for spatial features, EfficientNet-B0 for compound scaling, and CapsNet with dynamic routing for pose/orientation invariance. Incorporates Otsu thresholding, contour ROI extraction, and image quality metrics (PSNR, SSIM), achieving 93.75% accuracy.",
    highlights: [
      "Hybrid architecture: Custom CNN + EfficientNet-B0 + CapsNet with dynamic routing.",
      "Tested on 4,000 orchard images across 8 disease classes.",
      "Otsu thresholding, contour ROI segmentation, PSNR & SSIM metrics.",
      "Achieved 93.75% overall test accuracy & 0.94 weighted F1-score."
    ],
    tags: ["CapsNet", "EfficientNet-B0", "CNN", "Otsu Segmentation", "OpenCV", "TensorFlow"],
    interactiveType: "mango-hybrid",
    interactiveTitle: "CapsNet Hybrid Mango Disease Simulator"
  },
  {
    id: "secure-health-sftp",
    title: "Secure E-Person Healthcare System & SFTP Protocol",
    categoryGroup: "Security & IoT",
    category: "Cybersecurity & Cryptography",
    language: "Python",
    imgPath: secureHealthImg,
    ghLink: "https://github.com/prasadproject2025-alt/Secure-Record-Management-System-Using-AES-Algorithm",
    description: "HIPAA-compliant EHR security system using Hybrid AES-256 + 2048-bit RSA encryption, RBAC tiers, SHA-512 hashing, and a client-side SFTP protocol engine built with Paramiko.",
    longDescription: "Part 1: Encrypts structured EHR medical records using AES Fernet and 2048-bit RSA key distribution, enforcing RBAC (Dean vs Doctor), SHA-512 hashing, and account lockout policies. Part 2: Implements client-side SFTP using Paramiko SSH, 256-bit AES-CBC payload encryption, RSA-OAEP, and SHA-256 integrity hash verification.",
    highlights: [
      "Hybrid Cryptographic Model: AES-256 (Fernet / CBC) + 2048-bit RSA-OAEP.",
      "Role-Based Access Control (RBAC) & account lockout brute-force defense.",
      "Paramiko SSH/SFTP engine with pre/post transfer SHA-256 integrity checks.",
      "HIPAA-compliant encrypted binary record serialization (.bin)."
    ],
    tags: ["AES-256", "RSA-2048", "Paramiko SFTP", "SHA-512", "RBAC", "Python Security"],
    interactiveType: "secure-health-sftp",
    interactiveTitle: "Hybrid AES/RSA Handshake & SFTP Simulator"
  },
  {
    id: "prometheus-mlops",
    title: "Prometheus MLOps Monitoring Infrastructure for AI Models",
    categoryGroup: "Cloud & DevOps",
    category: "MLOps & System Observability",
    language: "Python / Prometheus",
    imgPath: prometheusMlopsImg,
    ghLink: "https://github.com/prasadproject2025-alt/Plant-leaf-disease-prediction",
    description: "Real-time system observability for deployed plant disease CNN models using Prometheus, prometheus_client (/metrics Port 8000), Grafana dashboards, Alertmanager, and Node Exporter.",
    longDescription: "Monitors operational health, latency, memory leaks, and prediction failures of production Streamlit/CNN models. Exposes custom Prometheus metrics (prediction_count_total, prediction_latency_seconds, Python GC metrics) and tracks host resources via Node Exporter.",
    highlights: [
      "Prometheus time-series metrics scraping (/metrics at Port 8000).",
      "Custom counters, latency histograms & Python GC collection metrics.",
      "Grafana dashboard visualization & Alertmanager fault notifications.",
      "Node Exporter CPU, RAM, and network host-level infrastructure tracking."
    ],
    tags: ["Prometheus", "Grafana", "Alertmanager", "MLOps", "prometheus_client", "Streamlit"],
    interactiveType: "prometheus-mlops",
    interactiveTitle: "Prometheus /metrics & Grafana Explorer"
  },
  {
    id: "secure-record",
    title: "Comprehensive Secure Record Management System (AES)",
    categoryGroup: "Security & IoT",
    category: "Cybersecurity & Systems",
    language: "PHP / MySQL",
    imgPath: codeEditorImg,
    ghLink: "https://github.com/prasadproject2025-alt/Secure-Record-Management-System-Using-AES-Algorithm",
    description: "Secure Electronic Management Record (EMR) platform in PHP 8.x & MySQL implementing AES-256-CBC encryption with 16-byte random IVs, SHA-256 hashing, and PDO prepared statements.",
    longDescription: "Protects client and employee confidentiality in compliance with HIPAA. Encrypts sensitive fields at rest and in transit using OpenSSL AES-256-CBC with Base64 encoding. Implements 3 RBAC tiers (Manager, Employee, Client) and PDO prepared statements to eradicate SQL injection vulnerabilities.",
    highlights: [
      "AES-256-CBC symmetric encryption with random 16-byte IVs & Base64 encoding.",
      "PHP PDO prepared statements preventing SQL injection vulnerabilities.",
      "3-tier Role-Based Access Control (Manager, Employee, Client).",
      "HIPAA-compliant client record security and audit logging."
    ],
    tags: ["PHP 8.x", "MySQL", "AES-256-CBC", "OpenSSL", "PDO Prepared Statements", "RBAC"],
    interactiveType: "general",
    interactiveTitle: "AES-256 EMR Database Security Simulator"
  },
  {
    id: "plant-disease",
    title: "Plant Leaf Disease Prediction System (ML & Docker)",
    categoryGroup: "Computer Vision",
    category: "Deep Learning & MLOps",
    language: "Python / Streamlit",
    imgPath: leafImg,
    ghLink: "https://github.com/prasadproject2025-alt/Plant-leaf-disease-prediction",
    description: "Deep learning CNN trained on 54,000 PlantVillage images (92.5% training, 90.8% validation accuracy), integrated into Streamlit, containerized with Docker, and monitored via Prometheus.",
    longDescription: "Automates crop health evaluation. Preprocesses raw leaf imagery (128x128 & 224x224 resizing, pixel normalization), trains a multi-class CNN, packages the application inside Docker containers for cross-platform deployment, and exposes MLOps metrics on port 8000.",
    highlights: [
      "Trained on 54,000 PlantVillage images with 92.5% training accuracy.",
      "Interactive Streamlit web frontend for real-time leaf image uploads.",
      "Containerized with Docker for cross-platform cloud deployment.",
      "Instrumented with prometheus_client metrics exporter on port 8000."
    ],
    tags: ["Deep Learning", "CNN", "TensorFlow", "Streamlit", "Docker", "Prometheus", "Kaggle"],
    interactiveType: "crop-rag",
    interactiveTitle: "CNN Plant Disease & Docker Simulator"
  },
  {
    id: "bigmart-sales",
    title: "Big Mart Sales Prediction (XGBoost & KNNImputer)",
    categoryGroup: "AI & LLMs",
    category: "Predictive Analytics & ERP",
    language: "Python / Scikit-Learn",
    imgPath: bigmartSalesImg,
    ghLink: "https://github.com/prasadproject2025-alt/inventory-management-system",
    description: "ERP-integrated predictive analytics system optimizing retail inventory replenishment and demand forecasting using KNNImputer, Random Forest, and XGBoost gradient boosting.",
    longDescription: "Processes multi-outlet retail sales data (Item MRP, visibility, weight, store size). Evaluates KNNImputer (k=10) against univariate imputation, uses KDE plots for distribution analysis, and trains XGBoost models to accurately forecast demand and prevent stock-outs.",
    highlights: [
      "Multivariate missing value imputation via KNNImputer (k=10).",
      "Predictive modeling using Linear Regression, Random Forest & XGBoost.",
      "KDE plots & boxplot distribution analysis for feature engineering.",
      "Optimizes retail inventory replenishment to eliminate stock-outs."
    ],
    tags: ["Python", "XGBoost", "Random Forest", "KNNImputer", "Scikit-Learn", "Pandas", "ERP"],
    interactiveType: "bigmart-sales",
    interactiveTitle: "XGBoost Demand Forecasting Simulator"
  },
  {
    id: "parkwise",
    title: "ParkWise: Smart Parking Platform (Firefly Algorithm)",
    categoryGroup: "Full Stack Web",
    category: "Full Stack & Optimization",
    language: "React / Node.js",
    imgPath: parkwiseImg,
    ghLink: "https://github.com/prasadproject2025-alt/Portfolio",
    description: "Web-based smart parking platform with React.js, Node.js/Express (Port 9090), 2FA Email OTP, real-time double-booking prevention, and Firefly Optimization dynamic pricing.",
    longDescription: "Converts urban parking searches into a digital reservation ecosystem. Supports 4 stakeholder roles (Users, Managers, Admins, Developers), implements dynamic fare calculation via the Firefly Optimization Algorithm, prevents slot double-booking, and renders bar chart occupancy analytics.",
    highlights: [
      "React.js frontend & Node.js / Express REST API backend (Port 9090).",
      "Firefly Optimization Algorithm for dynamic fare calculation.",
      "Two-Factor Authentication (2FA) via email OTP verification.",
      "Real-time double-booking prevention & clustered slot reservation."
    ],
    tags: ["React.js", "Node.js", "Express", "Firefly Algorithm", "2FA OTP", "REST APIs"],
    interactiveType: "parkwise",
    interactiveTitle: "Firefly Dynamic Parking Rate Simulator"
  },
  {
    id: "yolo-midas",
    title: "YOLO + MiDaS Fusion for Autonomous Navigation",
    categoryGroup: "Computer Vision",
    category: "Computer Vision",
    language: "Jupyter Notebook",
    imgPath: yoloMidasImg,
    ghLink: "https://github.com/prasadproject2025-alt/YOLO-MiDaS-Fusion",
    description: "Unified Object Detection and Monocular Depth Estimation architecture for autonomous navigation utilizing a shared ResNeXt101 backbone for dual computer vision inference.",
    longDescription: "Engineered a unified neural network that executes both 2D bounding-box detection (YOLOv3) and continuous monocular depth disparity estimation (MiDaS) simultaneously from a single forward pass, reducing GPU memory footprint and inference latency.",
    highlights: [
      "Shared ResNeXt101 deep feature extractor across detection and depth heads.",
      "Low-latency simultaneous inference suitable for embedded edge compute boards.",
      "Accurate obstacle distance estimation in varied lighting and road conditions."
    ],
    tags: ["PyTorch", "Computer Vision", "ResNeXt101", "YOLOv3", "MiDaS", "Depth Estimation"],
    interactiveType: "yolo-midas",
    interactiveTitle: "Dual-Backbone Vision Inference Simulator"
  },
  {
    id: "uav-crowd",
    title: "Edge UAV Crowd Analytics (YOLOv8 & MiDaS)",
    categoryGroup: "Computer Vision",
    category: "Edge Computing & Vision",
    language: "Python",
    imgPath: uavCrowdImg,
    ghLink: "https://github.com/prasadproject2025-alt/Edge-Computing-Framework-for-UAV-Crowd-Analytics-Using-YOLO-and-MiDaS",
    description: "Real-time edge drone surveillance system combining YOLOv8 Nano object detection, MiDaS monocular depth, RTSP video streaming, median depth filtering, and CSV logging.",
    longDescription: "Designed for drone-based aerial surveillance. Ingests RTSP drone video feeds, detects individuals with YOLOv8 Nano, applies median filtering to depth maps for spatial density analysis, displays Picture-in-Picture (PiP) depth views, and exports annotated video logs.",
    highlights: [
      "YOLOv8 Nano person detection & MiDaS monocular depth mapping.",
      "RTSP live drone video stream ingestion & median depth filtering.",
      "Picture-in-Picture (PiP) depth map view & automated CSV data logging.",
      "Annotated video export for post-surveillance public safety auditing."
    ],
    tags: ["YOLOv8", "MiDaS", "RTSP", "Edge AI", "OpenCV", "Drone Analytics", "Python"],
    interactiveType: "uav-crowd",
    interactiveTitle: "UAV Aerial Drone Analytics Simulator"
  },
  {
    id: "autopen",
    title: "AutoPen: AI-Powered Creative Writing Assistant",
    categoryGroup: "AI & LLMs",
    category: "Generative AI",
    language: "JavaScript / Python",
    imgPath: autoPenImg,
    ghLink: "https://github.com/prasadproject2025-alt/AI-Powered-Creative-Writing-Assistant",
    description: "Real-time AI writing assistant integrating LanguageTool, BART-MNLI zero-shot genre classification, CardiffNLP tone analysis, Meta LLaMA 3.3 dialogue, and Cohere suggestions.",
    longDescription: "Assists creators, researchers, and developers in polishing prose. Integrates LanguageTool API for grammar, BART-MNLI for genre classification (89.1% accuracy), CardiffNLP for tone (85.0% F1-score), LLaMA 3.3 for character dialogue, and Cohere for contextual suggestions.",
    highlights: [
      "Multi-model NLP architecture: BART-MNLI, CardiffNLP, LLaMA 3.3, Cohere.",
      "LanguageTool API integration achieving 92.3% grammar correction accuracy.",
      "Real-time tone shift calculation (calculateToneShift) & conflict resolution.",
      "Export functionality to PDF, DOCX, and TXT formats."
    ],
    tags: ["BART-MNLI", "LLaMA 3.3", "Cohere API", "LanguageTool", "React.js", "Node.js"],
    interactiveType: "writing-ai",
    interactiveTitle: "Writing Tone & Grammar Refinement Playground"
  },
  {
    id: "ces-ai",
    title: "CES: Context-Repairing AI System",
    categoryGroup: "AI & LLMs",
    category: "AI Research",
    language: "Python",
    imgPath: cesAiImg,
    ghLink: "https://github.com/prasadproject2025-alt/CES-Context-Repairing-AI-System-using-Counterfactual-Embedding-Search",
    description: "Novel context-repairing framework utilizing Counterfactual Embedding Search to detect semantic drift, repair faulty context windows, and mitigate LLM hallucinations.",
    longDescription: "Explores counterfactual perturbations in the dense embedding latent space. When context conflict or retrieval hallucination occurs, the system identifies minimal semantic perturbations that restore groundedness and truthfulness in LLM responses.",
    highlights: [
      "Counterfactual k-NN search across perturbed sentence embeddings.",
      "Reduces hallucination rate while preserving intent and semantic nuance.",
      "Benchmarked on contested question-answering and multi-hop reasoning datasets."
    ],
    tags: ["Python", "LLMs", "Counterfactual Search", "Embedding Space", "NLP Research"],
    interactiveType: "ces-ai",
    interactiveTitle: "Counterfactual Embedding Repair Playground"
  },
  {
    id: "inventory-res",
    title: "Allo Inventory Reservation System",
    categoryGroup: "Full Stack Web",
    category: "Full Stack & Distributed Systems",
    language: "TypeScript",
    imgPath: inventoryResImg,
    ghLink: "https://github.com/prasadproject2025-alt/inventory-reservation-system",
    demoLink: "https://inventory-reservation-system-three-gamma.vercel.app",
    description: "Scalable inventory allocation and real-time reservation platform built with TypeScript, featuring atomic stock locks, reservation timers, and synchronized UI state.",
    longDescription: "Engineered with strict TypeScript types to handle concurrent inventory allocations without double-booking race conditions. Deployed on Vercel with responsive tables, analytics summaries, and live reservation monitoring.",
    highlights: [
      "Strongly typed full-stack codebase in TypeScript.",
      "Atomic stock decrement and reservation timeout rollback logic.",
      "Polished dashboard with responsive status badges and live metrics."
    ],
    tags: ["TypeScript", "React", "State Management", "Vercel", "REST APIs"],
    interactiveType: "inventory",
    interactiveTitle: "Real-Time Stock Reservation Simulator"
  },
  {
    id: "flamai-audit",
    title: "FlamAI LLM Team Benchmark & Serving Audit",
    categoryGroup: "Cloud & DevOps",
    category: "LLM Infrastructure",
    language: "Python",
    imgPath: flamAiImg,
    ghLink: "https://github.com/prasadproject2025-alt/flamai-ai-team-audit",
    description: "In-depth engineering evaluation and audit covering LLM tokenizer efficiency, multilingual benchmarking, model serving throughput, and production deployment capacity.",
    longDescription: "A comprehensive technical report and auditing toolkit assessing open-source LLM architectures under concurrent production traffic, comparing tokenization compression across Indian languages and benchmarking vLLM serving capacity.",
    highlights: [
      "Empirical benchmark of BPE and SentencePiece tokenizers across languages.",
      "Latency vs. throughput trade-off analysis under high concurrency.",
      "Production deployment recommendations for enterprise model serving."
    ],
    tags: ["LLMs", "Tokenizer Benchmarks", "vLLM", "Model Serving", "Python"],
    interactiveType: "general",
    interactiveTitle: "LLM Serving & Throughput Benchmark Simulator"
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "AI & LLMs", "Computer Vision", "Full Stack Web", "Cloud & DevOps", "Security & IoT"];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.categoryGroup === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.language.toLowerCase().includes(q) ||
        project.tags.some(tag => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works &amp; Systems 🚀</strong>
        </h1>
        <p style={{ color: "white" }}>
          Explore real-world software architectures, research implementations, and AI proofs-of-concept.
        </p>

        {/* Live Search & Filter Bar */}
        <div className="mb-4" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="input-group mb-3" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.5)" }}>
            <span className="input-group-text bg-dark border-secondary text-light">
              <BsSearch />
            </span>
            <input
              type="text"
              className="form-control bg-dark text-white border-secondary"
              placeholder="Search projects by name, technology (e.g. PyTorch, React, BERT, Spring Boot, Docker)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ fontSize: "0.95rem" }}
            />
            {searchQuery && (
              <Button variant="outline-secondary" onClick={() => setSearchQuery("")}>
                Clear
              </Button>
            )}
          </div>

          {/* Filter Category Tabs */}
          <div className="d-flex justify-content-center gap-2 flex-wrap mb-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                size="sm"
                variant={activeCategory === cat ? "primary" : "outline-secondary"}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontWeight: "600",
                  borderRadius: "20px",
                  padding: "5px 14px",
                  fontSize: "0.85rem"
                }}
              >
                {cat === "All" ? `All (${projectsData.length})` : cat}
              </Button>
            ))}
          </div>

          <div className="text-center mt-2">
            <Badge bg="dark" style={{ border: "1px solid rgba(199, 112, 240, 0.4)", color: "#c770f0", fontSize: "0.82rem" }}>
              Showing {filteredProjects.length} of {projectsData.length} Projects
            </Badge>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {filteredProjects.map((project) => (
              <Col key={project.id} md={4} className="project-card">
                <ProjectCard
                  project={project}
                  imgPath={project.imgPath}
                  isBlog={false}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                  onInspect={(proj) => setSelectedProject(proj)}
                />
              </Col>
            ))}
          </Row>
        ) : (
          <div className="text-center p-5 my-4" style={{ background: "rgba(22, 16, 42, 0.6)", borderRadius: "12px", border: "1px solid rgba(199, 112, 240, 0.3)" }}>
            <h4 style={{ color: "#ffffff" }}>No matching projects found</h4>
            <p style={{ color: "#a8a29e" }}>Try a different search keyword or reset your filter.</p>
            <Button variant="primary" onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}>
              <BsArrowRepeat /> Reset Search &amp; Filters
            </Button>
          </div>
        )}
      </Container>

      {/* Interactive Inspect Modal Session */}
      <ProjectModal
        show={!!selectedProject}
        onHide={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </Container>
  );
}

export default Projects;