import Image from 'next/image';
import React from 'react';

const CompanyInfo: React.FC = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 dark:bg-black">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div>
            <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
              <Image
                height={500}
                width={500}
                src="/plogo.png"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="size-full object-cover object-center"
              />
            </div>
          </div>

          <div className="md:pt-8">
            <p className="text-center font-bold text-primary md:text-left">How This Works?</p>

            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left dark:text-white">
                Bring Your Ideas To Life With Us
            </h1>

            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
               {"Elevate your brand with our hassle-free platform, turning your logo into impactful merchandise. From mugs to t-shirts, order in bulk at unbeatable prices. Unleash your brand's potential effortlessly."}
              <br />
              <br />
              {"At"}{' '}<a href="#" className="text-primary underline transition duration-100 hover:text-indigo-600 active:text-indigo-700">GTA Group,</a>
              {' '}
              {"we believe in turning your creative visions into reality without breaking the bank. Our platform simplifies the process of ordering bulk quantities of custom-branded products at a reasonable price point. Whether it's mugs for your team, flasks for an event, or t-shirts for a promotional campaign – we’ve got you covered. Take advantage of our user-friendly interface and turn your bulk orders into a hassle-free, cost-effective experience. Elevate your branding strategy by making a lasting impression with personalized products that showcase your logo in style."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
