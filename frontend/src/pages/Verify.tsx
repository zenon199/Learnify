// import React from 'react'
// import { Link } from 'react-router-dom'

// const Verify = () => {
//   return (
//     <div className=''>
//       <div className="div">
//         <h1>Verify Account</h1>

//         <form>
//           <label htmlFor='otp'>Otp</label>
//           <input type='number' required />
//           <button>Verify</button>
//         </form>

//         <p>
//           Go to <Link to='/login'>Login</Link> page
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Verify

import { Link } from 'react-router-dom'

const Verify = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-indigo-100 to-purple-200 px-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-indigo-700">
          Verify Account
        </h1>

        <form className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="otp" className="mb-2 font-semibold text-gray-700">
              OTP
            </label>
            <input
              type="number"
              id="otp"
              required
              placeholder="Enter your OTP"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-md transition"
          >
            Verify
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Go to{' '}
          <Link to="/login" className="text-indigo-600 hover:underline font-semibold">
            Login
          </Link>{' '}
          page
        </p>
      </div>
    </div>
  )
}

export default Verify
