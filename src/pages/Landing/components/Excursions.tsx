import ExcursionImage1 from "@/assets/15979144-hurghada-egypt-scaled.jpg";
import ExcursionImage3 from "@/assets/3-Hours-Safari-by-Quad-Bike-Camel-Ride-5-1024x576.jpg";
import ExcursionImage4 from "@/assets/paradise-island-hurghada-9-1024x576.jpg";
import ExcursionImage2 from "@/assets/slider-1-gouna.jpg";

type TCardProps = {
  title: string;
  description: string;
  bgImage: string;
};

export default function Excursion() {
  return (
    <section className='container text-center space-y-5'>
      <article>
        <h2 className='my-5 text-3xl font-bold'>
          Egypt Day Tours & Hurghada Excursions
        </h2>
        <p>
          From visiting the monasteries to a city tour in Hurghada; we offer a
          lot of variety and fun for the whole family.
        </p>
      </article>
      <div className='flex-between w-full flex-wrap'>
        <ExcursionsCard
          title='Hurghada Private City Tour'
          description='You have a chance to put together this tour of your choice, choosing only the most interesting places. Hurghada city tour with Memnon Reisen is away from mass tourism and without sales events.'
          bgImage={ExcursionImage1}
        />
        <ExcursionsCard
          title='El Gouna City Tour Private Trip'
          description='The Sightseeing Tour in El-Gouna includes various points and stops in the main interesting places in the city.  The main points of the program: a visit to the beautiful city of El-Gouna, a walk in the Down Town and an exciting lagoon trip. '
          bgImage={ExcursionImage2}
        />
        <ExcursionsCard
          title='3 Hours Safari by Quad Bike & Camel Ride'
          description='Desert Safari Quad Bike and Camel Ride is the most recommended Safari tour in Hurghada and Marsa Alam. Safari by Quad Bike & Camel Ride takes 3 hours – an extremely dusty tour with absolute fun guaranteed!'
          bgImage={ExcursionImage3}
        />
        <ExcursionsCard
          title='Paradise Island Snorkeling Day Tour'
          description='Want to escape the busy life & enjoy a sunny relaxing getaway? Paradise island snorkeling tour is among the top rated snorkeling tours in Hurghada.
          The Paradise island is perfect for those seeking tranquility.'
          bgImage={ExcursionImage4}
        />
      </div>
      <button className='shadow-card rounded-full border-[1px] border-solid border-[#1C566D] px-6 py-4 font-semibold'>
        All excursions
      </button>
    </section>
  );
}

function ExcursionsCard({ title, description, bgImage: image }: TCardProps) {
  return (
    <div className='mx-auto flex w-1/2 min-w-[400px] justify-between gap-5 p-2 text-center'>
      <figure className='w-1/2'>
        <img src={image} alt='Tour Place' className='h-52 w-full' />
      </figure>
      <div className='w-1/2 space-y-3'>
        <h3 className='text-[25px] font-bold text-[#F47C20]'>{title}</h3>
        <p>{description}</p>
        <button className='rounded-3xl bg-[#1C566D] px-[20px] py-[10px] text-white'>
          more details
        </button>
      </div>
    </div>
  );
}
