// import { useNavigate } from "react-router-dom"
// const Dashbard = () => {
//   const navigate = useNavigate()
//   return (
//     <div>
//       <div className="div">
//         <h1>Welcome to our E-Learning Platform</h1>
//         <p>Learn, Grow and Excel</p>
//         <button onClick={() => navigate('/courses')}>Get Started</button>
//       </div>
//       <Testimonials />
//     </div>
//   )
// }

// export default Dashbard

import { useNavigate } from "react-router-dom"
import Testimonials from "../components/Testimonials"

const Dashboard = () => {
  const navigate = useNavigate()

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen w-full bg-gradient-to-tr from-indigo-100 to-purple-200 flex items-center justify-center px-4">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-700 leading-tight mb-6">
            Welcome to <span className="text-purple-600">Lernify</span><br />
            Your E-Learning Platform
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10">
            Learn new skills, grow your knowledge, and excel in your career with curated online courses.
          </p>
          <button
            onClick={() => navigate('/courses')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg transition duration-300"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
    </main>
  )
}

export default Dashboard

