import React, { useState, useEffect, useRef } from "react";
import styles from "./SkillRadar.module.css";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

interface Skill {
  name: string;
  value: number;
  color: string;
  icon: string;
}

interface SkillCategory {
  label: string;
  key: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    key: "frontend",
    skills: [
      { name: "React", value: 95, color: "var(--primary-color)", icon: "⚛" },
      {
        name: "TypeScript",
        value: 90,
        color: "var(--primary-color)",
        icon: "TS",
      },
      { name: "CSS", value: 88, color: "var(--secondary-color)", icon: "🎨" },
      {
        name: "JavaScript",
        value: 82,
        color: "var(--secondary-color)",
        icon: "N",
      },
      {
        name: "Three.js",
        value: 70,
        color: "var(--primary-color)",
        icon: "3D",
      },
      {
        name: "Testing",
        value: 85,
        color: "var(--secondary-color)",
        icon: "✓",
      },
    ],
  },
  {
    label: "Backend",
    key: "backend",
    skills: [
      // { name: "Node.js", value: 85, color: "var(--primary-color)", icon: "🟢" },
      {
        name: "Laravel",
        value: 65,
        color: "var(--secondary-color)",
        icon: "🐍",
      },
      {
        name: "REST APIs",
        value: 92,
        color: "var(--primary-color)",
        icon: "↗",
      },
      { name: "SQL", value: 72, color: "var(--secondary-color)", icon: "◈" },
      // { name: "PostgreSQL", value: 80, color: "var(--primary-color)", icon: "🐘" },
      // { name: "MongoDB", value: 75, color: "var(--secondary-color)", icon: "🍃" },
    ],
  },
  {
    label: "Tools",
    key: "tools",
    skills: [
      { name: "Git", value: 95, color: "var(--primary-color)", icon: "⑂" },
      {
        name: "Docker",
        value: 60,
        color: "var(--secondary-color)",
        icon: "🐋",
      },
      { name: "N8N", value: 90, color: "var(--primary-color)", icon: "⚡" },
      { name: "CI/CD", value: 75, color: "var(--secondary-color)", icon: "∞" },
      { name: "jMeter", value: 70, color: "var(--primary-color)", icon: "✏" },
      {
        name: "Playwright",
        value: 72,
        color: "var(--secondary-color)",
        icon: "☁",
      },
    ],
  },
];

// ── Radar Math ──────────────────────────────────────────────────────
const polarToCartesian = (
  cx: number,
  cy: number,
  r: number,
  angleIndex: number,
  total: number
) => {
  const angle = (Math.PI * 2 * angleIndex) / total - Math.PI / 2;
  return {
    x: cx + r * Math.cos(angle),
    y: cy + r * Math.sin(angle),
  };
};

const buildPolygonPoints = (
  cx: number,
  cy: number,
  values: number[],
  maxR: number
): string => {
  return values
    .map((val, i) => {
      const r = (val / 100) * maxR;
      const pt = polarToCartesian(cx, cy, r, i, values.length);
      return `${pt.x},${pt.y}`;
    })
    .join(" ");
};

// ── Radar Chart SVG ─────────────────────────────────────────────────
interface RadarChartProps {
  skills: Skill[];
  animated: boolean;
}

