// import {Link} from 'react-router-dom'

// const Header = () => {
//   return (
//     <header className='flex justify-between align-middle p-5 shadow-sm'>
//       <div className="text-3xl ">Lernify</div>

//       <div className="flex gap-8 text-xl">
//         <Link to={'/'}>Dashbard</Link>
//         <Link to={'/courses'}>Courses</Link>
//         <Link to={'/about'}>About</Link>
//         <Link to={'/account'}>Account</Link>
//       </div>
//    </header>
//   )
// }

// export default Header

import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-5 md:px-10">
        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-wider select-none cursor-pointer">
          Lernify
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-10 text-lg font-medium">
          <Link
            to="/"
            className="relative px-2 py-1 rounded-md hover:bg-white/20 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white"
          >
            Dashboard
          </Link>
          <Link
            to="/courses"
            className="relative px-2 py-1 rounded-md hover:bg-white/20 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white"
          >
            Courses
          </Link>
          <Link
            to="/about"
            className="relative px-2 py-1 rounded-md hover:bg-white/20 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white"
          >
            About
          </Link>
          <Link
            to="/account"
            className="relative px-2 py-1 rounded-md hover:bg-white/20 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white"
          >
            Account
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white rounded transform transition duration-300 ${
              menuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded transition duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded transform transition duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-indigo-700/90 backdrop-blur-sm p-5 flex flex-col gap-4 text-white font-semibold text-lg">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:bg-white/20 rounded px-3 py-2 transition"
          >
            Dashboard
          </Link>
          <Link
            to="/courses"
            onClick={() => setMenuOpen(false)}
            className="hover:bg-white/20 rounded px-3 py-2 transition"
          >
            Courses
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:bg-white/20 rounded px-3 py-2 transition"
          >
            About
          </Link>
          <Link
            to="/account"
            onClick={() => setMenuOpen(false)}
            className="hover:bg-white/20 rounded px-3 py-2 transition"
          >
            Account
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Header
