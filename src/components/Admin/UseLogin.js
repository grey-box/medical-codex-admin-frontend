import { useState } from 'react';

function useLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (data) => {
    const { username, password } = data;
    if (username === 'admin' && password === 'admin') {
      setUsername(username);
      setPassword(password);
      setIsLoggedIn(true);
    } else {
      alert('Invalid login credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setUsername('');
    setPassword('');
    setIsLoggedIn(false);
  };

  return { isLoggedIn, username, handleLogin, handleLogout };
}

export default useLogin;
