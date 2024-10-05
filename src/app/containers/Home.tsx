// pages/Home.tsx
import React from "react";
import type { NextPage } from "next";
import Hero from "../components/Hero";
import Dashboard from "../containers/Dashboard";
import AuthContainer from "./AuthContainer";

const Home: NextPage = () => {
  const isLoggedIn = false;

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
