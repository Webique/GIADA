import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function Shawarma() {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    setIsRTL(i18n.language === "ar");
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div className="relative pt-24 pb-16 px-6 md:px-16 font-cairo min-h-screen">
      <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-8 space-y-8">
        {/* Title */}
        <h1 className={`text-3xl md:text-4xl font-bold text-black ${isRTL ? "text-right" : "text-left"}`}>
          {isRTL ? "فرع الشاورما" : "Shawarma Branch"}
        </h1>

        {/* Description */}
        <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>
          {isRTL
            ? "نقدم في فرع الشاورما تجربة عصرية للشاورما تجمع بين النكهات التقليدية والإبداع في التقديم باستخدام أجود المكونات."
            : "At our Shawarma branch, we offer a modern twist on classic shawarma, combining authentic flavors with creative presentation using premium ingredients."}
        </p>

        {/* Contact Info */}
        <div className={`text-gray-700 space-y-2 ${isRTL ? "text-right" : "text-left"}`}>
          <p><strong>{isRTL ? "ساعات العمل" : "Opening Hours"}:</strong> {isRTL ? "٢:٠٠ مساءً – ١٢:٠٠ صباحاً" : "2:00 PM – 12:00 AM"}</p>
          <p><strong>{isRTL ? "رقم التواصل" : "Phone"}:</strong> +966 55 467 0004</p>
        </div>

        {/* Menu Button */}
        <div className={isRTL ? "text-right" : "text-left"}>
          <a
            href="/menus/shawerma.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-6 py-2 rounded-lg shadow hover:bg-opacity-90 transition"
          >
            {isRTL ? "عرض المنيو" : "View Menu"}
          </a>
        </div>

        {/* Embedded Map */}
        <div className="rounded overflow-hidden border border-gray-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.5000000000005!2d46.700000015006!3d24.7600000841145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ1JzM2LjAiTiA0NsKwNDInMDAuMCJF!5e0!3m2!1sen!2ssa!4v1718020000001!5m2!1sen!2ssa"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shawarma Branch Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
