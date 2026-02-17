import React, { useState } from "react";
import styles from "./Timeline.module.css";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

type TimelineCategory = "all" | "work" | "education" | "achievement";

interface TimelineItem {
  id: number;
  year: string;
  month: string;
  title: string;
  company: string;
  location: string;
  description: string;
  tags: string[];
  category: "work" | "education" | "achievement";
  icon: string;
  color: string;
  highlights: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "2024",
    month: "Present",
    title: "MBA Student",
    company: "Geomatika University",
    location: "Malaysia",
    description:
      "Pursuing MBA to bridge technology implementation with business strategy and leadership.",
    tags: ["Business Strategy", "Leadership", "Management"],
    category: "education",
    icon: "🎓",
    color: "#4facfe",
    highlights: [
      "Business Strategy & Analytics",
      "Technology Management",
      "Leadership Development",
    ],
  },
  {
    id: 2,
    year: "2023",
    month: "Oct",
    title: "Workflow Automation Engineer",
    company: "Maids.cc",
    location: "Remote",
    description:
      "Designed and implemented workflow automations using N8N, streamlining business processes and reducing manual operations by 60%.",
    tags: ["N8N", "Automation", "API Integration", "Node.js"],
    category: "work",
    icon: "⚡",
    color: "#667eea",
    highlights: [
      "Reduced manual operations by 60%",
      "Integrated 15+ third-party APIs",
      "Built real-time data pipelines",
    ],
  },
  {
    id: 3,
    year: "2022",
    month: "Mar",
    title: "Master's in Web Science",
    company: "University",
    location: "Syria",
    description:
      "Graduated with a Master's degree in Web Science, focusing on distributed systems, semantic web, and full-stack development.",
    tags: ["Web Science", "Research", "Distributed Systems"],
    category: "education",
    icon: "🎓",
    color: "#4facfe",
    highlights: [
      "Thesis on Distributed Web Systems",
      "Published research paper",
      "GPA: 3.8/4.0",
    ],
  },
  {
    id: 4,
    year: "2021",
    month: "Jan",
    title: "Software Engineer & QA",
    company: "Syriatel Mobile Telecom",
    location: "Syria",
    description:
      "Full-cycle software engineering and testing for one of Syria's largest telecom companies. Built and tested mission-critical systems.",
    tags: ["React", "Testing", "TypeScript", "QA", "Node.js"],
    category: "work",
    icon: "💼",
    color: "#667eea",
    highlights: [
      "Led testing for 20+ features",
      "Reduced bug rate by 40%",
      "Mentored 3 junior developers",
    ],
  },
  {
    id: 5,
    year: "2019",
    month: "Jun",
    title: "Frontend Developer",
    company: "Source Code",
    location: "Syria",
    description:
      "Built modern web interfaces with React and TypeScript, delivering pixel-perfect designs and smooth user experiences.",
    tags: ["React", "TypeScript", "CSS", "Redux"],
    category: "work",
    icon: "💻",
    color: "#667eea",
    highlights: [
      "Delivered 15+ client projects",
      "Improved performance by 35%",
      "Introduced TypeScript to team",
    ],
  },
  {
    id: 6,
    year: "2018",
    month: "Sep",
    title: "50+ Projects Milestone",
    company: "Personal Achievement",
    location: "Global",
    description:
      "Reached 50+ delivered projects milestone spanning web apps, mobile interfaces, and enterprise solutions.",
    tags: ["Milestone", "Projects", "Achievement"],
    category: "achievement",
    icon: "🏆",
    color: "#f093fb",
    highlights: [
      "50+ projects delivered",
      "4 different industries",
      "20+ satisfied clients",
    ],
  },
];

const categories = [
  { key: "all" as TimelineCategory, label: "All", icon: "◈" },
  { key: "work" as TimelineCategory, label: "Work", icon: "💼" },
  { key: "education" as TimelineCategory, label: "Education", icon: "🎓" },
  { key: "achievement" as TimelineCategory, label: "Achievements", icon: "🏆" },
];

