import React from 'react';
import './Admin.css';
import { useForm } from 'react-hook-form';
import useLogin from './UseLogin';

//import TranslationsForm from '../Translation/TranslationsForm';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';


function LoginForm({ onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          {...register("username", { required: true })}
        />
        {errors.username && <span className="error">Username is required</span>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          {...register("password", { required: true })}
        />
        {errors.password && <span className="error">Password is required</span>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
}


function Dashboard({ username, onLogout }) {
  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Welcome to the Admin Console, {username}!</h2>
      <div className="dashboard-buttons">
        <button className="logout-button" onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}


function Admin() {
  const { isLoggedIn, username, handleLogin, handleLogout } = useLogin();

  return (
    <div className="admin-page">
      <div className="heading">
      <header>
        <h1>Admin Login Portal</h1>
      </header>
      </div>
      <main>
        {isLoggedIn ? (
          <Dashboard username={username} onLogout={handleLogout} />
        ) : (
          <LoginForm onSubmit={handleLogin} />
        )}
      </main>
      <footer>
      <div className="icons">
          <SocialMediaIcons />
      </div>
      </footer>
    </div>
  );
}


export default Admin;
