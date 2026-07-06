import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import toast, { Toaster } from "react-hot-toast";
import StaggeredMenufrom from "./components/StaggeredMenu";
import type, { StaggeredMenuSocialItem } from "./components/StaggeredMenu";

const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText("srivprasanna@gmail.com");
    toast("Email Copied to clipboard!", {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#000",
        color: "#fff",
      },
    });
  } catch (err) {
    toast.error("Email Copied to clipboard!", {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#000",
        color: "#fff",
      },
    });
  }
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Projects />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "Projects", ariaLabel: "View my projects", link: "/projects" },
];

const socialItems: StaggeredMenuSocialItem[] = [
  {
    label: "Email",
    onClick: (e) => {
      if (e) e.preventDefault();
      handleCopy();
    },
  },
  { label: "GitHub", link: "https://github.com/srivp365" },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/srivp/" },
  {
    label: "Resume",
    link: "/resume.pdf",
  },
];

export default function App() {
  return (
    <div className="w-screen h-screen bg-black">
      <Toaster position="top-center" />
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={["#64B6AC", "#D64045"]}

        accentColor="#F0B67F"
        isFixed={true}
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
      />
      <AnimatedRoutes />
    </div>
  );
}
