import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const toggleLang = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
        setBranchesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setBranchesOpen(false);
  }, [location]);

  return (
    <nav className="bg-white shadow-md font-cairo fixed top-0 w-full z-50" ref={menuRef}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-14 w-auto" />
        </Link>

        {/* Desktop Links */}
        <div className={`hidden md:flex items-center ${i18n.language === "ar" ? "space-x-reverse space-x-6" : "space-x-6"}`}>
          <Link to="/" className="text-black hover:text-primary transition text-base">{t("nav.home")}</Link>
          <Link to="/about" className="text-black hover:text-primary transition text-base">{t("nav.about")}</Link>

          {/* Branches Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setBranchesOpen(true)}
            onMouseLeave={() => setBranchesOpen(false)}
          >
            <span className="text-black hover:text-primary transition cursor-pointer text-base">{t("nav.branches")}</span>
            <AnimatePresence>
              {branchesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute bg-white shadow-lg rounded-md mt-2 py-2 px-4 min-w-[150px] space-y-2"
                >
                  <Link to="/branches/smoked" className="block hover:text-primary">{t("branches.smoked")}</Link>
                  <Link to="/branches/shawarma" className="block hover:text-primary">{t("branches.shawarma")}</Link>
                  <Link to="/branches/mandi" className="block hover:text-primary">{t("branches.mandi")}</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop Language Toggle */}
        <button
          onClick={toggleLang}
          className="hidden md:block text-sm text-gray-600 hover:text-primary ml-6"
        >
          🌐 {i18n.language === "en" ? "العربية" : "English"}
        </button>

        {/* Mobile Controls - perfectly aligned */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="text-xl text-gray-600 hover:text-primary"
          >
            🌐
          </button>
          <button
            className="text-xl text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            layout
            className="md:hidden bg-white px-4 pt-3 pb-4 space-y-3 overflow-hidden -mt-2"
          >
            <Link to="/" className="block text-black hover:text-primary">{t("nav.home")}</Link>
            <Link to="/about" className="block text-black hover:text-primary">{t("nav.about")}</Link>

            <div>
              <p className="text-gray-600 font-medium">{t("nav.branches")}</p>
              <Link to="/branches/smoked" className="block hover:text-primary">{t("branches.smoked")}</Link>
              <Link to="/branches/shawarma" className="block hover:text-primary">{t("branches.shawarma")}</Link>
              <Link to="/branches/mandi" className="block hover:text-primary">{t("branches.mandi")}</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
