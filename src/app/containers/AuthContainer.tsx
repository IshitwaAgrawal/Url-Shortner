// components/AuthContainer.tsx
import { FC } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const AuthContainer: FC = () => {
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle login logic here
  };
  return (
    <div className="container mx-auto py-20 flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
      <Login onLogin={handleLogin} />
      <Register />
    </div>
  );
};

export default AuthContainer;