interface TimelineCardProps {
  item: TimelineItem;
  index: number;
  isLeft: boolean;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ item, index, isLeft }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`${styles.timelineItem} ${isLeft ? styles.left : styles.right} ${
        isVisible
          ? isLeft
            ? "animate-on-scroll fade-in-left visible"
            : "animate-on-scroll fade-in-right visible"
          : "animate-on-scroll"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Connector Line & Dot */}
      <div className={styles.connector}>
        <div
          className={styles.dot}
          style={{ background: item.color, boxShadow: `0 0 20px ${item.color}` }}
        >
          <span className={styles.dotIcon}>{item.icon}</span>
        </div>
      </div>

      {/* Card */}
      <div
        className={`${styles.card} ${isExpanded ? styles.expanded : ""}`}
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ borderColor: isExpanded ? item.color : "transparent" }}
      >
        {/* Card Header */}
        <div className={styles.cardHeader}>
          <div className={styles.cardMeta}>
            <span className={styles.date}>
              {item.month} {item.year}
            </span>
            <span
              className={styles.categoryBadge}
              style={{ background: `${item.color}22`, color: item.color, borderColor: `${item.color}44` }}
            >
              {item.category}
            </span>
          </div>
          <div
            className={styles.expandIcon}
            style={{ color: item.color }}
          >
            {isExpanded ? "−" : "+"}
          </div>
        </div>

        {/* Card Title */}
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <div className={styles.cardCompany}>
          <span className={styles.companyName}>{item.company}</span>
          <span className={styles.separator}>·</span>
          <span className={styles.location}>📍 {item.location}</span>
        </div>

        {/* Description */}
        <p className={styles.cardDescription}>{item.description}</p>

        {/* Tags */}
        <div className={styles.tags}>
          {item.tags.map((tag) => (
            <span
              key={tag}
              className={styles.tag}
              style={{ background: `${item.color}15`, color: item.color }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expandable Highlights */}
        <div className={`${styles.highlights} ${isExpanded ? styles.visible : ""}`}>
          <div className={styles.highlightsInner}>
            <h4 className={styles.highlightsTitle}>Key Highlights</h4>
            <ul className={styles.highlightsList}>
              {item.highlights.map((highlight, i) => (
                <li key={i} className={styles.highlightItem}
                  style={{ animationDelay: `${i * 0.1}s` }}>
                  <span className={styles.highlightDot} style={{ background: item.color }}></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Glow Effect */}
        <div
          className={styles.cardGlow}
          style={{ background: `radial-gradient(circle at 50% 0%, ${item.color}22, transparent 70%)` }}
        ></div>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<TimelineCategory>("all");
  const titleAnimation = useScrollAnimation(0.1);

  const filtered = timelineData.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <section id="timeline" className={styles.timeline}>
      {/* Background Effects */}
      <div className={styles.bgGlow1}></div>
      <div className={styles.bgGlow2}></div>

      <div className={styles.container}>
        {/* Header */}
        <div
          ref={titleAnimation.ref}
          className={`${styles.header} animate-on-scroll fade-in-up ${
            titleAnimation.isVisible ? "visible" : ""
          }`}
        >
          <span className={styles.sectionLabel}>◈ MY JOURNEY</span>
          <h2 className={styles.sectionTitle}>Career Timeline</h2>
          <p className={styles.sectionSubtitle}>
            From first line of code to leading complex systems — every step shaped who I am today.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`${styles.filterBtn} ${
                activeCategory === cat.key ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(cat.key)}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Timeline Track */}
        <div className={styles.track}>
          {/* Center Line */}
          <div className={styles.centerLine}>
            <div className={styles.centerLineGlow}></div>
          </div>

          {/* Timeline Items */}
          {filtered.map((item, index) => (
            <TimelineCard
              key={item.id}
              item={item}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCta}>
          <span className={styles.ctaText}>The journey continues...</span>
          <div className={styles.ctaDots}>
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
