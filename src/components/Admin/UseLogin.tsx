import { useState } from "react";

interface LoginData {
  username: string;
  password: string;
}

function useLogin() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = (data: LoginData): void => {
    const { username, password } = data;
    if (username === "admin" && password === "admin") {
      setUsername(username);
      setPassword(password);
      setIsLoggedIn(true);
    } else {
      alert("Invalid login credentials. Please try again.");
    }
  };

  const handleLogout = (): void => {
    setUsername("");
    setPassword("");
    setIsLoggedIn(false);
  };

  return { isLoggedIn, username, handleLogin, handleLogout };
}

export default useLogin;
