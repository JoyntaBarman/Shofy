import { Navlink } from '@/constants';
import Container from '../Container';
import { link } from 'fs';
import Link from 'next/link';
import { FiPhone } from 'react-icons/fi';

export default function BottomHeader() {
  return (
    <Container>
      <nav className="justify-between items-center hidden lg:flex">
        <ul className="flex gap-2 mt-4">
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

        <div className="flex gap-4 items-center">
          <FiPhone size={24} />
          <div className="text-sm cursor-pointer font-semibold">
            <p>Hotline:</p>
            <p className="hover:text-blue">8 800 332 65-66</p>
          </div>
        </div>
      </nav>
    </Container>
  );
}