const RadarChart: React.FC<RadarChartProps> = ({ skills, animated }) => {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>();

  const SIZE = 320;
  const CX = SIZE / 2;
  const CY = SIZE / 2;
  const MAX_R = 110;
  const RINGS = [20, 40, 60, 80, 100];
  const N = skills.length;

  // Reset progress when skills change (tab switch)
  useEffect(() => {
    setProgress(0);
  }, [skills]);

  // Animate progress 0 → 1 when visible
  useEffect(() => {
    if (!animated) return;

    // Small delay so reset takes effect first
    const initDelay = setTimeout(() => {
      let start: number | null = null;
      const duration = 1400;

      const step = (ts: number) => {
        if (!start) start = ts;
        const elapsed = ts - start;
        const p = Math.min(elapsed / duration, 1);
        setProgress(1 - Math.pow(1 - p, 3));
        if (p < 1) rafRef.current = requestAnimationFrame(step);
      };

      rafRef.current = requestAnimationFrame(step);
    }, 100);

    return () => {
      clearTimeout(initDelay);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animated, skills]);

  const animatedValues = skills.map((s) => s.value * progress);

  const ringPoints = RINGS.map((pct) =>
    Array.from({ length: N }, (_, i) =>
      polarToCartesian(CX, CY, (pct / 100) * MAX_R, i, N)
    )
      .map((p) => `${p.x},${p.y}`)
      .join(" ")
  );

  const axes = Array.from({ length: N }, (_, i) =>
    polarToCartesian(CX, CY, MAX_R, i, N)
  );

  const labelPositions = Array.from({ length: N }, (_, i) =>
    polarToCartesian(CX, CY, MAX_R + 34, i, N)
  );

  const dataPoints = buildPolygonPoints(CX, CY, animatedValues, MAX_R);
  const gradId = `radarGrad`;

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className={styles.radarSvg}
      aria-label="Skill radar chart"
      overflow="visible"
    >
      <defs>
        <radialGradient id={gradId} cx="50%" cy="50%" r="50%">
          <stop
            offset="0%"
            stopColor="var(--primary-color)"
            stopOpacity="0.5"
          />
          <stop
            offset="100%"
            stopColor="var(--secondary-color)"
            stopOpacity="0.15"
          />
        </radialGradient>
        <filter id="radarGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Grid rings */}
      {ringPoints.map((pts, i) => (
        <polygon
          key={i}
          points={pts}
          fill="none"
          stroke="var(--primary-color)"
          strokeOpacity="0.15"
          strokeWidth="1"
        />
      ))}

      {/* Ring % labels */}
      {RINGS.map((pct, i) => {
        const pt = polarToCartesian(CX, CY, (pct / 100) * MAX_R, 0, N);
        return (
          <text
            key={i}
            x={CX + 4}
            y={pt.y - 4}
            fontSize="9"
            fill="var(--text-light)"
            fillOpacity="0.6"
            textAnchor="start"
          >
            {pct}%
          </text>
        );
      })}

      {/* Axis lines */}
      {axes.map((pt, i) => (
        <line
          key={i}
          x1={CX}
          y1={CY}
          x2={pt.x}
          y2={pt.y}
          stroke="var(--primary-color)"
          strokeOpacity="0.15"
          strokeWidth="1"
        />
      ))}

      {/* Data polygon fill */}
      <polygon
        points={dataPoints}
        fill={`url(#${gradId})`}
        stroke="none"
        opacity="0.7"
      />

      {/* Data polygon stroke */}
      <polygon
        points={dataPoints}
        fill="none"
        stroke="var(--primary-color)"
        strokeWidth="2.5"
        filter="url(#radarGlow)"
        strokeLinejoin="round"
      />

      {/* Skill dots */}
      {animatedValues.map((val, i) => {
        const r = (val / 100) * MAX_R;
        const pt = polarToCartesian(CX, CY, r, i, N);
        return (
          <circle
            key={i}
            cx={pt.x}
            cy={pt.y}
            r="5"
            fill={skills[i].color}
            stroke="var(--bg-white)"
            strokeWidth="2"
            filter="url(#radarGlow)"
          />
        );
      })}

      {/* Skill labels */}
      {labelPositions.map((pt, i) => {
        const skill = skills[i];
        const textAnchor =
          pt.x < CX - 10 ? "end" : pt.x > CX + 10 ? "start" : "middle";
        return (
          <g key={i}>
            <text
              x={pt.x}
              y={pt.y - 2}
              fontSize="11"
              fontWeight="700"
              fill="var(--text-dark)"
              fillOpacity="0.9"
              textAnchor={textAnchor}
              dominantBaseline="auto"
            >
              {skill.icon} {skill.name}
            </text>
            <text
              x={pt.x}
              y={pt.y + 13}
              fontSize="10"
              fill={skill.color}
              textAnchor={textAnchor}
              fontWeight="700"
            >
              {Math.round(skill.value * progress)}%
            </text>
          </g>
        );
      })}
    </svg>
  );
};

