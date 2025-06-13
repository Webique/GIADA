import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Smoked from "./pages/Smoked";      // ✅ Correct now
import Shawarma from "./pages/Shawarma";  // ✅ Also correct
import Mandi from "./pages/Mandi";



export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <Router>
      <div className="relative font-cairo bg-light min-h-screen overflow-hidden">
        {/* Global Background Pattern */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center blur-sm opacity-10"
          style={{ backgroundImage: "url('/images/bg-pattern.jpg')" }}
        />

        {/* Content Wrapper */}
        <div className="relative z-10">
          <Navbar />

          <main className="pt-20 px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/branches/smoked" element={<Smoked />} />
              <Route path="/branches/shawarma" element={<Shawarma />} />
              <Route path="/branches/mandi" element={<Mandi />} />

            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
