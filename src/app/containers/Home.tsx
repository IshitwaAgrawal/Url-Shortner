// pages/index.tsx
import type { NextPage } from "next";
import Hero from "../components/Hero";
import AuthContainer from "../containers/AuthContainer";
import Dashboard from "../containers/Dashboard";
import { useAuth } from "../context/AuthContext";

const Home: NextPage = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Dashboard />
  ) : (
    <>
      <Hero />
      <AuthContainer />
    </>
  );
};

export default Home;
