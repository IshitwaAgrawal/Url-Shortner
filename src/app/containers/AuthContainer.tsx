// components/AuthContainer.tsx
import { FC } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import { useAuth } from "../context/AuthContext";

const AuthContainer: FC = () => {
  const { login } = useAuth();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Perform login logic here (e.g., API call)
    login();
  };

  return (
    <div className="container mx-auto py-20 flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
      <Login onLogin={handleLogin} />
      <Register />
    </div>
  );
};

export default AuthContainer;
