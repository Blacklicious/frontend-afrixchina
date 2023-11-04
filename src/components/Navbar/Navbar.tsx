'use client';
import React, { useState, useEffect } from 'react';
import Desktop from '@/components/Navbar/Desktop';
import Mobile from '@/components/Navbar/Mobile'; // Make sure to create a corresponding Mobile component

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  // A handler to call on window resize
  const handleResize = () => {
    // This will set isMobile to true if the window width is less than or equal to 768 pixels
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    // Add event listener on mount
    window.addEventListener('resize', handleResize);
    // Call the handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures effect is only run on mount and unmount

  return (
    <div>
      {isMobile ? <Mobile /> : <Desktop />}
    </div>
  );
};

export default Navbar;
