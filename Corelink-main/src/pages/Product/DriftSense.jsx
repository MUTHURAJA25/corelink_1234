import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductHeroBanner from './components/ProductHeroBanner';
import AboutProduct from './components/AboutProduct';
import ProblemItSolves from './components/ProblemItSolves';
import HowItWorks from './components/HowItWorks';
import rawAiIcon from '../../images/how it work O/Real-time.svg';
import clarityCoreIcon from '../../images/how it work O/Drift detection.svg';
import clearInsightsIcon from '../../images/how it work O/Performance monitoring.svg';
import modelOutputIcon from '../../images/how it work O/Model output.svg';
import riskIndicatorsIcon from '../../images/how it work O/Risk indicators.svg';
import transactionStreamsIcon from '../../images/how it work O/Real-time transaction streams.svg';
import plainLanguageIcon from '../../images/how it work O/Behavioral signals (1).svg';
import interpretedExplanationIcon from '../../images/how it work O/Historical performance.svg';
import transactionContextIcon from '../../images/how it work O/Performance monitoring.svg';
import BusinessImpact from './components/BusinessImpact';
import { Activity, TrendingDown, GitMerge, Bell, Radio, Gauge, BarChart2, RefreshCw } from 'lucide-react';
import UndetectedFraudPatternImg from '../../images/products/icons/undetected-fraud-pattern.svg'
import ModelPerformanceDegradationOvertimeImg from '../../images/products/icons/model-performance-degradation-overtime.svg'
import IncreaseFalsePositives from '../../images/products/icons/increase-false-positives.svg'
import LackofRealTimeMonitoring from '../../images/products/icons/lackof-real-time-monitoring.svg'
import ProductBannerImage from '../../images/Producetbanner/DriftSense.png';


// ─── ProofChain How its work ──────────────────────────────────────
import IconF1 from '../../images/how it work/DriftSense/IconF1.svg';
import IconF2 from '../../images/how it work/DriftSense/IconF2.svg';
import IconF3 from '../../images/how it work/DriftSense/IconF3.svg';
import Icon1 from '../../images/how it work/DriftSense/Icon1.svg';
import Icon2 from '../../images/how it work/DriftSense/Icon2.svg';
import Icon3 from '../../images/how it work/DriftSense/Icon3.svg';
import Icon4 from '../../images/how it work/DriftSense/Icon4.svg';
import Icon5 from '../../images/how it work/DriftSense/Icon5.svg';
import Icon6 from '../../images/how it work/DriftSense/Icon6.svg';
import centericon from '../../images/how it work/DriftSense/Centericon.svg';


import icon1 from '../../images/compliance_value/continuous-monitoring.svg';
import icon2 from '../../images/compliance_value/bias-detection.svg';
import icon3 from '../../images/compliance_value/risk-governance.svg';
import ComplianceValue from './components/ComplianceValue';

// ─── Aboutus Image ────────────────────────────────────────────────
import driftSenseAboutImg from '../../images/Aboutproduct/DriftSense_Aboutproduct.png';

// ─── Business Impact Images  ────────────────────────────────────────────────
import businessImpactImg from '../../images/BusinessImpact/DriftSense/Business Impact.png';
import impactIconFraud from '../../images/BusinessImpact/DriftSense/Prevents fraud.png';
import impactIconAccuracy from '../../images/BusinessImpact/DriftSense/Improves AI.png';
import impactIconFalse from '../../images/BusinessImpact/DriftSense/Reduces false.png';

import SEO from '../../components/Seo';
import seoData from '../../components/SeoData';

// ─── DriftSense Theme (Cyan / Teal) ─────────────────────────────────────────
const theme = {
  gradientFrom: 'from-cyan-500',
  gradientTo: 'to-teal-400',
  glowColor: 'rgba(6,182,212,0.22)',
  tagBorderColor: 'border-cyan-500/30',
  tagTextColor: 'text-cyan-400',
  tagBgColor: 'bg-cyan-500/10',
  cardBorderColor: 'border-cyan-500/20',
  iconBgColor: 'bg-cyan-900/40',
  iconBorderColor: 'border-cyan-500/20',
  accentTextColor: 'text-cyan-400',
  stepBorderColor: 'border-cyan-500',
  connectorColor: 'from-cyan-700 to-transparent',
  badgeBorderColor: 'border-cyan-500/25',
  badgeBgColor: 'bg-cyan-900/20',
  badgeTextColor: 'text-cyan-400',
};

