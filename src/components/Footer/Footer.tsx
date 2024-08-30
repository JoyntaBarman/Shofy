import React from "react";
import Container from "../Container";
import Image from "next/image";
import { logo } from "@/assets/Image";
import Link from "next/link";
import SocialLinks from "../SocialLinks";

const Footer = () => {
  return (
    <div className="bg-pink-50 p-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
          <div className="lg:col-span-2 flex flex-col gap-5 p-4">
            <Link href={"/"}>
              <Image src={logo} alt="Shofy" className="w-1/2" />
            </Link>
            <p className="text-gray-800 text-base w-2/3">
              Shofy is a powerful tool eCommerce Laravel script for creating a
              professional and visually appealing online store.
            </p>
            <SocialLinks />
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-bold mt-3">My Accounts</h1>
            <Link
              href={"/"}
              className="text-gray-500 text-sm font-bold hover:text-blue duration-300 py-1"
            >
              Track Order
            </Link>
            <Link
              href={"/"}
              className="text-gray-500 text-sm font-bold hover:text-blue duration-300 py-1"
            >
              Shoping
            </Link>
            <Link
              href={"/"}
              className="text-gray-500 text-sm font-bold hover:text-blue duration-300 py-1"
            >
              Wishlist
            </Link>
            <Link
              href={"/"}
              className="text-gray-500 text-sm font-bold hover:text-blue duration-300 py-1"
            >
              My Accounts
            </Link>
            <Link
              href={"/"}
              className="text-gray-500 text-sm font-bold hover:text-blue duration-300 py-1"
            >
              Order History
            </Link>
            <Link
              href={"/"}
              className="text-gray-500 text-sm font-bold hover:text-blue duration-300 py-1"
            >
              Return
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-bold mt-3">Information</h1>
            <Link
              href={"/"}
              className="text-gray-500 text-sm font-bold hover:text-blue duration-300 py-1"
            >
              Our Story
            </Link>
            <Link
              href={"/"}
              className="text-gray-500 text-sm font-bold hover:text-blue duration-300 py-1"
            >
              Careers
            </Link>
            <Link
              href={"/"}
              className="text-gray-500 text-sm font-bold hover:text-blue duration-300 py-1"
            >
              Privacy Policy
            </Link>
            <Link
              href={"/"}
              className="text-gray-500 text-sm font-bold hover:text-blue duration-300 py-1"
            >
              Latest News
            </Link>
            <Link
              href={"/"}
              className="text-gray-500 text-sm font-bold hover:text-blue duration-300 py-1"
            >
              Contact Us
            </Link>
          </div>

          <div>
            <h1 className="text-xl font-bold mt-3">Talk To us</h1>
            <p className="text-gray-500 mt-4">
            Got Questions? Call us
            </p>
            <p className=" font-bold text-xl hover:text-blue duration-300 py-1 cursor-pointer">
            +670 413 90 762
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
