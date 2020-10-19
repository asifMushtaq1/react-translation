import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

const Button = () => {

  const renderButton = color => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({language}) => renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  };

  const renderSubmit = language => {
    return language === "english" ? "Submit" : "Vooleggen";
  };

  return (
    <ColorContext.Consumer>
      {color => renderButton(color)}
    </ColorContext.Consumer>
  );
};
export default Button;
