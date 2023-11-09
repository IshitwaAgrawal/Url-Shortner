// components/Hero.js

const Hero = () => {
  return (
    <section className="bg-gray-800 text-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Shorten URLs with Ease
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          Simplify your links and track their performance effortlessly.
        </p>
        {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button> */}
      </div>
    </section>
  );
};

export default Hero;
