import React from "react";
import { createPasswordLabel } from "./utils";
import "./PasswordStrengthMeter.css";

const PasswordStrengthMeter = ({ score }) => {
  const passwordLabel = createPasswordLabel(score);
  return (
    <div className="password-strength-meter">
      <progress
        value={score}
        max="4"
        className={`password-strength-meter-progress strength-${passwordLabel}`}
      />
      <br />
      <label className="password-strength-meter-label">
        {passwordLabel && (
          <>
            <strong>Password strength:</strong>
            {passwordLabel}
          </>
        )}
      </label>
    </div>
  );
};

export default PasswordStrengthMeter;
