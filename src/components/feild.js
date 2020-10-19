import React, { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

const Feild = () => {
  const context= useContext(LanguageContext);
  const text= context.language === "english" ? "Name" : "Naam";
  return (
    <div className="ui feild">
      <label>{text}</label>
      <input />
    </div>
  );
};
export default Feild;
