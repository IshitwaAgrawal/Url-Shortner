// pages/_app.tsx
import "../app/globals.css";
import type { AppProps } from "next/app";
import Header from "../app/components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";

const MyApp = ({ pageProps }: AppProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Home {...pageProps} />
      </main>
      <Footer />
    </div>
  );
};

export default MyApp;
