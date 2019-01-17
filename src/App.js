import React from "react";
import zxcvbn from "zxcvbn";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import { usePassword } from "./utils";
import "./App.css";

const App = () => {
  const { password, onPasswordChange } = usePassword("");
  const testedResult = zxcvbn(password);
  return (
    <div className="App">
      <div className="meter">
        <input type="text" onChange={onPasswordChange} />
        <PasswordStrengthMeter score={testedResult.score} />
      </div>
    </div>
  );
};

export default App;
