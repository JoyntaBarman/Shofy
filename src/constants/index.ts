import { link } from 'fs';
import { title } from 'process';



const Navlink: object[] = [
  {
    title : 'Home',
    link: '/'
  },
  {
    title: 'Shop',
    link: '/shop'
  },
  {
    title: 'Vendor',
    link: '/vendor'
  },
  {
    title: 'Pages',
    link: '/pages'
  },
  {
    title: 'Blogs',
    link: '/blogs'
  },
  {
    title: 'Contact',
    link: '/contact'
  },
];

const headerText = [
  {
    price: 'starting at $999',
    title: 'The best tablet collection 2023',
    discount: 'Exclusive offer <span className="text-yellow-700">-35</span> off this offer'
  }
]

export {Navlink, headerText};
