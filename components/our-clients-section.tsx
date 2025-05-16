import Image from 'next/image';

const OurClientsSection = () => {
  const clients = [
    {
      name: 'Power Lease',
      logo: 'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Group%2034.png',
    },
    {
      name: 'ADS',
      logo: 'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Group%2035.png',
    },
    {
      name: 'Ikonic Limousine',
      logo: 'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Group%2036.png',
    },
    {
      name: 'Ikonic International',
      logo: 'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Group%2037.png',
    },
    {
      name: 'Xperience Realty',
      logo: 'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Group.png',
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Clients</h2>
          <p className="text-gray-600">Served Various Happy Customers and Continuing</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div key={client.name} className="w-full max-w-[200px] h-20 relative">
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
      </div>
    </section>
  );
};

export default OurClientsSection; 