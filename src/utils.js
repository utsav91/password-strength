import { useState } from "react";

export const usePassword = (initialValue = "") => {
  const [password, setPassword] = useState(initialValue);
  return {
    onPasswordChange: event => setPassword(event.target.value),
    password
  };
};

export const createPasswordLabel = score => {
  switch (score) {
    case 0:
      return "Weak";
    case 1:
      return "Weak";
    case 2:
      return "Fair";
    case 3:
      return "Good";
    case 4:
      return "Strong";
    default:
      return "Weak";
  }
};
