import { Link } from "react-router-dom";
import React from "react";
import { Apple, Headphones } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="p-4 text-center">
        <h2 className="text-lg font-bold">MEGAPARI ONLINE SLOTS</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4 py-6 border-t border-[#2a2a2a]">
        {[
          {
            title: "INFORMATION",
            links: ["About us", "Careers", "Contacts", "Affiliate Program", "Terms and Conditions"],
          },
          {
            title: "BETTING",
            links: ["Basketball", "Football", "Cricket", "Baseball", "Ice Hockey", "Multi-LIVE"],
          },
          {
            title: "GAMES",
            links: ["Crystal", "Crash", "Dice"],
          },
          {
            title: "STATISTICS",
            links: ["Statistics", "Results"],
          },
          {
            title: "USEFUL LINKS",
            links: ["Mobile version", "Registration", "Become an agent"],
          },
          {
            title: "APPS",
            links: [
              { name: "iOS", icon: <Apple className="h-4 w-4 mr-2" /> },
              { name: "Android", icon: <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.3414C17.9331 ..." /></svg> },
            ],
          },
        ].map((section, index) => (
          <div key={index}>
            <h3 className="font-bold mb-3">{section.title}</h3>
            <ul className="space-y-2 text-sm">
              {section.links.map((item, idx) => (
                <li key={idx}>
                  <Link to="#" className="hover:text-gray-300 flex items-center">
                    {item.icon || null}
                    {typeof item === "string" ? item : item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="px-4 py-6 border-t border-[#2a2a2a]">
        <h3 className="font-bold mb-4 text-center">AMBASSADORS</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {["https://v3.traincdn.com/genfiles/cms/desktop/contact/e5962add30dea114ed6c1639967d3b35_140.webp",
            "https://v3.traincdn.com/genfiles/cms/desktop/contact/349b563c174e4153d0408260694c106a_140.webp"].map((img, index) => (
            <div key={index} className="bg-[#2a2a2a] p-4 rounded-md w-28 h-28 flex items-center justify-center">
              <img src={img} className="w-full h-full object-contain" alt={`Ambassador ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 py-6 border-t border-[#2a2a2a]">
        <h3 className="font-bold mb-3">AWARDS</h3>
        <div className="w-full overflow-x-auto">
          <div className="flex gap-4 w-[1200px]">
            {" "}
            {/* Approx width for 8 awards */}
            {[
              "https://v3.traincdn.com/genfiles/cms/desktop/media_asset/660e3a5b7570823820d0fcf440f8dc05.png",
              "https://v3.traincdn.com/genfiles/cms/desktop/media_asset/70da8e177082de92d831ad77ca6bca9e.png",
              "https://v3.traincdn.com/genfiles/cms/192-824/desktop/media_asset/823b9b9c026a111a7d443bc4f8b04b36.png",
              "https://v3.traincdn.com/genfiles/cms/192-824/desktop/media_asset/823b9b9c026a111a7d443bc4f8b04b36.webp",
              "https://v3.traincdn.com/genfiles/cms/desktop/media_asset/32f7dbf2ace200c75a89ff6b133f88d5.png",
              "https://v3.traincdn.com/genfiles/cms/desktop/media_asset/6a8f0e6c23c95ba4198f97f8259fbc5c.png",
              "https://v3.traincdn.com/genfiles/cms/desktop/media_asset/a04604fb2b47c3e874a30104495527fb.png",
              "https://v3.traincdn.com/genfiles/cms/desktop/media_asset/789d31e15fe894f47c3a0d51f821d98c.png",
              "https://v3.traincdn.com/genfiles/cms/desktop/media_asset/0258053650ceea2fc6f04c77e21b4b8d.png",
              "https://v3.traincdn.com/genfiles/cms/desktop/media_asset/c7395178e2b64f7ceeaa1d59d4cf6829.png",
            ].map((img, index) => (
              <div
                key={index}
                className="w-[150px] h-[100px] bg-[#2a2a2a] flex items-center justify-center rounded-md"
              >
                <img
                  src={img}
                  className="w-full h-full object-contain"
                  alt={`Award ${index + 1}`}
                />
              </div>
            ))}
          </div>
          </div>
        </div>

      <div className="p-4 border-b border-[#2a2a2a] text-center text-sm">
        <p>Copyright © 2019 - 2025 «Megapari».</p>
        <p>By remaining on the website, you consent to the use of cookies.</p>
        <p className="text-blue-400 underline cursor-pointer">Find out more</p>
      </div>

      <div className="p-4 border-b border-[#2a2a2a] flex flex-col items-center">
        <Headphones className="w-6 h-6 mb-2" />
        <h3 className="font-bold">SUPPORT</h3>
        <p>+91123456789</p>
      </div>

      <div className="flex justify-center gap-4 p-4">
        <FaYoutube className="w-5 h-5 cursor-pointer" />
        <FaXTwitter className="w-5 h-5 cursor-pointer" />
        <FaFacebookF className="w-5 h-5 cursor-pointer" />
        <FaInstagram className="w-5 h-5 cursor-pointer" />
      </div>
    </footer>
  );
};

export default Footer;
