
import navLogo from '../assets/Desktop View/Icons/Navbar logo.png'

const Navbar = () => {
  return (
    <div className='h-[76px] z-10 drop-show-lg mb-5'>
      <div className='px-5 flex justify-between items-center w-full h-full'>

        <div className='flex items-center pl-11'> 
        <img className='h-[35px]' src={navLogo}/>
        </div>

        <div>
        <ul className='hidden md:flex pl-9 text-blue-700 justify-between'>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
        </div>

        <div className='pr-4'>
          <button className='border-none bg-transparent text-blue-700 mr-4'>Log In</button>
          <button className='px-5 py-3'>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;