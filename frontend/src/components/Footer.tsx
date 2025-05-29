// import { FaGithubSquare,FaTwitter,FaDiscord,FaLinkedin } from "react-icons/fa";
// import {  } from "react-icons/fa";
// const Footer = () => {
//   return (
//     <footer>
//       <div className="footer">
//         <p>
//           &copy: 2025 Your E-Learnig Platform. All rights reserved <br />
//           Made with ❤️ <a href='/'>Zenon</a>
//         </p>
//         <div>
//           <a href=""><FaGithubSquare/></a>
//           <a href=""><FaTwitter/></a>
//           <a href=""><FaDiscord/></a>
//           <a href=""><FaLinkedin/></a>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer

import {
  FaGithubSquare,
  FaTwitter,
  FaDiscord,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Text */}
        <p className="text-center md:text-left text-sm">
          &copy; 2025 Your E-Learning Platform. All rights reserved.
          <br />
          Made with ❤️ by <a href="/" className="text-indigo-400 hover:underline">Zenon</a>
        </p>

        {/* Right: Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a href="#" className="hover:text-white transition-colors duration-300">
            <FaGithubSquare />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            <FaDiscord />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
