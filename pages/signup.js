// pages/signup.js
import Link from "next/link";
import InputField from "../src/components/InputField";

const Signup = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
        Sign Up
      </h1>
      {/* Add your signup form here */}
      <form className="mb-6">
        {/* Your signup form fields go here */}
        <InputField
          label={"Username"}
          value=""
          changeHandler={null}
          type="text"
        />
        <InputField label={"Email"} value="" changeHandler={null} type="text" />
        <InputField
          label={"Password"}
          value=""
          changeHandler={null}
          type="password"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign Up
        </button>
      </form>
      <p className="text-gray-800">
        Already have an account?{" "}
        <Link href="/login">
          <div className="text-blue-500">Log In</div>
        </Link>
      </p>
    </div>
  );
};

export default Signup;
