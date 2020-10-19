import React,{useContext} from "react";
import LanguageContext from "../contexts/LanguageContext";

const LanguageSelector = ({ languageChange }) => {
  const context= useContext(LanguageContext);
  return (
    <div>
      Select a language:
      <i className="flag us" onClick={() => context.onLanguageChange("english")} />
      <i className="flag nl" onClick={() => context.onLanguageChange("dutch")} />
    </div>
  );
};
export default LanguageSelector;
