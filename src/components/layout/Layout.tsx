import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BackToTop, ScrollProgress } from "../motion";
import { EASE } from "../motion/ease";

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ScrollProgress />
      <Header />
      <motion.main
        key={location.pathname}
        className="flex-1"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <Outlet />
      </motion.main>
      <Footer />
      <BackToTop />
    </div>
  );
}
