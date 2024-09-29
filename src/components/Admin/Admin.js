import React from "react";
import { useForm } from "react-hook-form";
import useLogin from "./UseLogin";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";

function LoginForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col max-w-[600px] mx-auto top-[3000px] p-[100px] bg-cover bg-left"
    >
      <div className="flex flex-col mb-4">
        <label htmlFor="username" className="mb-2">
          Username:
        </label>
        <input
          type="text"
          id="username"
          {...register("username", { required: true })}
          className="p-2 border-[1px] border-[#ced4da] rounded-[0.25rem]"
        />
        {errors.username && (
          <span className="text-red-500 text-[0.8rem] mt-2">
            Username is required
          </span>
        )}
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="password" className="mb-2">
          Password:
        </label>
        <input
          type="password"
          id="password"
          {...register("password", { required: true })}
          className="p-2 border-[1px] border-[#ced4da] rounded-[0.25rem]"
        />
        {errors.password && (
          <span className="text-red-500 text-[0.8rem] mt-2">
            Password is required
          </span>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-[0.25rem] cursor-pointer"
      >
        Login
      </button>
    </form>
  );
}

function Dashboard({ username, onLogout }) {
  return (
    <div className="m-8">
      <h2 className="mb-4 text-4xl">
        Welcome to the Admin Console, {username}!
      </h2>
      <div className="flex justify-end mb-4">
        <button
          className="bg-red-600 text-white p-2 rounded-[0.25rem] cursor-pointer"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

function Admin() {
  const { isLoggedIn, username, handleLogin, handleLogout } = useLogin();

  return (
    <div
      className="flex flex-col h-[91vh] bg-cover bg-center"
      style={{ backgroundImage: "url('../../background.jpg')" }}
    >
      <header className="bg-[#729775] text-[rgb(12,0,0)] p-4">
        <h1>Admin Login Portal</h1>
      </header>
      <main>
        {isLoggedIn ? (
          <Dashboard username={username} onLogout={handleLogout} />
        ) : (
          <LoginForm onSubmit={handleLogin} />
        )}
      </main>
      <footer className="bg-[#729775] text-[rgb(10,0,0)] p-4 mt-auto">
        <div className="icons">
          <SocialMediaIcons />
        </div>
      </footer>
    </div>
  );
}

export default Admin;
