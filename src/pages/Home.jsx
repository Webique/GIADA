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
      hours: isRTL ? "١٢:٠٠ مساءً – ١١:٠٠ مساءً" : "12:00 PM – 11:00 PM",
      image: "/images/smoked.jpg",
      menuUrl: "/menus/smokedmeat.pdf",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.30504289747!2d50.0401180756478!3d26.478121476908967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49ffe958fea647%3A0xf94fca84bdc05b82!2z2KzZitin2K_YpyAtINin2YTYrtix2YjZgSDYp9mE2YXYr9iu2YYgfCBHSUFEQSAtIFNNT0tFRCBMQU1C!5e0!3m2!1sen!2ssa!4v1750023014659!5m2!1sen!2ssa",
    },
    {
      key: "shawarma",
      path: "/branches/shawarma",
      contact: "+966 55 467 0004",
      hours: isRTL ? "٢:٠٠ مساءً – ١٢:٠٠ صباحاً" : "2:00 PM – 12:00 AM",
      image: "/images/shawarma.jpg",
      menuUrl: "/menus/shawarma.pdf",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.2047976120894!2d50.04559067564824!3d26.48135007690693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49ffb675caa705%3A0xdf1087deb006c23e!2zR0lBREEgU0hBV0FSTUEgJiBHUklMTFMgfCDYrNmK2KfYr9inINi02KfZiNix2YXYpyDZiNin2YTZhdi02YjZitin2Ko!5e0!3m2!1sen!2ssa!4v1750022638604!5m2!1sen!2ssa",
    },
    {
      key: "mandi",
      path: "/branches/mandi",
      contact: "+966 55 040 5012",
      hours: isRTL ? "١٢:٠٠ مساءً – ١٠:٠٠ مساءً" : "12:00 PM – 10:00 PM",
      image: "/images/mandi1.jpg",
      menuUrl: "/menus/mandi.pdf",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.4130712104793!2d50.057432399999996!3d26.4746418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49ffce8155fdd1%3A0x69de817a485ece64!2zR0lBREEgTUFOREkgfCDYrNmK2KfYr9inIC0g2YXZhtiv2Yo!5e0!3m2!1sen!2ssa!4v1750022790965!5m2!1sen!2ssa",
    },
  ];

  return (
    <div className="relative pt-24 pb-16 px-4 md:px-8 font-cairo min-h-screen overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-black mb-12">
          {isRTL ? "اختر فرعك المفضل" : "Choose Your Favorite Branch"}
        </h1>

        <div className="grid gap-8 md:grid-cols-3">
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white shadow-lg overflow-hidden transition-all duration-300 text-center"
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

                {/* 🌟 View Menu Button Above the Map */}
                <a
                  href={branch.menuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-8 py-3 text-lg font-bold tracking-wide rounded-full bg-gradient-to-r from-black to-gray-800 text-white shadow-xl hover:shadow-2xl hover:brightness-110 transition-all duration-300"
                >
                  {isRTL ? "عرض المنيو" : "View Menu"}
                </a>

                {/* 🗺️ Embedded Map */}
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
