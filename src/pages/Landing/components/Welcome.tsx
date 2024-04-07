import { FaBookReader } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

export default function Welcome() {
  return (
    <section className=' flex-center container flex-col'>
      <h2 className='mb-5 text-[27px] font-bold text-[#F47C20]'>
        Welcome to Memnon Reisen
      </h2>
      <p className='mb-10 text-center font-medium text-[#232527]'>
        <strong className='text-black'>
          Book your excursions in Hurghada ONLINE with us!
        </strong>
        <br />
        We provide you with a large selection of
        <a href='#' className='text-[#F47C20]'>
          {" "}
          excursions and tours in Egypt{" "}
        </a>{" "}
        to the most popular tourist destinations. <br />
        We are based in Egypt and specialize in organizing
        <a href='#' className='text-[#F47C20]'>
          {" "}
          Private Hurghada Tours{" "}
        </a>{" "}
        to make your Egypt holidays unforgettable!
      </p>
      <ul className='flex-between w-full flex-wrap gap-4'>
        <ListItem title='Free cancellation' />
        <ListItem title='High Quality of Service' />
        <ListItem title='Reasonable prices' />
        <ListItem title='Insurance included' />
      </ul>
      <button className='flex-center gap-2 rounded-3xl bg-[#F47C20] px-8 py-4 text-white'>
        <FaBookReader className='inline' />
        Guest book
      </button>
      <h2 className='my-3 text-3xl font-bold text-[#1C566D]'>
        Egypt & Hurghada Excursions, Tours & Activities
      </h2>
      <div className='flex-between w-full flex-wrap gap-4'>
        <Card title='Egypt Cultural Tours' bgImage='bg-card1' />
        <Card title='Safari Tours & Trips' bgImage='bg-card2' />
        <Card title='Snorkeling Tours & Trips' bgImage='bg-card3' />
      </div>
    </section>
  );
}

function Card({ title, bgImage }: { title: string; bgImage: string }) {
  return (
    <div
      className={`relative cursor-pointer overflow-hidden rounded-full bg-[#888] after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:bg-black after:opacity-0 hover:after:opacity-20`}
    >
      <div
        className={`${bgImage} bg-contain bg-center bg-no-repeat px-16 py-24`}
      >
        <a className='text-[25px] text-white' href='#'>
          {title}
        </a>
      </div>
    </div>
  );
}

function ListItem({ title }: { title: string }) {
  return (
    <li>
      <TiTick className='inline text-4xl font-thin text-green-600' /> {title}
    </li>
  );
}
