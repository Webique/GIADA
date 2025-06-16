import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function Mandi() {
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
          {isRTL ? "فرع المندي" : "Mandi Branch"}
        </h1>

        {/* Description */}
        <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>
          {isRTL
            ? "نكهات جنوب الجزيرة بأبهى صورها. يتم تقديم المندي الأصيل المطهو على الفحم مع لمسة جيادا الخاصة."
            : "Showcasing the rich flavors of Southern Arabia, this branch offers authentic mandi slow-cooked over charcoal with GIADA’s signature touch."}
        </p>

        {/* Contact Info */}
        <div className={`text-gray-700 space-y-2 ${isRTL ? "text-right" : "text-left"}`}>
          <p><strong>{isRTL ? "ساعات العمل" : "Opening Hours"}:</strong> {isRTL ? "١٢:٠٠ مساءً – ١٠:٠٠ مساءً" : "12:00 PM – 10:00 PM"}</p>
          <p><strong>{isRTL ? "رقم التواصل" : "Phone"}:</strong> +966 55 040 5012</p>
        </div>

        {/* Menu Button */}
        <div className={isRTL ? "text-right" : "text-left"}>
          <a
            href="/menus/mandi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-6 py-2 rounded-lg shadow hover:bg-opacity-90 transition"
          >
            {isRTL ? "عرض المنيو" : "View Menu"}
          </a>
        </div>

        {/* ✅ Mandi Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src="/images/mandi1.jpg" alt="Mandi Dish 1" className="w-full h-64 object-cover rounded-lg shadow" />
          <img src="/images/mandi2.jpg" alt="Mandi Dish 2" className="w-full h-64 object-cover rounded-lg shadow" />
          <img src="/images/mandi3.jpg" alt="Mandi Dish 3" className="w-full h-64 object-cover rounded-lg shadow" />
        </div>

        {/* Embedded Map */}
        <div className="rounded overflow-hidden border border-gray-300">
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.4130712104793!2d50.057432399999996!3d26.4746418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49ffce8155fdd1%3A0x69de817a485ece64!2zR0lBREEgTUFOREkgfCDYrNmK2KfYr9inIC0g2YXZhtiv2Yo!5e0!3m2!1sen!2ssa!4v1750022790965!5m2!1sen!2ssa"
  width="100%"
  height="300"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Mandi Branch Map"
/>

        </div>
      </div>
    </div>
  );
}
