import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <footer className="w-full bg-white text-gray-800 font-cairo shadow-inner">
      {/* Full-width white background container */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div className={isRTL ? "md:text-right" : "md:text-left"}>
          <h2 className="text-xl font-bold text-black">GIADA</h2>
          <p className="text-sm mt-2 leading-relaxed">
            {isRTL
              ? "جيادا هي تجربة طهوية سعودية معاصرة تقدّم ثلاث مفاهيم مميزة: اللحوم المدخنة، الشاورما، والمندي."
              : "GIADA is a contemporary Saudi culinary experience featuring three unique concepts: smoked meats, shawarma, and mandi."}
          </p>
        </div>

        {/* Contact Section */}
        <div className="space-y-2 text-sm text-gray-700">
          <h3 className="font-semibold text-black">{isRTL ? "تواصل معنا" : "Contact Us"}</h3>
          <p>
            📍{" "}
            <a
              href="https://www.google.com/maps?q=PadelBreez,+Khing+Saud+street+Al+Jubaylah,+Riyadh+13927"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary"
            >
              {isRTL
                ? "الرياض، شارع الملك سعود، الجبيلة"
                : "King Saud Street, Al Jubaylah, Riyadh"}
            </a>
          </p>
          <p>📞 +966 50 362 0500</p>
          <p>📧 info@giadaksa.com</p>
        </div>

        {/* Navigation Links */}
        <div className={`${isRTL ? "md:text-right" : "md:text-left"} space-y-2 text-sm`}>
          <h3 className="font-semibold text-black">{t("nav.branches")}</h3>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-primary">{t("nav.home")}</Link></li>
            <li><Link to="/about" className="hover:text-primary">{t("nav.about")}</Link></li>
            <li><Link to="/contact" className="hover:text-primary">{t("nav.contact")}</Link></li>
            <li><Link to="/branches/smoked" className="hover:text-primary">{t("branches.smoked")}</Link></li>
            <li><Link to="/branches/shawarma" className="hover:text-primary">{t("branches.shawarma")}</Link></li>
            <li><Link to="/branches/mandi" className="hover:text-primary">{t("branches.mandi")}</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright Strip */}
      <div className="bg-gray-100 border-t border-gray-200 text-center text-xs py-4 text-gray-600">
        © {new Date().getFullYear()} GIADA. {isRTL ? "جميع الحقوق محفوظة." : "All rights reserved."}
      </div>
    </footer>
  );
}
