// import React from 'react'

// const Testimonials = () => {
//     const testimonials = [{
//         id: 1,
//         name: "John Doe",
//         position: "Student",
//         message: "I really like this app",
//         image: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
//     },
//     ]
//   return (
//       <div className="secton">
//           <h2>
//               What out Users Say
//           </h2>
//           <div className="div">
//              {
//                 testimonials.map((e) =>(
//                 <div key={e.id}>
//                     <div className="div">
//                       <img src={e.image} alt='' />
//                     </div>
//                     <p>{e.message}</p>
//                     <div>
//                         <p>{e.name}</p>
//                          <p>{e.position }</p>    
//                     </div>
//                 </div>
                
//                 ))
//               }
//           </div>
//     </div>
//   )
// }

// export default Testimonials

import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      position: "Student",
      message: "Lernify has truly transformed how I learn online. The courses are clear, well-paced, and engaging.",
      image:
        "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
    },
    {
      id: 2,
      name: "Sarah Lee",
      position: "Software Developer",
      message: "I love the practical projects and community support. It’s my go-to platform to upskill.",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
    },
    {
      id: 3,
      name: "Ali Khan",
      position: "Data Analyst",
      message: "Incredible value! The platform is intuitive and offers exactly what I need for career growth.",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-indigo-700 mb-12">
          What Our Users Say
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((e) => (
            <div
              key={e.id}
              className="bg-indigo-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex flex-col items-center">
                <img
                  src={e.image}
                  alt={e.name}
                  className="w-20 h-20 object-cover rounded-full border-4 border-white shadow-md mb-4"
                />
                <p className="text-gray-700 italic mb-4">"{e.message}"</p>
                <div className="text-center">
                  <p className="text-lg font-semibold text-indigo-800">{e.name}</p>
                  <p className="text-sm text-gray-500">{e.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
