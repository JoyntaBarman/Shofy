import React from "react";
import { ErrorImage } from "@/assets/Image";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full my-20 flex justify-center items-center">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={ErrorImage}
          alt="Shofy Not found"
          // className="w-64 h-80 object-contain"
        />
        <h1 className="text-2xl ">Oops! Page not found</h1>
        <p className="text-gray-400 w-[400px] text-center">
          Whoops, this is embarrassing. Looks like the page you were looking for
          wasn't found.
        </p>
        <Link
          href={"/"}
          className="bg-blue px-5 py-2 rounded text-white hover:bg-blackbg duration-300"
        >
          Go To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
