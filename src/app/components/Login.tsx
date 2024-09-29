// components/Login.tsx
import { FC } from "react";

interface LoginProps {
  onLogin: (event: React.FormEvent) => void;
}

const Login: FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Login</h2>
      <form onSubmit={onLogin}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
