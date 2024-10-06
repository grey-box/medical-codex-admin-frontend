import React, { FC } from "react";
import { useForm } from "react-hook-form";
import useLogin from "@/components/Admin/UseLogin";
import SocialMediaIcons from "@/components/SocialMediaIcons/SocialMediaIcons";

interface LoginFormProps {
  onSubmit: (data: LoginFormInputs) => void;
}

interface LoginFormInputs {
  username: string;
  password: string;
}

const LoginForm: FC<LoginFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col max-w-[600px] mx-auto top-[3000px] p-[100px] bg-cover bg-left"
    >
      <div className="flex flex-col mb-4">
        <div className="mb-2">Username:</div>
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
        <div className="mb-2">Password:</div>
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
};

interface DashboardProps {
  username: string;
  password: string;
  onLogout: () => void;
}

const Dashboard: FC<DashboardProps> = ({ username, password, onLogout }) => {
  return (
    <div className="m-8">
      <div className="mb-4 text-4xl">
        Welcome to the Admin Console, {username}!
      </div>
      <div className="flex justify-end mb-4">
        <button
          className="bg-red-600 text-white p-2 rounded-[0.25rem] cursor-pointer"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
      <div>Your password is: {password}</div>
    </div>
  );
};

const Admin: FC = () => {
  const { isLoggedIn, username, password, handleLogin, handleLogout } =
    useLogin();

  return (
    <div
      className="flex flex-col h-[91vh] bg-cover bg-center"
      style={{ backgroundImage: "url('../../background.jpg')" }}
    >
      <div className="bg-[#729775] text-[rgb(12,0,0)] p-4">
        <div className="text-3xl font-bold">Admin Login Portal</div>
      </div>
      <main>
        {isLoggedIn ? (
          <Dashboard
            username={username}
            password={password}
            onLogout={handleLogout}
          />
        ) : (
          <LoginForm onSubmit={handleLogin} />
        )}
      </main>
      <div className="bg-[#729775] text-[rgb(10,0,0)] p-4 mt-auto">
        <div className="icons">
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  );
};

export default Admin;
