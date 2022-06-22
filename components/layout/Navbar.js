import React, { useState } from "react";
import Link from "next/link";
import "animate.css";
import { Button } from "react-scroll";
import "transition-style"

function dhat() {
  { var ldk = document.createElement('script'); ldk.type = 'text/javascript'; ldk.async = true; ldk.src = 'https://s.cliengo.com/weboptimizer/62960b923a5ff3002a347c4e/62960b933a5ff3002a347c52.js?platform=view_installation_code'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ldk, s); }
 

 }

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  

  return (
    <header>
    <nav className='md:bg-transparent bg-white absolute w-full h-14 items-center justify-center px-2 md:bg-opacity-0 z-10'>
      <div
        transition-style='in:wipe:bottom-right'
        className='container md:bg-transparent bg-white px-4 mx-auto flex flex-wrap items-center justify-between'
      >
        <div className='animate__animated animate__backInDown animate__delay-2s w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <Link href='/'>
            <a className='inline-block mr-4  bg-no-repeat bg-center rounded-lg  content-start whitespace-no-wrap object-contain w-20 md:w-36 cursor-pointer'>
              <img
                onClick={dhat}
                class='animate__animated animate__backInDown animate__delay-2s '
                src='/logo-emege.png'
              />
            </a>
          </Link>
          <button
            className='text-gray cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded   block lg:hidden outline-none focus:outline-none'
            type='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center' +
            (navbarOpen ? ' flex' : ' hidden')
          }
          id='example-navbar-danger'
        >
          <ul className=' flex flex-col lg:flex-row list-none lg:ml-auto font-semibold'>
            <li className='nav-item pr-10'>
              <Link href='/patagonia'>
                <a className=' px-3 py-2 flex items-center text-xl text-green-400 hover:text-white '>
                  Cobertura Servicio
                </a>
              </Link>
            </li>
            <li className='nav-item pr-10'>
              <Link href='/promociones'>
                <a className='px-3 py-2 flex items-center text-lg text-green-400 hover:text-white'>
                  Promociones y Eventos
                </a>
              </Link>
            </li>
            <li className='nav-item pr-10'>
              <Link href='/electro'>
                <a className='px-3 py-2 flex items-center text-lg border-white text-green-400 hover:text-white'>
                  Electro Trade
                </a>
              </Link>
            </li>
            {/* <li className="nav-item pr-10">
                      <Link href="/asistencia">
                          <a className="px-3 py-2 flex items-center text-lg text-gray-600 hover:opacity-75 cursor-pointer">Asistencia</a>
                      </Link>
                  </li> */}
            <li className='nav-item'>
              <Link href='/contacto'>
                <a className='px-3 py-2 flex items-center text-lg text-green-400 hover:text-white pr-8'>
                  <h3
                    onClick={dhat}
                    class='animate__animated animate__heartBeat animate__slower 2s animate__infinite infinite'
                  >
                    {' '}
                    Contacto
                  </h3>
                </a>
              </Link>
            </li>
            <li
            //  class='animate__animated animate__fadeInRightBig animate__slow 2s '
              className='nav-item'
            >
              <Link
                src='/logo-emege.png'
                href='https://www.instagram.com/fulltimegroup/'
              >
                <a
                  className='px-3 py-2 flex items-center text-lg text-black hover:opacity-75 cursor-pointer'
                  target='blank'
                >
                  <i className='fab fa-instagram fa-2x'></i>
                </a>
              </Link>
            </li>
            <li
            //  class='animate__animated animate__fadeInRightBig animate__slow 3s '
              className='nav-item'
            >
              <Link href='https://www.facebook.com/fulltimegroup'>
                <a
                  className='px-3 py-2 flex items-center text-lg text-black hover:opacity-75 cursor-pointer'
                  target='blank'
                >
                  <i className='fab fa-facebook-square fa-2x'></i>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);
};

export default Navbar;
