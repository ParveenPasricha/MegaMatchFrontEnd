import React from "react";
import Slider from "./Slider";
import Marquee from "react-fast-marquee";

const breakingNews = [
  { text: "📰 TATA IPL Fan Parks 2025 to cover 50 Cities in 23 States", bg: "bg-yellow-500" },
  { text: "KKR pick Chetan Sakariya as a replacement for Umran Malik · Mumbai", bg: "bg-orange-500" },
  { text: "Indians pick Corbin Bosch as ...", bg: "bg-blue-500" },
];

const Headline = () => {
  return (
    <div className="hidden sm:block text-center overflow-x-auto w-full">
      {/* Breaking News Headline */}
      <div className="bg-gray-800 z-0 opacity-90 text-white py-2" aria-label="Breaking News">
        <Marquee speed={50} pauseOnHover>
          {breakingNews.map((news, index) => (
            <span key={index} className={`${news.bg} font-bold text-black mx-10 px-4 py-1 rounded-md`}>
              {news.text}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default React.memo(Headline);