// ── Skill Bar ───────────────────────────────────────────────────────
interface SkillBarProps {
  skill: Skill;
  animated: boolean;
  delay: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, animated, delay }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Reset on skill change
    setWidth(0);
  }, [skill]);

  useEffect(() => {
    if (!animated) return;
    const timeout = setTimeout(() => {
      setWidth(skill.value);
    }, delay + 100);
    return () => clearTimeout(timeout);
  }, [animated, skill.value, delay, skill]);

  return (
    <div className={styles.skillBar}>
      <div className={styles.skillBarHeader}>
        <span className={styles.skillBarName}>
          <span className={styles.skillBarIcon}>{skill.icon}</span>
          {skill.name}
        </span>
        <span className={styles.skillBarValue} style={{ color: skill.color }}>
          {skill.value}%
        </span>
      </div>
      <div className={styles.skillBarTrack}>
        <div
          className={styles.skillBarFill}
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`,
            boxShadow: `0 0 12px rgba(var(--primary-rgb), 0.5)`,
            transition: `width 1s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
          }}
        />
      </div>
    </div>
  );
};
const calculateSkillStats = () => {
  const allSkills = skillCategories.flatMap((cat) => cat.skills);
  const total = allSkills.length;
  const avg = allSkills.reduce((sum, skill) => sum + skill.value, 0) / total;
  return {
    total: `${total}+`,
    avg: `${Math.round(avg)}%`,
  };
};

// ── Main Component ──────────────────────────────────────────────────
const SkillRadar: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05);

  const current = skillCategories[activeCategory];
const { total, avg } = calculateSkillStats();
  return (
    <section id="skills" className={styles.section} ref={sectionRef}>
      <div className={styles.bgGrid}></div>
      <div className={styles.bgGlow}></div>

      <div className={styles.container}>
        {/* Header - always visible, no animation class */}
        <div className={styles.header}>
          <span className={styles.sectionLabel}>◈ EXPERTISE</span>
          <h2 className={styles.sectionTitle}>Skills & Proficiency</h2>
          <p className={styles.sectionSubtitle}>
            A visual map of my technical toolkit — hover each skill to explore
            proficiency levels.
          </p>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          {skillCategories.map((cat, i) => (
            <button
              key={cat.key}
              className={`${styles.tab} ${
                activeCategory === i ? styles.tabActive : ""
              }`}
              onClick={() => setActiveCategory(i)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main Grid - always visible */}
        <div className={styles.content}>
          {/* Radar */}
          <div className={styles.chartWrapper}>
            <div className={styles.chartInner}>
              <RadarChart
                key={activeCategory}
                skills={current.skills}
                animated={isVisible}
              />
            </div>
            <p className={styles.chartLabel}>
              <span>{current.label}</span> Skills Overview
            </p>
          </div>

          {/* Bars */}
          <div className={styles.barsWrapper}>
            <h3 className={styles.barsTitle}>Proficiency Breakdown</h3>
            <div className={styles.bars}>
              {current.skills.map((skill, i) => (
                <SkillBar
                  key={`${activeCategory}-${skill.name}`}
                  skill={skill}
                  animated={isVisible}
                  delay={i * 120}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          {[
            { label: "Technologies", value: total },
            { label: "Avg Proficiency", value: avg },
            { label: "Years Learning", value: "5+" },
            { label: "Projects Built", value: "50+" },
          ].map((stat, i) => (
            <div
              key={i}
              className={styles.stat}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillRadar;
