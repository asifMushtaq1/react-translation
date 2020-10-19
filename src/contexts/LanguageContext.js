import React, { useState } from "react";

// default value of english
//if no default value the leave it empty
const Context = React.createContext("english");

export const LanguageStore = props => {
  const [state, setState] = useState({
    language: "english"
  });

  const onLanguageChange = language => {
    setState({ ...state, language: language });
  };
  return (
    <Context.Provider value={{ ...state, onLanguageChange: onLanguageChange }}>
      {props.children}
    </Context.Provider>
  );
};
export default Context;
