import React from 'react'; 

function Navbar() {

  return (
    <>
      <nav className='bg-white/10 backdrop-blur-xs shadow-md rounded-2xl p-6 w-full fixed top-0 left-0 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>GSR</h1>
        <ul className='flex space-x-10'>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;