const custom_theme = {
  center_icon_bg: 'bg-[linear-gradient(180deg,_#FF4C00_0%,_#992E00_100%)]',
  icon_bg: 'bg-[linear-gradient(180deg,_#FF4C00_0%,_#992E00_100%)]',
  box_background: 'bg-[linear-gradient(180deg,_rgba(255,232,222,0.2)_0%,_rgba(235,138,97,0.2)_100%)]',
chevron_color: "text-[#FF4C00]",
};

const badges = [
  { icon: <Radio className="w-4 h-4" />, label: 'Live Monitoring', sub: 'Stream-based' },
  { icon: <Gauge className="w-4 h-4" />, label: '50+ Drift Metrics', sub: 'PSI, KS, W-dist' },
  { icon: <Bell className="w-4 h-4" />, label: 'Smart Alerts', sub: 'No false positives' },
  { icon: <RefreshCw className="w-4 h-4" />, label: 'Auto-Remediation', sub: 'Retrain trigger' },
];

const highlights = [
  { value: '97%', label: 'Early Drift Detection', description: 'Catches distributional shift before it materially impacts model performance.' },
  { value: '<5min', label: 'Alert Latency', description: 'From drift event to alert notification in under five minutes.' },
  { value: '50+', label: 'Drift Metrics', description: 'PSI, KS test, Wasserstein distance, and custom metrics supported.' },
  { value: '—71%', label: 'Model Failure Rate', description: 'Institutions using DriftSense report significantly fewer production incidents.' },
];

const problems = [
  {
    icon: <Activity className="w-6 h-6" />,
    title: 'Silent Degradation',
    description: 'Models trained on historical data quietly diverge from the current world. By the time performance drops, significant damage has already been done.',
  },
  {
    icon: <TrendingDown className="w-6 h-6" />,
    title: 'Concept Drift Blindness',
    description: 'Statistical drift in input features is only half the problem. Concept drift—where the relationship between inputs and outcomes shifts—is far harder to detect.',
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: 'Alert Fatigue',
    description: 'Naive monitoring tools fire hundreds of false-positive alerts. Teams learn to ignore them—until a real failure becomes catastrophic.',
  },
];

// ─── Business Impact (Orange, matching the Figma) ─────────────────────────────
const impactTheme = {
  cardBorderColor: 'border-orange-500/20',
  iconBorderColor: 'border-orange-500/20',
  accentTextColor: 'text-orange-400',
};

const impactItems = [
  { icon: <img src={impactIconFraud} alt="" className="w-5 h-5 object-contain" />, label: 'Protects revenue from fraud losses.' },
  { icon: <img src={impactIconAccuracy} alt="" className="w-5 h-5 object-contain" />, label: 'Maintains AI accuracy over time.' },
  { icon: <img src={impactIconFalse} alt="" className="w-5 h-5 object-contain" />, label: 'Minimizes manual review efforts.' },
];

const steps = [
  { step: '01', title: 'Profile Your Data & Model', description: 'DriftSense builds baseline statistical profiles of your training data distributions and model behaviour at deployment time.' },
  { step: '02', title: 'Continuously Compare', description: 'Streaming production data is compared against baselines using 50+ statistical tests. Anomalies are scored by severity and likely impact.' },
  { step: '03', title: 'Smart Alert Routing', description: 'Alerts are triaged by our intelligence layer—only material drift triggers notifications, with root-cause attribution included.' },
  { step: '04', title: 'Trigger Remediation Workflows', description: 'Automatically initiate retraining pipelines, shadow model deployments, or model rollbacks—all with a full audit log captured by ProofChain.' },
];

const processSteps = [
  { label: 'Raw AI Data', icon: IconF1 },
  { label: 'Clarity Core Engine', icon: IconF2 },
  { label: 'Clear Insights', icon: IconF3 },
];

const inputs = [
  { title: 'AI Predictions ', icon: Icon1 },
  { title: 'Live Transaction Data', icon: Icon2 },
  { title: 'Performance Metrics', icon: Icon3 }
];

const outputs = [
  { title: 'Drift Alerts', icon: Icon4 },
  { title: 'Fraud Detection Insights', icon: Icon5 },
  { title: 'Model Performance Reports', icon: Icon6 }
]
const complianceCards = [
  {
    imgSrc: icon1,
    subtitle: 'Continuous AI performance monitoring.',
  },
  {
    imgSrc: icon2,
    subtitle: 'Detects fairness and bias issues early.',
  },
  {
    imgSrc: icon3,
    subtitle: 'Provides audit-ready AI performance history.',
  },
];

