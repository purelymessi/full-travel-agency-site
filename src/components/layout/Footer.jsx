import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaTwitter } from 'react-icons/fa';
import logo2 from '../../assets/logo2.png'; 

export default function FooterSection() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-between px-4 lg:px-16">
        <div className="w-full lg:w-1/5 mb-8 lg:mb-0 flex flex-col items-center lg:items-start">
          <img src={logo2} alt="Logo" className="w-[187px] h-[88px] mb-4" />
        </div>
        <div className="w-full lg:w-1/5 mb-8 lg:mb-0">
          <h3 className="text-lg font-bold mb-4">Terms & policies</h3>
          <ul>
            <li className="mb-2">
              <a href="#terms" className="opacity-75 hover:opacity-100">Terms of Service</a>
            </li>
            <li>
              <a href="#privacy" className="opacity-75 hover:opacity-100">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/5 mb-8 lg:mb-0">
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul>
            <li className="mb-2">
              <a href="#home" className="opacity-75 hover:opacity-100">Home</a>
            </li>
            <li className="mb-2">
              <a href="#about" className="opacity-75 hover:opacity-100">About Us</a>
            </li>
            <li>
              <a href="#contact" className="opacity-75 hover:opacity-100">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/5 mb-8 lg:mb-0">
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <ul>
            <li className="mb-2 opacity-75">(+62) 893912392190</li>
            <li className="opacity-75">agencycr@gmail.com</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/5">
          <h3 className="text-lg font-bold mb-4">Location</h3>
          <ul>
            <li className="mb-2 opacity-75">PT Osiris Real Estate Internasional</li>
            <li className="mb-2 opacity-75">Jl. KH. Wahid Hasyim Kel No.10D</li>
            <li className="mb-2 opacity-75">Jakarta, Indonesia</li>
            <li className="opacity-75">team@OsirisRealEstate.com</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-10 flex flex-col lg:flex-row justify-between items-center px-4 lg:px-16">
        <div className="flex space-x-6 mb-4 lg:mb-0">
          <a href="#facebook" className="opacity-75 hover:opacity-100"><FaFacebookF /></a>
          <a href="#instagram" className="opacity-75 hover:opacity-100"><FaInstagram /></a>
          <a href="#linkedin" className="opacity-75 hover:opacity-100"><FaLinkedinIn /></a>
          <a href="#email" className="opacity-75 hover:opacity-100"><FaEnvelope /></a>
          <a href="#twitter" className="opacity-75 hover:opacity-100"><FaTwitter /></a>
        </div>
        <p className="text-sm opacity-75">&copy; 2022 Agency Creative. All Rights Reserved</p>
      </div>
    </footer>
  );
}
