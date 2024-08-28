'use client';
import { logo } from '@/assets/Image';
import Image from 'next/image';
import Container from '../Container';
import { PiUserCircleThin } from 'react-icons/pi';
import { HiArrowsUpDown } from 'react-icons/hi2';
import { MdFavoriteBorder } from 'react-icons/md';
import { TbShoppingBagExclamation } from 'react-icons/tb';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { useState } from 'react';
import Menu from './Menu';
import { RxCross2 } from 'react-icons/rx';
import { motion, AnimatePresence } from 'framer-motion';
import { Navlink } from '@/constants';
import Link from 'next/link';

export default function MiddleHeader() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container>
      <div className="flex gap-4 items-center justify-between py-7">
        {/* Left side */}
        {/* <Button className='w-[140px]' href="/"> */}
        <div>
          <Image src={logo} width={140} alt="Shofy" />
        </div>
        {/* </Button> */}
        {/* middle  */}
        <div className="hidden lg:block border-2 border-blue w-[500px] ">
          <Input />
        </div>
        {/* Right side */}
        <div className="flex gap-8 items-center">
          {/* User */}
          <Button href="/login" className="hover:text-black">
            <div className="gap-1 items-center hidden lg:flex">
              <PiUserCircleThin size={50} />
              <div className="text-base font-medium hidden xl:flex flex-col justify-between">
                <p className="text-nowrap">Hello, Guest</p>
                <p className="text-nowrap">Login / Resister</p>
              </div>
            </div>
          </Button>

          {/* icons */}
          <div className="flex gap-4 items-center">
            {/* Compare page */}
            <Button href="/compare" className="px-0">
              <p className="relative">
                <HiArrowsUpDown size={24} />
                <span className="w-5 h-5 inline-flex bg-blue text-white rounded-full absolute -top-2 -right-2 items-center justify-center text-xs">
                  0
                </span>
              </p>
            </Button>

            {/* wishList */}
            <Button href="/wishlist" className="px-0 hidden lg:flex">
              <p className="relative">
                <MdFavoriteBorder size={24} />
                <span className="w-5 h-5 inline-flex bg-blue text-white rounded-full absolute -top-2 -right-2 items-center justify-center text-xs">
                  0
                </span>
              </p>
            </Button>
            {/* cart */}
            <Button href="/cart" className="px-0">
              <p className="relative">
                <TbShoppingBagExclamation size={24} />
                <span className="w-5 h-5 inline-flex bg-blue text-white rounded-full absolute -top-2 -right-2 items-center justify-center text-xs">
                  0
                </span>
              </p>
            </Button>

            <div
              onClick={() => setShowMenu(!showMenu)}
              className="lg:hidden w-7 h-6 flex flex-col justify-between group overflow-hidden cursor-pointer hover:"
            >
              <span className="w-full h-[3px] bg-black hover:bg-black inline-flex transform translate-x-0 rounded-full group-hover:translate-x-2 duration-200"></span>
              <span className="w-full h-[3px] bg-black hover:bg-black inline-flex transform translate-x-3 rounded-full group-hover:translate-x-1 duration-200"></span>
              <span className="w-full h-[3px] bg-black hover:bg-black inline-flex transform translate-x-2 rounded-full group-hover:translate-x-3 duration-200"></span>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.01, duration: 0.2 }}
              exit={{ opacity: 0, transition: { delay: 0.4, duration: 0.2 } }}
              className="absolute w-screen  bg-black/50 top-0 right-0 bottom-0 flex justify-end z-50"
            >
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { delay: 0.05, duration: 0.2 },
                }}
                exit={{
                  x: 50,
                  opacity: 0,
                  transition: { delay: 0.1, duration: 0.2 },
                }}
                className="sticky w-1/2 md:w-1/3 h-full bg-white"
              >
                <span
                  onClick={() => setShowMenu(!showMenu)}
                  className="absolute top-4 right-4 cursor-pointer hover:text-blue"
                >
                  <RxCross2 size={32} />
                </span>

                <ul className="mt-16 ml-4 space-y-4 text-xl">
                  {Navlink.map((item) => {
                    return (
                      <li key={item.title}>
                        <Link
                          className="px-4 py-3 hover:text-blue/80 duration-200"
                          href={item?.link}
                        >
                          {item?.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Container>
  );
}
