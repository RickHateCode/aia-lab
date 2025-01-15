import React from 'react';

const Clients = () => {
  const clients = [
    { name: 'Client 1', logo: '/aia-lab/images/r-removebg-preview.png' },
    { name: 'Client 2', logo: '/aia-lab/images/i-removebg-preview.png' },
    { name: 'Client 3', logo: '/aia-lab/images/j-removebg-preview.png' },
    { name: 'Client 4', logo: '/aia-lab/images/k-removebg-preview.png' },
    { name: 'Client 4', logo: '/aia-lab/images/l-removebg-preview.png' },
    { name: 'Client 4', logo: '/aia-lab/images/m-removebg-preview.png' },
    { name: 'Client 4', logo: '/aia-lab/images/n-removebg-preview.png' },
    { name: 'Client 4', logo: '/aia-lab/images/o-removebg-preview.png' },
    { name: 'Client 4', logo: '/aia-lab/images/p-removebg-preview.png' },
    { name: 'Client 4', logo: '/aia-lab/images/q-removebg-preview.png' },
    { name: 'Client 4', logo: '/aia-lab/images/s-removebg-preview.png' },
    { name: 'Client 4', logo: '/aia-lab/images/t-removebg-preview.png' },
    { name: 'Client 4', logo: '/aia-lab/images/c-removebg-preview.png' },
    { name: 'Client 4', logo: '/aia-lab/images/d-removebg-preview.png' },
    { name: 'Client 4', logo: '/aia-lab/images/e-removebg-preview.png' },
    { name: 'Client 4', logo: '/aia-lab/images/f-removebg-preview.png' },
    { name: 'Client 4', logo: '/aia-lab/images/g-removebg-preview.png' },
    { name: 'Client 4', logo: '/aia-lab/images/h-removebg-preview.png' },
  ];

  return (
    <section id="clients" className="py-20 bg-gray-50 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 container">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl  font-bold text-black mb-4">
          Approuvé par des marques leaders
          </h2>
          <div className="w-20 h-1 bg-[#08c1dc] mx-auto mb-8"></div>
        </div>

        <div className="relative overflow-hidden">
          {/* First row of sliding logos */}
          <div className="flex animate-slide">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex items-center justify-center min-w-[50px] md:min-w-[100px] mx-8"
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img src={client.logo} alt="" className='max-w-20'/>
                </div>
              </div>
            ))}
          </div>

          {/* Second row of sliding logos (opposite direction) */}
          <div className="flex animate-slide-reverse mt-12">
            {[...clients.reverse(), ...clients].map((client, index) => (
              <div
                key={`${client.name}-reverse-${index}`}
                className="flex items-center justify-center min-w-[50px] md:min-w-[100px] mx-8"
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img src={client.logo}  alt="" className='max-w-20' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;