import React, { useEffect, useRef, useState } from 'react';
import NavBarSelection from './HeroSection/NavBarSelection';

function Navbar() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsInView(true)
    }, 3000)
  }, [])


  return (
    <div
      ref={ref}
      className="flex px-10 py-5 z-10 bg-bgColor text-primary justify-between items-center"
    >
      <img id="logo" src="/favicon.svg" alt="logo" className="w-3vw" />
      <NavBarSelection logoState={isInView} />
    </div>
  )
}

export default Navbar