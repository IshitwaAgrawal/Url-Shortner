// components/Footer.js

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 text-xl font-bold md:mb-0 md:text-right">
          ShortenURL
        </div>

        <div className="flex flex-col items-center md:items-end text-sm md:text-base">
          <div className="mb-2">
            <p>Contact us: contact@shortenurl.com</p>
          </div>
          <div className="mb-2">
            <p>&copy; 2023 ShortenURL. All rights reserved.</p>
          </div>
          <div>
            <p>Made with ❤️ by Your Name</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
