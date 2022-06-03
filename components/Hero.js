import Image from 'next/image';
import hero from '../public/img-1.jpg';

const Hero = () => {
  return (
    <div className='w-full'>
      <div className='relative overflow-hidden'>
        <Image className='object-cover' src={hero} width={1920} alt='gondola' />

        <div className='absolute top-40 left-44 px-6 py-4'>
          <h4 className='mb-3 text-8xl font-semibold tracking-tight text-white'>
            Trade Marketing
          </h4>
          <div className='mt-12'>
            <p className='text-3xl leading-normal w-1/2'>
              Lorem ipsum dolor, sit amet cons ectetur adipis icing elit.
              Praesen tium, quibusdam facere quo laborum maiores sequi nam
              tenetur laud.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
