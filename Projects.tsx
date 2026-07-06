import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Settings,
  Layers,
  ExternalLink,
  BookOpen,
  Move,
  ArrowLeft,
  ChartNoAxesCombined,
} from "lucide-react";
import SplitText from "../SplitText";

const PROJECTS = [
  {
    id: "01",
    title: "Stock Analyzer",
    tagline: "How do you feel?",
    color: "#2f8fef",
    icons: [ChartNoAxesCombined, Layers],
    description: [
      "A web application that allows users to analyze and visualize stock data using the yfinance library. Users can input stock tickers, view historical data, and generate various charts to aid in investment decisions.",
    ],
    github_url: "https://github.com/SrivP/stock_sentiment_analysis",
    live_demo: "/",
  },
];

function ProjectArt({ project, large }: any) {
  const [IconA] = project.icons;
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: large ? 28 : 20,
        overflow: "hidden",
        background: "#120F17",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 78% 108%, ${project.color} 0%, ${project.color}55 32%, transparent 62%)`,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: large ? 20 : 12,
          padding: large ? "0 0 0 56px" : "0 0 0 22px",
        }}
      >
        <div
          style={{
            width: large ? 96 : 56,
            height: large ? 96 : 56,
            borderRadius: large ? 22 : 14,
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.09)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(255,255,255,0.55)",
            flexShrink: 0,
          }}
        >
          <Settings size={large ? 40 : 24} strokeWidth={1.5} />
        </div>
        <div
          style={{
            width: large ? 96 : 56,
            height: large ? 96 : 56,
            borderRadius: large ? 22 : 14,
            background:
              "linear-gradient(135deg, #ff5f4d 0%, #ff9d3d 35%, #6b5bff 70%, #3ddc97 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(0,0,0,0.55)",
            flexShrink: 0,
            boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
          }}
        >
          <IconA size={large ? 40 : 24} strokeWidth={1.75} />
        </div>
        <div
          style={{
            width: large ? 96 : 56,
            height: large ? 96 : 56,
            borderRadius: large ? 22 : 14,
            background: "#0c0c0b",
            border: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "70%",
              height: "70%",
              borderRadius: "50%",
              background: `radial-gradient(circle at 35% 30%, ${project.color}, #0c0c0b 75%)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
export default function Projects() {
  const [hovered, setHovered] = useState(PROJECTS[0].id);
  const [active, setActive] = useState<string | null>(null);

  const displayedId = active ?? hovered;
  const displayed = PROJECTS.find((p) => p.id === displayedId) || PROJECTS[0];
  const activeProject = PROJECTS.find((p) => p.id === active) || null;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: "#0b0b0a",
        color: "#f2efe6",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        .sk80 * { box-sizing: border-box; }
        .sk80-row { transition: color .35s ease; cursor: pointer; }
        .sk80-btn { transition: background .2s ease, border-color .2s ease; }
        .sk80-btn:hover { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.35) !important; }
        @media (prefers-reduced-motion: reduce) {
          .sk80-row { transition: none !important; }
        }
      `}</style>

      <div className="sk80">
        <AnimatePresence mode="popLayout">
          {!activeProject ? (
            <motion.div
              key="gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ minHeight: "100vh", width: "100%" }}
              onMouseLeave={() => setHovered(active ?? PROJECTS[0].id)}
            >
              <motion.div
                layoutId="art-frame"
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 30,
                  mass: 0.7,
                }}
                style={{
                  position: "absolute",
                  top: "clamp(24px, 8vh, 82px)",
                  left: "clamp(20px, 6vw, 98px)",
                  width: "clamp(240px, 26vw, 354px)",
                  height: "clamp(150px, 16vw, 206px)",
                }}
              >
                <ProjectArt project={displayed} large />
              </motion.div>

              <div
                style={{
                  minHeight: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  padding: "0 clamp(20px, 6vw, 98px)",
                }}
              >
                <div style={{ width: "100%", maxWidth: 420 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      marginBottom: 22,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 12,
                        letterSpacing: "0.14em",
                        color: "rgba(242,239,230,0.45)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      MY PROJECTS
                    </span>
                    <span
                      style={{
                        height: 1,
                        flex: 1,
                        background: "rgba(242,239,230,0.25)",
                      }}
                    />
                  </div>

                  {PROJECTS.map((project) => {
                    const isDisplayed = project.id === displayedId;
                    return (
                      <div
                        key={project.id}
                        className="sk80-row"
                        onMouseEnter={() => setHovered(project.id)}
                        onClick={() => setActive(project.id)}
                        style={{
                          fontSize: "clamp(22px, 3vw, 32px)",
                          fontWeight: 600,
                          lineHeight: 1.5,
                          color: isDisplayed
                            ? "#f2efe6"
                            : "rgba(242,239,230,0.32)",
                          textAlign: "right",
                        }}
                      >
                        <SplitText
                          text={project.title}
                          className="text-2xl font-semibold text-center"
                          delay={50}
                          duration={1.25}
                          ease="power3.out"
                          splitType="chars"
                          from={{ opacity: 0, y: 40 }}
                          to={{ opacity: 1, y: 0 }}
                          threshold={0.1}
                          rootMargin="-100px"
                          textAlign="center"
                        />
                        {isDisplayed && (
                          <span style={{ color: "rgba(242,239,230,0.32)" }}>
                            {" "}
                            ·
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                maxWidth: "50%",
                width: "100%",
                margin: "0 auto",
                padding: "clamp(40px, 8vh, 88px) clamp(20px, 5vw, 24px) 100px",
                overflow: "hidden",
              }}
            >
              <button
                className="sk80-btn"
                onClick={() => setActive(null)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "rgba(242,239,230,0.75)",
                  padding: "8px 14px",
                  borderRadius: 999,
                  fontSize: 13,
                  cursor: "pointer",
                  marginBottom: 28,
                }}
              >
                <ArrowLeft size={14} /> All projects
              </button>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.35 }}
                style={{
                  fontSize: "clamp(36px, 6vw, 64px)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  margin: "0 0 32px",
                }}
              >
                {activeProject.title}
              </motion.h1>

              <motion.div
                layoutId="art-frame"
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 30,
                  mass: 0.7,
                }}
                drag
                dragElastic={0.16}
                dragConstraints={{ left: -50, right: 50, top: -30, bottom: 30 }}
                whileDrag={{ scale: 1.02, cursor: "grabbing" }}
                style={{
                  width: "100%",
                  height: "clamp(260px, 42vw, 480px)",
                  cursor: "grab",
                  boxShadow: "0 40px 90px rgba(0,0,0,0.55)",
                  position: "relative",
                }}
              >
                <ProjectArt project={activeProject} large />
                <div
                  style={{
                    position: "absolute",
                    bottom: 14,
                    left: 14,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 11,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(242,239,230,0.85)",
                    background: "rgba(11,11,10,0.55)",
                    padding: "6px 10px",
                    borderRadius: 999,
                  }}
                >
                  <Move size={12} /> Drag me
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.35 }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    margin: "40px 0 22px",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "clamp(18px, 2.4vw, 22px)",
                      fontWeight: 700,
                      margin: 0,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {activeProject.tagline}
                  </h2>
                  <span
                    style={{
                      height: 1,
                      flex: 1,
                      background: "rgba(242,239,230,0.25)",
                    }}
                  />
                </div>

                {activeProject.description.map((para, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: 15,
                      lineHeight: 1.75,
                      color: "rgba(242,239,230,0.62)",
                      margin: "0 0 16px",
                      maxWidth: 640,
                    }}
                  >
                    {para}
                  </p>
                ))}

                <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
                  <button
                    className="sk80-btn"
                    onClick={() => {
                      window.location.href = activeProject.live_demo;
                    }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: "#f2efe6",
                      border: "1px solid #f2efe6",
                      color: "#0b0b0a",
                      padding: "10px 18px",
                      borderRadius: 999,
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Live Preview <ExternalLink size={14} />
                  </button>
                  <button
                    className="sk80-btn"
                    onClick={() => {
                      window.location.href = activeProject.github_url;
                    }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: "transparent",
                      border: "1px solid rgba(255,255,255,0.25)",
                      color: "#f2efe6",
                      padding: "10px 18px",
                      borderRadius: 999,
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    See Source Code <BookOpen size={14} />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
