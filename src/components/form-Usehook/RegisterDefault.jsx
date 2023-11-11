import React from "react";

const RegisterDefault = () => {
  return (
    <div>
      <form className="max-w-[300px] mx-auto my-10" autoComplete="off">
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="username" className="cursor-pointer">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="p-4 border-gray-100 rounded-lg
        bg-white border border-solid outline-none transition-all focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="email" className="cursor-pointer">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="p-4 border-gray-100 rounded-lg
        bg-white border border-solid outline-none transition-all focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="password" className="cursor-pointer">
          Password
          </label>
          <input
            type="text"
            id="password"
            className="p-4 border-gray-100 rounded-lg
        bg-white border border-solid outline-none transition-all focus:border-blue-500"
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterDefault;
