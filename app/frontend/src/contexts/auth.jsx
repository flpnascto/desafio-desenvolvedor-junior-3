import { createContext, useState } from "react";
import authService from "../services/auth.service";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [signed, setSigned] = useState(false);

  async function signIn(login) {
    const response = await authService.signIn(login);
    if (response.message) {
      return response.message;
    }
    setToken(response.token);
    setSigned(true);
  }

  const authInitialValues = {
    signed,
    token,
    signIn
  }

  return (
    <AuthContext.Provider value={authInitialValues}>
      {children}
    </AuthContext.Provider>
  );
};
