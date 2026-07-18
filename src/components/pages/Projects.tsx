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
import Discord_crm from "../../assets/discord-crm";

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
    live_demo: "https://stock-sentiment-analysis-rho.vercel.app/",
  },
  {
    id: "02",
    title: "Discord-CRM",
    tagline: "A CRM (Contact Relational Management) System built on top of Discord",
    color: "#2f8fef",
    icons: [Discord_crm, Layers],
    description: [
      "A Discord bot, built using pycord that allows users to manage people they talk to on a day to day basis. It features smart scheduling based on a tier list so you spend more time with the people you care about, without being too buggy 😉",
    ],
    github_url: "https://github.com/srivp365/discord-crm",
    live_demo: "https://github.com/srivp365/discord-crm",
  },

];

function ProjectArt({ project, large }: any) {
  const [IconA] = project.icons;
  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-[#120F17] border border-white/[0.07] mt-2.5 ${
        large ? "rounded-[28px]" : "rounded-[20px]"
      }`}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 78% 108%, ${project.color} 0%, ${project.color}55 32%, transparent 62%)`,
        }}
      />
      <div
        className={`relative z-10 h-full flex items-center ${
          large ? "gap-5 pl-14" : "gap-3 pl-[22px]"
        }`}
      >
        <div
          className={`flex items-center justify-center shrink-0 bg-white/[0.07] border border-white/[0.09] text-white/[0.55] ${
            large ? "w-24 h-24 rounded-[22px]" : "w-14 h-14 rounded-[14px]"
          }`}
        >
          <Settings size={large ? 40 : 24} strokeWidth={1.5} />
        </div>

        <div
          className={`flex items-center justify-center shrink-0 text-black/[0.55] shadow-[0_8px_20px_rgba(0,0,0,0.35)] bg-[linear-gradient(135deg,#ff5f4d_0%,#ff9d3d_35%,#6b5bff_70%,#3ddc97_100%)] ${
            large ? "w-24 h-24 rounded-[22px]" : "w-14 h-14 rounded-[14px]"
          }`}
        >
          <IconA size={large ? 40 : 24} strokeWidth={1.75} />
        </div>

        <div
          className={`flex items-center justify-center shrink-0 relative overflow-hidden bg-[#0c0c0b] border border-white/[0.08] ${
            large ? "w-24 h-24 rounded-[22px]" : "w-14 h-14 rounded-[14px]"
          }`}
        >
          <div
            className="w-[70%] h-[70%] rounded-full"
            style={{
              background: `radial-gradient(circle at 35% 30%, ${project.color}, #0c0c0b 75%)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [hovered, setHovered] = useState(PROJECTS[0].id);
  const [active, setActive] = useState<string | null>(null);

  const displayedId = active ?? hovered;
  const displayed = PROJECTS.find((p) => p.id === displayedId) || PROJECTS[0];
  const activeProject = PROJECTS.find((p) => p.id === active) || null;

  return (
    <div className="relative w-full min-h-screen bg-[#0b0b0a] text-[#f2efe6] font-['Inter',-apple-system,BlinkMacSystemFont,sans-serif] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
      `}</style>

      <div className="box-border">
        <AnimatePresence mode="popLayout">
          {!activeProject ? (
            <motion.div
              key="gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="min-h-screen w-full"
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
                className="absolute top-[clamp(24px,8vh,82px)] left-[clamp(20px,6vw,98px)] w-[clamp(240px,26vw,354px)] h-[clamp(150px,16vw,206px)]"
              >
                <ProjectArt project={displayed} large />
              </motion.div>

              <div className="min-h-screen flex flex-col justify-center items-end px-[clamp(20px,6vw,98px)]">
                <div className="w-full max-w-[420px]">
                  <div className="flex items-center gap-[14px] mb-[22px]">
                    <span className="text-xs tracking-[0.14em] text-[#f2efe6]/45 whitespace-nowrap">
                      MY PROJECTS
                    </span>
                    <span className="h-px flex-1 bg-[#f2efe6]/25" />
                  </div>

                  {PROJECTS.map((project) => {
                    const isDisplayed = project.id === displayedId;
                    return (
                      <div
                        key={project.id}
                        onMouseEnter={() => setHovered(project.id)}
                        onClick={() => setActive(project.id)}
                        className={`cursor-pointer transition-colors duration-350 ease-in-out text-[clamp(22px,3vw,32px)] font-semibold leading-relaxed text-right motion-reduce:transition-none ${
                          isDisplayed ? "text-[#f2efe6]" : "text-[#f2efe6]/30"
                        }`}
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
                          <span className="text-[#f2efe6]/30"> ·</span>
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
              className="max-w-225 w-[80%] mx-auto pt-[clamp(90px,8vh,88px)] px-[clamp(20px,5vw,24px)] pb-25 overflow-hidden"
            >
              <button
                onClick={() => setActive(null)}
                className="inline-flex items-center gap-2 bg-transparent border border-white/[0.18] text-[#f2efe6]/75 px-3.5 py-2 rounded-full text-[13px] cursor-pointer mb-7 transition-all duration-200 hover:bg-white/[0.06] hover:border-white/[0.35]"
              >
                <ArrowLeft size={14} /> All projects
              </button>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.35 }}
                className="text-[clamp(36px,6vw,64px)] font-extrabold tracking-tight mb-8"
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
                className="w-full h-[clamp(260px,42vw,480px)] cursor-grab shadow-[0_40px_90px_rgba(0,0,0,0.55)] relative"
              >
                <ProjectArt project={activeProject} large />
                <div className="absolute bottom-3.5 left-3.5 flex items-center gap-1.5 text-[11px] tracking-[0.08em] uppercase text-[#f2efe6]/85 bg-[#0b0b0a]/[0.55] px-2.5 py-1.5 rounded-full">
                  <Move size={12} /> Drag me
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.35 }}
              >
                <div className="flex items-center gap-4 mt-10 mb-[22px]">
                  <h2 className="text-[clamp(18px,2.4vw,22px)] font-bold m-0 whitespace-nowrap">
                    {activeProject.tagline}
                  </h2>
                  <span className="h-px flex-1 bg-[#f2efe6]/25" />
                </div>

                {activeProject.description.map((para, i) => (
                  <p
                    key={i}
                    className="text-[15px] leading-relaxed text-[#f2efe6]/60 mb-4 max-w-[640px]"
                  >
                    {para}
                  </p>
                ))}

                <div className="flex gap-3 mt-6 flex-wrap">
                  <button
                    onClick={() => {
                      window.location.href = activeProject.live_demo;
                    }}
                    className="inline-flex items-center gap-2 bg-[#f2efe6] border border-[#f2efe6] text-[#0b0b0a] px-[18px] py-2.5 rounded-full text-[13px] font-semibold cursor-pointer transition-all duration-200 hover:bg-white/[0.06] hover:border-white/[0.35] hover:text-[#f2efe6]"
                  >
                    Live Preview <ExternalLink size={14} />
                  </button>
                  <button
                    onClick={() => {
                      window.location.href = activeProject.github_url;
                    }}
                    className="inline-flex items-center gap-2 bg-transparent border border-white/25 text-[#f2efe6] px-[18px] py-2.5 rounded-full text-[13px] font-semibold cursor-pointer transition-all duration-200 hover:bg-white/[0.06] hover:border-white/[0.35]"
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
