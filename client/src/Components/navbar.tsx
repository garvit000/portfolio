function Navbar() {

  return (
    <>
      <nav className='fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl'>
        <div className='bg-white/10 backdrop-blur-md shadow-lg shadow-black/20 rounded-full px-8 py-4 flex justify-between items-center border border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/30'>
          <h1 className='text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>GSR</h1>
          <ul className='sm:flex hidden space-x-8'>
            <li className='group'>
              <a href="/" className='relative text-white/90 hover:text-white transition-colors duration-200'>
                Home
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300'></span>
              </a>
            </li>
            <li className='group'>
              <a href="#projects" className='relative text-white/90 hover:text-white transition-colors duration-200'>
                Projects
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300'></span>
              </a>
            </li>
            <li className='group'>
              <a href="#about" className='relative text-white/90 hover:text-white transition-colors duration-200'>
                About
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300'></span>
              </a>
            </li>
          </ul>
          <button className='sm:hidden block font-bold text-2xl text-white/90 hover:text-white transition-colors duration-200 hover:scale-110 transform'>
            &#8801;
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar;