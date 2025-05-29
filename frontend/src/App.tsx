import {BrowserRouter, Routes, Route} from 'react-router-dom'


import Header from './components/Header'
import Dashbard from './pages/Dashbard'
import Courses from './pages/Courses'
import About from './pages/About'
import Account from './pages/Account'
import Footer from './components/Footer'

const App = () => {
  return (<>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Dashbard/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/account' element={<Account/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App