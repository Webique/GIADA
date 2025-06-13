import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function About() {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    setIsRTL(i18n.language === "ar");
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div className="relative pt-24 pb-16 px-6 md:px-16 font-cairo min-h-screen">
      {/* Outer Wrapper */}
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-8 md:p-12 space-y-12">
        {/* GIADA Description */}
        <div className={`${isRTL ? "text-right" : "text-left"} space-y-5`}>
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            {i18n.language === "ar" ? "عن جيادا" : "About GIADA"}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            {i18n.language === "ar"
              ? "جيادا ليست مجرد مطعم، بل هي تجربة طهوية تعكس روح الضيافة السعودية بلمسة معاصرة. نحن نقدم النكهات الأصيلة من خلال ثلاث تجارب فريدة، كل منها صُممت لتلبية أذواق مختلفة بأسلوب مميز وجودة عالية."
              : "GIADA is more than a restaurant — it's a culinary experience that reflects the soul of Saudi hospitality with a modern twist. We offer authentic flavors across three unique experiences, each crafted to satisfy different tastes with exceptional quality."}
          </p>
        </div>

        {/* Branch Overview */}
        <div className={`${isRTL ? "text-right" : "text-left"} space-y-6`}>
          <h2 className="text-2xl font-bold text-black">
            {i18n.language === "ar" ? "فروعنا" : "Our Branches"}
          </h2>

          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold text-primary">
                {i18n.language === "ar" ? "فرع اللحوم المدخنة" : "Smoked Meats Branch"}
              </h3>
              <p>
                {i18n.language === "ar"
                  ? "تجربة غنية لعشاق اللحوم، نقدم أفضل اللحوم المدخنة بنكهات مميزة وتقنيات طهي تقليدية حديثة."
                  : "A rich experience for meat lovers, serving premium smoked meats with signature flavors and modern traditional smoking techniques."}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary">
                {i18n.language === "ar" ? "فرع الشاورما" : "Shawarma Branch"}
              </h3>
              <p>
                {i18n.language === "ar"
                  ? "شاورما بطابع مبتكر تمزج بين الأصالة والتنوع، محضّرة بعناية بأجود المكونات."
                  : "Innovative shawarma that blends tradition with variety, crafted using only the finest ingredients."}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary">
                {i18n.language === "ar" ? "فرع المندي" : "Mandi Branch"}
              </h3>
              <p>
                {i18n.language === "ar"
                  ? "نكهة جنوب الجزيرة في أبهى صورها، حيث نقدم المندي الأصيل المطهو على الفحم مع لمسة جيادا الخاصة."
                  : "The essence of Southern Arabian cuisine, offering authentic mandi slow-cooked over coals with GIADA’s signature touch."}
              </p>
            </div>
          </div>
        </div>

        {/* Chef Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="/images/chef.png"
            alt="Chef Hussein"
            className="w-64 h-auto rounded-2xl shadow-lg object-contain"
          />

          <div className={`space-y-5 ${isRTL ? "text-right" : "text-left"}`}>
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              {i18n.language === "ar" ? "عن الشيف حسين" : "About Chef Hussein"}
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              {i18n.language === "ar"
                ? "الشيف حسين هو القلب النابض وراء مطاعمنا، بخبرة تتجاوز 20 عامًا في المطبخ السعودي الأصيل. شغفه في تقديم النكهات الغنية يظهر في كل طبق، حيث يدمج بين التقاليد والابتكار بحرفية عالية."
                : "Chef Hussein is the heart and soul of our kitchens. With over 20 years of expertise in authentic Saudi cuisine, his passion for rich flavors shines through every dish. He blends tradition and innovation with masterful care."}
            </p>

            <blockquote className="text-primary text-xl italic border-l-4 border-primary pl-4">
              {i18n.language === "ar"
                ? "“الطعام الجيد يجمعنا، والنكهة هي قصتي.”"
                : "“Good food brings us together. Flavor is my story.”"}
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
