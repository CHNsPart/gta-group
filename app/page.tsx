"use client"


import React from 'react';
// import { useState, useEffect } from 'react';
import { Header } from "@/components/hero-section";
import TeamStats from "@/components/team-stats";
import CompanyInfo from "@/components/company-info";
import SaleBanner from "@/components/sale-banner";
import { CarouselPlugin } from '@/components/carousel-products';
import { IoIosCloseCircle } from "react-icons/io";
import { Button } from '@/components/ui/button';

export default function IndexPage() {
  // const [showPopup, setShowPopup] = useState(false);

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setShowPopup(true);
  //   }, 2000);

  //   return () => clearTimeout(timeoutId);
  // }, []); 

  return (
    <section className="relative grid items-center gap-6 pb-8">
      <Header />
      <TeamStats />
      <CompanyInfo />
      <SaleBanner />

      {/* {showPopup && <Popup onClose={() => setShowPopup(false)} />} */}
    </section>
  );
}

interface PopupProps {
  onClose: () => void;
}

// const Popup: React.FC<PopupProps> = ({ onClose }) => {
//   return (
//     // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
//       <div className="relative z-10 max-w-xs rounded-lg bg-white p-8">
//         <CarouselPlugin />
//         <Button
//           variant={"ghost"}
//           size={"icon"}
//           onClick={onClose}
//           className="absolute right-2 top-2 cursor-pointer text-black"
//         >
//           <IoIosCloseCircle size={20} />
//         </Button>
//       </div>
//     </div>
//   );
// };
