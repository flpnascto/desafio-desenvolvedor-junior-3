import { createContext, useState } from "react";
import authService from "../services/auth.service";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState({});
  const [token, setToken] = useState('');
  const [signed, setSigned] = useState(false);

  async function signIn() {
    const response = await authService.signIn();
    // setUser(response.user);
    setToken(response.token);
    setSigned(true);
  }

  const authInitialValues = {
    signed,
    token,
    // user
    signIn
  }

  return (
    <AuthContext.Provider value={authInitialValues}>
      {children}
    </AuthContext.Provider>
  );
};
