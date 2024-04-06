import logo from "@/assets/Logo-Memnon-final-english-300x122.png";
import frensh from "@/assets/memnon-reisen-de.png";
import english from "@/assets/memnon-reisen-en.png";
import { useState } from "react";
import { BsList } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const tours = [
  "Tours & Excursions from Hurghada",
  "Tours & Excursions from El-Gouna",
  "Tours & Excursions from Sahl Hasheesh",
  "Tours & Excursions from Soma Bay",
  "Tours & Excursions from Makadi",
  "Tours & Excursions from Marsa Alam",
  "Tours & Excursions from El-Quseir",
  "Safaga Shore Excursions",
  "Nile Cruises",
  "Egypt Tours",
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  return (
    <header className='w-full max-w-[2764px] bg-[#1C566D]'>
      <div className='flex-center container flex-col gap-5 px-2 py-3'>
        <ul className='flex w-full justify-end'>
          <li className='cursor-pointer px-2 py-1 hover:bg-[#3f444b]'>
            <img src={english} alt='English' />
          </li>
          <li className='cursor-pointer px-2 py-1 hover:bg-[#3f444b]'>
            <img src={frensh} alt='Frensh' />
          </li>
        </ul>
        <figure>
          <a href='#'>
            <img
              width='300'
              height='122'
              src={logo}
              className=''
              alt='Logo Memnon'
            />
          </a>
        </figure>
        <ul className='hidden flex-wrap gap-3 p-2 font-list text-[22px] font-semibold text-[#f58732] md:flex md:justify-center'>
          <ListItem title='Home' />
          <ListItem title='Who we are ?' />
          <ListItem title='Guest book' />
          <li className='group relative cursor-pointer px-4 py-2 hover:bg-[#3f444b]'>
            <a href='#'>
              Tours & Excursions
              <FaCaretDown className='inline' />
            </a>
            <ul className='shadow-list absolute hidden bg-[#1C566D] text-xl font-medium text-white group-hover:block'>
              {tours.map(tour => (
                <ListItem key={tour} title={tour} />
              ))}
            </ul>
          </li>
          <ListItem title='Contacts' />
          <ListItem title='Pricelist' />
          <ListItem title='Airport transfer' />
        </ul>
        <div className='flex-center w-full flex-col md:hidden'>
          <button onClick={() => setIsMenuOpen(prev => !prev)}>
            {isMenuOpen ? (
              <IoMdClose className='text-2xl text-white' />
            ) : (
              <BsList className='text-2xl text-white' />
            )}
          </button>
          <ul
            className={`w-full font-list text-[22px] font-semibold text-white duration-500 ${isMenuOpen ? "h-auto p-2" : "h-0"} overflow-hidden`}
          >
            <ListItem title='Home' />
            <ListItem title='Who we are ?' />
            <ListItem title='Guest book' />
            <li className='group relative cursor-pointer px-4 py-2 hover:bg-[#3f444b]'>
              <button onClick={() => setIsSubMenuOpen(prev => !prev)}>
                Tours & Excursions
                <FaCaretDown className='inline' />
              </button>
              <ul
                className={`shadow-list bg-[#1C566D] text-xl font-medium text-white ${isSubMenuOpen ? "inline-block" : "hidden"}`}
              >
                {tours.map(tour => (
                  <ListItem key={tour} title={tour} />
                ))}
              </ul>
            </li>
            <ListItem title='Contacts' />
            <ListItem title='Pricelist' />
            <ListItem title='Airport transfer' />
          </ul>
        </div>
      </div>
    </header>
  );
}

function ListItem({ title }: { title: string }) {
  return (
    <li className='cursor-pointer px-4 py-2 hover:bg-[#3f444b]'>
      <a href='#'>{title}</a>
    </li>
  );
}
