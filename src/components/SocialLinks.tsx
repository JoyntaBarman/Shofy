import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface props {
  className?: string;
}

const SocialLinks = ({ className }: props) => {
  return (
    <div className={twMerge("flex items-center gap-2", className)}>
      <Link href={'www.facebook.com'} className="p-2  rounded-lg shadow-md shadow-gray-500 bg-gray-200 hover:shadow-none cursor-pointer duration-300 group">
        <FaFacebook className="text-2xl text-gray-700 group-hover:text-blue duration-300" />
      </Link>
      <Link href={'www.x.com'} className="p-2  rounded-lg shadow-md shadow-gray-500 bg-gray-200 hover:shadow-none cursor-pointer duration-300 group">
        <FaTwitter className="text-2xl text-gray-700 group-hover:text-blue duration-300" />
      </Link>
      <Link href={'wwww.youtube.com'} className="p-2  rounded-lg shadow-md shadow-gray-500 bg-gray-200 hover:shadow-none cursor-pointer duration-300 group">
        <FaYoutube className="text-2xl text-gray-700 group-hover:text-red-600 duration-300" />
      </Link>
      <Link href={'wwww.linkedin.com'} className="p-2  rounded-lg shadow-md shadow-gray-500 bg-gray-200 hover:shadow-none cursor-pointer duration-300 group">
        <FaLinkedin className="text-2xl text-gray-700 group-hover:text-blue duration-300" />
      </Link>
    </div>
  );
};

export default SocialLinks;
