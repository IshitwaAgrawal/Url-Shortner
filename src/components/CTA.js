// components/CallToAction.js
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="bg-gray-800 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          Ready to Get Started?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Join our community of users and start shortening URLs today!
        </p>
        <div className="flex flex-col items-center md:flex-row md:justify-center">
          <button className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded mb-4 md:mb-0">
            <Link href="/signup" passHref>
              <CustomComponent>Sign Up Now</CustomComponent>
            </Link>
          </button>
          <span className="text-gray-400 mx-2 hidden md:block">or</span>
          <Link href="/login" passHref>
            <CustomComponent>Log In</CustomComponent>
          </Link>
        </div>
      </div>
    </section>
  );
};

const CustomComponent = ({ children, href }) => {
  // Your custom component logic here
  return (
    <div onClick={() => console.log("Navigate to:", href)}>{children}</div>
  );
};

export default CallToAction;
