/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const bgs = ["bg-slider1", "bg-slider2", "bg-slider3"];

export default function ImageSlider() {
  const [i, setI] = useState(0);
  const [background, setBackground] = useState(bgs[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setI(prev => (prev + 1) % bgs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setBackground(bgs[i]);
  }, [i]);

  return (
    <section className={`${background} relative h-[670px] bg-cover bg-center`}>
      <article className='flex-center h-full flex-col text-white'>
        <h1 className='font-siteName mb-5 text-[40px] font-extrabold'>Memnon Reisen</h1>
        <p className='text-xl font-medium'>Once Memnon, always Memnon.</p>
      </article>
    </section>
  );
}
