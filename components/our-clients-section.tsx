'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const OurClientsSection = () => {
  const clients = [
    {
      name: 'ADS',
      logo: 'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/ADZ.png',
    },
    {
      name: 'Century',
      logo: 'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Century.png',
    },
    {
      name: 'TIER',
      logo: 'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/TIER.png',
    },
    {
      name: 'GPT',
      logo: 'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/GPT%20Group.png',
    },
    {
      name: 'Xperience Realty',
      logo: 'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Xperience%20Reality.png',
    },
    {
      name: 'Ikonic',
      logo: 'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/ikonic.png',
    },
    {
      name: 'Simtronics',
      logo: 'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Simtronics.png',
    },
    {
      name: 'TAJ',
      logo: 'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/TAJ.png',
    },
    {
      name: 'dott',
      logo: 'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/dott.png',
    },
    {
      name: 'Logix',
      logo: 'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Logix.png',
    },
    {
      name: 'Movado Group',
      logo: 'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Movado-Group_Logo.png',
    },
    {
      name: 'Target',
      logo: 'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Target.png',
    },
    {
      name: 'Power Lease',
      logo: 'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Power%20Lease.png',
    },
  ];

  const firstSlideClients = clients.slice(0, 5);
  const secondSlideClients = clients.slice(5, 10);
  const thirdSlideClients = clients.slice(10);

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Clients</h2>
          <p className="text-gray-600">Served Various Happy Customers and Continuing</p>
        </div>
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="w-full client-swiper"
        >
          <SwiperSlide>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
              {firstSlideClients.map((client, index) => (
                <div 
                  key={client.name} 
                  className={`w-full max-w-[300px] h-32 relative ${
                    index === 4 ? 'col-span-2 md:col-span-1 lg:col-span-1' : ''
                  }`}
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="transition-opacity hover:opacity-80"
                  />
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
              {secondSlideClients.map((client, index) => (
                <div 
                  key={client.name} 
                  className={`w-full max-w-[300px] h-32 relative ${
                    index === 4 ? 'col-span-2 md:col-span-1 lg:col-span-1' : ''
                  }`}
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="transition-opacity hover:opacity-80"
                  />
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 items-center justify-items-center">
              {thirdSlideClients.map((client, index) => (
                <div 
                  key={client.name} 
                  className={`w-full max-w-[300px] h-32 relative ${
                    index === 2 ? 'col-span-2 md:col-span-1 lg:col-span-1' : ''
                  }`}
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="transition-opacity hover:opacity-80"
                  />
                </div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default OurClientsSection; 