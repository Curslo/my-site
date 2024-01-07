"use client"

import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

export function SideBar() {
  return (
    <div>
      <img
        src="/Avatar.jpeg"
        alt="Richard Kisivii"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h1 className="font-kaushan my-4 text-3xl font-medium tracking-wider">
        <span className="text-green-500">Richard </span>Kisivii
      </h1>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        Fullstack Web Developer
      </p>
      <a className="px-2 py-1 my-3 flex items-center justify-center bg-gray-200 rounded-full">
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* Social Icons */}
      <div className="flex justify-around w-9/12 my-5 text-green-500 md:w-full mx-auto">
        <a href="">
          <FaGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <FaFacebook className="w-8 h-8 cursor-pointer" />
        </a>
        <a href=" https://wa.me/0742132564">
          <FaWhatsapp className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <FaInstagram className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* Address */}
      <div className="py-4 my-4 bg-gray-200"
      style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <p>Nairobi, Kenya</p>
        </div>
        <p className="my-2">richardkisivii@gmail.com</p>
        <p className="my-2">0742132564</p>
      </div>

      {/* Buttons */}
      <button className="bg-gradient-to-r from-green-400 to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2" onClick={() => window.open('mailto:richardkisivii@gmail.com')}>Email Me</button>
      <button className="bg-gradient-to-r from-green-400 to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2">Change Theme</button>
    </div>
  );
}
