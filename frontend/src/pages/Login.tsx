// import React from 'react'
// import { Link } from 'react-router-dom'

// const Login = () => {
//   return (
//       <div className='flex flex-col justify-center align-middle '>
//           <h1 className='text-5xl'>Login</h1>
//           <form className='shadow-2xl '>
//               <label htmlFor='email'>Email</label>
//               <input type='email' required />
//               <label htmlFor='password'>Password</label>
//               <input type='password' required />
//               <button className=''>Login</button>
//           </form>
//           <p>
//               Don't have an account? <Link to='/register'>Register</Link>
//           </p>
//     </div>
//   )
// }

// export default Login

import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-indigo-100 to-purple-200 px-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-indigo-700">Login</h1>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="you@example.com"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              placeholder="••••••••"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-md transition"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Don&apos;t have an account?{' '}
          <Link to="/register" className="text-indigo-600 hover:underline font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