const complianceTheme = {
  borderGradient: 'from-[#4a3f2d]/60 via-[#2a2419]/40 to-[#14110c]/30',
  borderGradientHover: 'hover:from-[#947c56]/80 hover:via-[#5e4e37]/70 hover:to-[#332a1e]/50',
  cardBg: 'bg-gradient-to-b from-[#292318]/90 via-[#19150f]/95 to-[#0e0c08]',
  innerBg: 'bg-gradient-to-b from-[#3b3223]/70 via-[#292318]/60 to-[#1b1710]/70',
  innerBgHover: 'group-hover:from-[#524631]/80 group-hover:via-[#3b3223]/75 group-hover:to-[#262016]/80',
  innerBorder: 'border-[#5c4e37]/50',
  innerBorderHover: 'group-hover:border-[#947c56]/70',
  ringBorder: 'border-[#dfc399]/25',
  ringBorderHover: 'group-hover:border-[#ebd2ad]/60',
  glowGradient: 'from-[#947c56]/35 to-[#dfc399]/20',
  glowGradientHover: 'group-hover:from-[#b3966a]/55 group-hover:to-[#ebd2ad]/35',
  imgShadow: 'drop-shadow-[0_4px_14px_rgba(223,195,153,0.3)]',
  imgShadowHover: 'group-hover:drop-shadow-[0_6px_20px_rgba(235,210,173,0.5)]',
  cardShadowHover: 'hover:shadow-[0_12px_35px_rgba(148,124,86,0.25)]',
}
const problemSolvedData = {
  title: "Problem It Solves",
  badge: "Core Challenges",
  description:
    "AI evaluates production models and transaction patterns to identify fraud, model drift, and operational anomalies before they impact business performance.",

  iconBackground:
    "from-[#FF4C00] to-[#992E00] shadow-[0_8px_20px_-6px_rgba(255,76,0,0.45)]",

  borderStyle:
    "bg-[linear-gradient(180deg,rgba(184,77,31,0)_0%,#B84D1F_47.12%,rgba(184,77,31,0)_100%)]",

  details: [
    {
      id: 1,
      icon: UndetectedFraudPatternImg,
      description: "Detects fraud and anomalies instantly.",
    },
    {
      id: 2,
      icon: IncreaseFalsePositives,
      description: "Identifies AI model drift in real time.",
    },
    {
      id: 3,
      icon: LackofRealTimeMonitoring,
      description: "Reduces false-positive alerts.",
    }
  ],
};

const DriftSense = () => (
  <div className="relative w-full overflow-hidden bg-background text-white">
    <SEO {...seoData.driftSense} />
    <ProductHeroBanner
      title="DriftSense"
      subtitle="Monitor AI Performance Before Risk Becomes Reality."
      description=" Detect fraud, anomalies, bias, and model drift in real time."
      productImage={ProductBannerImage}
    />

    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AboutProduct
        sectionTag="explainable ai engine"
        heading="About the Product"
        body="DriftSense continuously monitors AI models for fraud, anomalies, bias, and performance drift in real time. It helps organizations maintain accurate, reliable, and trustworthy AI systems throughout production."
        image={driftSenseAboutImg}
      />



      <ProblemItSolves
        data={problemSolvedData}
      />
      <HowItWorks
        sectionTag="process"
        heading="How It Works"
        intro="Continuously monitors AI models to detect fraud, anomalies, and performance drift instantly."
        steps={steps}
        processSteps={processSteps}
        inputs={inputs}
        outputs={outputs}
        centerBrand="DRIFTSENSE"
        centerImage={centericon}
        theme={theme}
        custom_theme={custom_theme}
        // cta={{ label: 'Explore the Documentation', href: '#' }}
      />

      <BusinessImpact
        sectionTag="The Impact"
        heading="Business Impact"
        intro="Protects revenue, reduces operational risk, and ensures AI models consistently deliver accurate business outcomes."
        items={impactItems}
        image={businessImpactImg}
        theme={impactTheme}
      />
      
      <ComplianceValue
        smalltitle="TRUST & COMPLIANCE"
        title="Compliance Value"
        description="Enables continuous AI monitoring, bias detection, and performance reporting to support governance and regulatory compliance."
        cards={complianceCards}
        theme={complianceTheme}
      />


    </div>
  </div>
);

export default DriftSense;
