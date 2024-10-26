import React, { useEffect } from "react";
import Logo from "./assets/logo.svg";
import Calling from "./assets/Calling.svg";
import Email from "./assets/email.svg";
import Hospital from "./assets/BuildingHospital.svg";

import './i18.js'; // Import to initialize i18n
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation(); // Use the translation function
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value); 
};
  return (
    <div className="w-[1440px] h-[1260px] mx-auto">
      <header className="flex justify-between items-center p-5 px-32 ">
        <div className="text-2xl font-bold flex gap-3 ">
          <img src={Logo} alt="" /> Brave
        </div>
        <nav>
          <ul className="flex space-x-5">
            <li>
              <a href="#" className="text-black">
                {t("header1")}
              </a>
            </li>
            <li>
              <a href="#" className="text-black">
                {t("header2")}
              </a>
            </li>
            <li>
              <a href="#" className="text-black">
                {t("header3")}
              </a>
            </li>
            <li>
              <a href="#" className="text-black">
                {t("header4")}
              </a>
            </li>
            <select id="language-select"  onChange={handleChange}>
                <option  value="en">Inglizcha</option>
                <option value="uz">O'zbekcha</option>
            </select>
          </ul>
        </nav>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          {t("welcome")}
        </button>
      </header>

      <section className="text-center py-12 bg-gray-100  w-[1440px] h-[746px]">
        <div className="w-[840px] h-[204px] m-auto pt-9">
          <h2 className="text-lg">{t("waitlistTitle")}</h2>
          <h1 className="text-5xl mt-6 mb-7 font-bold">
            {t("heroTitle")}
          </h1>
          <p className="mt-4">
            {t("heroSubtitle")}
          </p>
        </div>
        <div className="flex flex-col justify-center  mt-[100px] mx-auto w-[870px] ">
          <div className="flex w-[870px] mb-6 justify-between">
            <div className="bg-white flex items-center justify-start p-5 rounded-lg shadow-md w-[420px] ">
              <img width={40} height={40} src={Calling} alt="" />
              <div className="ml-8">
                <span className="block text-start font-semibold">{t("waitlistDescription")}</span>
                <p className="text-start text-3xl text-[#4F5153] font-semibold">
                  +1 (214) 960 4130
                </p>
              </div>
            </div>
            <div className="bg-white flex p-5 items-center rounded-lg shadow-md w-[420px] ">
              <img width={40} height={40} src={Email} alt="" />
              <div className="ml-8">
                <span className="block text-start font-semibold">{t("emailPlaceholder")}</span>
                <p className="text-start text-3xl text-[#4F5153] font-semibold">
                  hello@aiinfo.com
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 w-[870px] flex rounded-lg shadow-md">
            <img src={Hospital} alt="" />
            <div className="ml-8">
              <span className="block font-semibold text-start">
                {t("joinButton")}
              </span>
              <p className="text-start text-3xl text-[#4F5153] font-semibold">
                12720 Hillcrest Road Suite 980, Dallas, TX 75230
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center py-12 bg-black text-white">
        <h2 className="text-2xl">{t("greeting")}</h2>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
          {t("welcome")}
        </button>
      </section>
    </div>
  );
}

export default App;