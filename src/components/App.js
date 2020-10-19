import React from "react";
import UserCreate from "./userCreate";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./languageSelector";
import { LanguageStore } from '../contexts/LanguageContext';

const App = () => {

  return (
    <div className="ui container">
      <LanguageStore>
        <LanguageSelector />

        <ColorContext.Provider value="red">
          <UserCreate />
        </ColorContext.Provider>
      </LanguageStore>
    </div>
  );
};
export default App;
