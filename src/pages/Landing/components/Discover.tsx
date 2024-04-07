import tourCard1 from "@/assets/Private-Tour-to-Luxor-5.jpg";
import tourCard2 from "@/assets/Tour-to-Cairo-2.jpg";
import tourCard3 from "@/assets/snorklingwithdolphin.jpg";
import { ReactNode } from "react";
import { TiStarFullOutline, TiTick } from "react-icons/ti";
import { discoverData } from "../discoverData";

type TButtonProps = {
  children?: ReactNode;
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

type TCardProps = {
  title: string;
  description: string;
  bgImage: string;
};

export default function Discover() {
  return (
    <section className='container'>
      <h2 className='my-5 text-center text-3xl font-bold text-[#1C566D]'>
        Discover Egypt with us
      </h2>
      <div className='hidden md:flex md:justify-between'>
        <List
          items={discoverData}
          title='Excursions from Hurghada, El Founa,Makadi'
        />
        <List items={discoverData} title='Excursions from Marsa Alam' />
        <List items={discoverData} title='Excursions from El-Quseir' />
        <List items={discoverData} title='Safaga Shore Excursions' />
      </div>
      <div className='flex-center my-5 flex-col gap-5'>
        <div className='flex w-full justify-around'>
          <Button>Send Request</Button>
          <Button>Pricelist</Button>
        </div>
        <div className='flex-between w-full flex-wrap gap-5'>
          <ExcursionsCard
            title='Excursions from Hurghada'
            description='El Gouna, Sahl Hasheesh, Makadi'
            bgImage='bg-discover1'
          />
          <ExcursionsCard
            title='Excursions from Marsa Alam'
            description='Private excursions'
            bgImage='bg-discover2'
          />
          <ExcursionsCard
            title='Excursions from El- Quseir'
            description='Private excursions from Safaga'
            bgImage='bg-discover3'
          />
          <ExcursionsCard
            title='Safaga Shore Excursions'
            description='(Excursions from Safaga port | Shore excursions from Safaga)'
            bgImage='bg-discover4'
          />
        </div>
        <Button>Pricelist</Button>
      </div>
      <div className="flex-between flex-wrap gap-5 my-20">
        <TourCard
          title='Private Tour to Luxor'
          description='Would you like to see magnificent monuments in Luxor and learn more about Egyptian mythology?
          This Private Tour to Luxor allows you to immerse yourself deeply in the world of the pharaohs ...'
          bgImage={tourCard1}
        />
        <TourCard
          title='Private Tour to Cairo'
          description='The last remaining of the Seven Wonders of the ancient world, the great pyramids of Giza are perhaps the most famous and discussed structures in history.
          But Cairo has much more places to see. Discover the history of Egypt with us.'
          bgImage={tourCard2}
        />
        <TourCard
          title='Dolphin House Snorkeling and Swimming with Dolphins'
          description='Dolphin House trip in the most beautiful trip to see the dolphin in its natural environment at a time when you have a chance not frequent swimming next to the dolphins in a rare experience.'
          bgImage={tourCard3}
        />
      </div>
    </section>
  );
}

function Button({ props, children }: TButtonProps) {
  return (
    <button
      className='rounded-[50px] bg-[#1C566D] px-[30px] py-[15px] font-medium text-white shadow-2xl transition-all duration-300 ease-in-out hover:bg-[#F47C20]'
      {...props}
    >
      {children}
    </button>
  );
}

function TourCard({ title, description, bgImage: image }: TCardProps) {
  return (
    <div className="w-[32.054%] mx-auto min-w-[300px] flex-between flex-col text-center gap-5">
      <figure>
        <img src={image} alt='Tour Place' className="h-56 w-full mb-10 hover:animate-beat" />
      </figure>
      <h3 className="text-[#F47C20] text-[25px] font-bold">{title}</h3>
      <p>{description}</p>
      <button className='rounded-3xl bg-[#F47C20] px-[20px] py-[10px] text-white'>
        more details
      </button>
    </div>
  );
}

function ExcursionsCard({ description, bgImage, title }: TCardProps) {
  return (
    <div
      className={`${bgImage} flex-between shadow-card mx-auto h-96 w-[22.857%] min-w-[270px] flex-col rounded-[30px] bg-cover bg-center px-3 py-10 text-center text-white`}
    >
      <h3 className='mt-10 text-3xl font-bold'>{title}</h3>
      <p>{description}</p>
      <button className='rounded-3xl bg-[#F47C20] px-[20px] py-[10px]'>
        more details
      </button>
    </div>
  );
}

function List({ items, title }: { items: string[]; title: string }) {
  return (
    <div>
      <TiStarFullOutline className='mx-auto text-7xl text-[#1C566D]' />
      <h3 className='py-4 text-center text-2xl font-bold text-[#F47C20]'>
        {title}
      </h3>
      <ul>
        {items.map((item, i) => (
          <ListItem key={i} title={item} />
        ))}
      </ul>
    </div>
  );
}

function ListItem({ title }: { title: string }) {
  return (
    <li className='flex gap-2'>
      <TiTick className='inline text-4xl font-thin text-[#F47C20]' />
      <p> {title} </p>
    </li>
  );
}
