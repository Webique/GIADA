import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    setIsRTL(i18n.language === "ar");
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const branches = [
    {
      key: "smoked",
      path: "/branches/smoked",
      contact: "+966 50 362 0500",
      hours: i18n.language === "ar" ? "١٢:٠٠ مساءً – ١١:٠٠ مساءً" : "12:00 PM – 11:00 PM",
      image: "/images/smoked.jpg",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.513253123403!2d46.60310851500608!3d24.73663568411454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ0JzEyLjAiTiA0NsKwMzYnMjYuMyJF!5e0!3m2!1sen!2ssa!4v1718020000000!5m2!1sen!2ssa", // placeholder embed URL
    },
    {
      key: "shawarma",
      path: "/branches/shawarma",
      contact: "+966 55 467 0004",
      hours: i18n.language === "ar" ? "٢:٠٠ مساءً – ١٢:٠٠ صباحاً" : "2:00 PM – 12:00 AM",
      image: "/images/shawarma.jpg",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.5000000000005!2d46.700000015006!3d24.7600000841145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ1JzM2LjAiTiA0NsKwNDInMDAuMCJF!5e0!3m2!1sen!2ssa!4v1718020000001!5m2!1sen!2ssa",
    },
    {
      key: "mandi",
      path: "/branches/mandi",
      contact: "+966 55 040 5012",
      hours: i18n.language === "ar" ? "١٢:٠٠ مساءً – ١٠:٠٠ مساءً" : "12:00 PM – 10:00 PM",
      image: "/images/mandi1.jpg",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.000000000001!2d46.80000001500608!3d24.78000008411454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ3JzQ4LjAiTiA0NsKwNDgnMDAuMCJF!5e0!3m2!1sen!2ssa!4v1718020000002!5m2!1sen!2ssa",
    },
  ];

  return (
    <div className="relative pt-24 pb-16 px-4 md:px-8 font-cairo min-h-screen overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-black mb-12">
          {i18n.language === "ar" ? "اختر فرعك المفضل" : "Choose Your Favorite Branch"}
        </h1>

        <div className="grid gap-8 md:grid-cols-3">
          {branches.map((branch, index) => (
<motion.div
  key={index}
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.98 }}
  className={`bg-white shadow-lg overflow-hidden transition-all duration-300 text-center`}

>
  <Link to={branch.path}>
    <div className="w-full h-64 overflow-hidden">
      <img
        src={branch.image}
        alt={t(`branches.${branch.key}`)}
        className="w-full h-full object-cover scale-105"
      />
    </div>
  </Link>


              <div className="p-5 space-y-3">
                <Link to={branch.path}>
                  <h2 className="text-xl font-semibold text-black">
                    {t(`branches.${branch.key}`)}
                  </h2>
                </Link>
                <p className="text-gray-700">
                  <strong>{isRTL ? "رقم التواصل" : "Contact"}:</strong> {branch.contact}
                </p>
                <p className="text-gray-700">
                  <strong>{isRTL ? "ساعات العمل" : "Hours"}:</strong> {branch.hours}
                </p>

                {/* Embedded Map */}
                <div className="mt-3">
                  <iframe
                    src={branch.mapEmbed}
                    width="100%"
                    height="180"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-md border border-gray-300"
                    title={`Map of ${branch.key}`}
                  ></iframe>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
