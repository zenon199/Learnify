import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex justify-between align-middle p-5 shadow-sm'>
      <div className="text-3xl ">Lernify</div>

      <div className="flex gap-8 text-xl">
        <Link to={'/'}>Dashbard</Link>
        <Link to={'/courses'}>Courses</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/account'}>Account</Link>
      </div>
   </header>
  )
}

export default Header