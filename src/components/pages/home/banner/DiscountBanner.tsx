import {
  DiscountImageOne,
  DiscountImageTwo,
  HeaderImageOne,
} from '@/assets/Image';
import Container from '@/components/Container';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

export default function DiscountBanner() {
  return (
    <Container>
      <div className="grid lg:grid-cols-3 gap-4 my-10">
        <div className="h-[250px] md:h-auto lg:col-span-2 group hover:cursor-pointer overflow-hidden rounded-lg relative">
          <Image
            className="rounded-lg w-full h-full object-cover cursor-pointer  transform transition-transform duration-300 group-hover:scale-110"
            src={DiscountImageOne}
            alt="Discount"
          />

          <div className="absolute h-full w-full flex flex-col justify-center gap-2 top-0 left-0 ml-10">
            <p className="font-medium">Ads 1 Sale 20% off all store</p>
            <p className="text-4xl font-semibold max-w-xs hover:text-blue cursor-pointer duration-200">
              Smartphone BLU G91 Pro 2022
            </p>
            <span>
              <button className="px-4 py-3 bg-white text-black flex gap-2 items-center hover:gap-4 duration-200 rounded-lg">
                shop now
                <FaArrowRight />
              </button>
            </span>
          </div>
        </div>
        <div className=" lg:grid-cols-1 rounded-lg hover:cursor-pointer group overflow-hidden relative">
          <Image
            className="rounded-lg w-full cursor-pointer  transform transition-transform duration-300 group-hover:scale-110"
            src={DiscountImageTwo}
            alt="Discount"
          />

          <div className="absolute h-full w-full flex flex-col justify-center gap-2 top-0 left-0 ml-10">
            <p className="font-medium">Ads 2 Sale 35% off</p>
            <p className="text-4xl font-semibold max-w-xs hover:text-blue cursor-pointer duration-200">
              HyperX Cloud II Wireless
            </p>
            <span>
              <button className="px-4 py-3 bg-white text-black flex gap-2 items-center hover:gap-4 duration-200 rounded-lg">
                shop now
                <FaArrowRight />
              </button>
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}
