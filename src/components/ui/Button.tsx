import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface props {
  children: React.ReactNode;
  className?: string;
  href?: string;
  event?: Function;
}

export default function Button({ children, className, href, event }: props) {
  const newClassName = twMerge('px-4 hover:text-blue', className);
  const buttonClass = twMerge(
    'px-4 py-2 rounded-md text-black bg-white font-semibold hover:bg-transparent hover:border hover:border-white/50',
    className
  );
  if (href) {
    return (
      <Link className={newClassName} href={href}>
        {children}
      </Link>
    );
  } else {
    return (
      <button onClick={() => event()} className={buttonClass}>
        {children}
      </button>
    );
  }
}
