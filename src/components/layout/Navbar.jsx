import React from 'react';
import Button from '../ui/Button';
import Logo from '../ui/Logo';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white">
      <Logo />
      <ul className="flex space-x-3">
        <button  href = "#home" className="hover:text-blue-500">Home</button>
        <button href = "#about" className="hover:text-blue-500">About</button>
        <button href = "#services" className="hover:text-blue-500">Services</button>
        <button href = "#projects" className="hover:text-blue-500">Projects</button>
      </ul>
      <Button className="border border-[#377dff]" text= "Contact Us"/> 
    </nav>
  );
};

export default Navbar;
