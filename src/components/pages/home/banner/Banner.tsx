'use client';
import { motion } from 'framer-motion';
import { HeaderImageOne } from '@/assets/Image';
import Container from '@/components/Container';
import { headerText } from '@/constants';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function Banner() {
  return (
    <div className="bg-dark-blue flex items-center justify-center w-screen md:h-[500px] mt-4 py-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white">
          <div className="flex flex-col justify-center items-start gap-4">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl leading-4"
            >
              {headerText[0]?.price}
            </motion.p>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-5xl font-semibold max-w-[400px]"
            >
              {headerText[0]?.title}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xl"
              dangerouslySetInnerHTML={{ __html: headerText[0]?.discount }}
            ></motion.p>

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-whiteText px-4 py-3 text-black font-semibold rounded"
            >
              Shop now
            </motion.button>
          </div>
          <div>
            <Image src={HeaderImageOne} alt="Watch" />
          </div>
        </div>
      </Container>
    </div>
  );
}
