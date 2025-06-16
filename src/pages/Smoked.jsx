import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function Smoked() {
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
          {isRTL ? "فرع اللحوم المدخنة" : "Smoked Meats Branch"}
        </h1>

        {/* Description */}
        <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>
          {isRTL
            ? "يقدم هذا الفرع تجربة غنية لعشاق اللحوم، حيث يتم تحضير اللحوم المدخنة بعناية فائقة باستخدام تقنيات الطهي التقليدية والمعاصرة."
            : "This branch offers a rich experience for meat lovers, serving carefully smoked meats using a blend of traditional and modern techniques."}
        </p>

        {/* Contact Info */}
        <div className={`text-gray-700 space-y-2 ${isRTL ? "text-right" : "text-left"}`}>
          <p><strong>{isRTL ? "ساعات العمل" : "Opening Hours"}:</strong> {isRTL ? "١٢:٠٠ مساءً – ١١:٠٠ مساءً" : "12:00 PM – 11:00 PM"}</p>
          <p><strong>{isRTL ? "رقم التواصل" : "Phone"}:</strong> +966 50 362 0500</p>
        </div>

        {/* Menu Button */}
        <div className={isRTL ? "text-right" : "text-left"}>
          <a
            href="/menus/smokedmeat.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-6 py-2 rounded-lg shadow hover:bg-opacity-90 transition"
          >
            {isRTL ? "عرض المنيو" : "View Menu"}
          </a>
        </div>

        {/* ✅ Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src="/images/smoked1.jpg" alt="Smoked meat 1" className="w-full h-64 object-cover rounded-lg shadow" />
          <img src="/images/smoked2.jpg" alt="Smoked meat 2" className="w-full h-64 object-cover rounded-lg shadow" />
          <img src="/images/smoked3.jpg" alt="Smoked meat 3" className="w-full h-64 object-cover rounded-lg shadow" />
        </div>

        {/* Embedded Map */}
        <div className="rounded overflow-hidden border border-gray-300">
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.30504289747!2d50.0401180756478!3d26.478121476908967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49ffe958fea647%3A0xf94fca84bdc05b82!2z2KzZitin2K_YpyAtINin2YTYrtix2YjZgSDYp9mE2YXYr9iu2YYgfCBHSUFEQSAtIFNNT0tFRCBMQU1C!5e0!3m2!1sen!2ssa!4v1750023014659!5m2!1sen!2ssa"
  width="100%"
  height="300"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Smoked Meats Branch Map"
/>

        </div>
      </div>
    </div>
  );
}
