import { useContext } from "react";
import LanguageContext from "./languageContext";

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguageContext must be used within a LanguageProvider"
    );
  }
  const { language, setLanguage } = context;

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.id;
    setLanguage(e.target.id);
    document.documentElement.dir =
      selectedLanguage === "english" ? "ltr" : "rtl";
  };
  return { language, handleLanguageChange };
};
