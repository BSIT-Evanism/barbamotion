import { useRef } from 'react';
import NavBarSelection from './HeroSection/NavBarSelection';

function Navbar() {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="flex px-10 py-5 z-10 bg-bgColor text-primary justify-between items-center"
    >
      <img id="logo" src="/favicon.svg" alt="logo" className="w-10vw md:w-3vw" />
      <NavBarSelection />
    </div>
  )
}

export default Navbar