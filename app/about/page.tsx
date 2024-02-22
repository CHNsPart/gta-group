import React from 'react'

export default function page() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center py-12">
      <h2 className='text-2xl font-bold'>About Us</h2>
      <p className='mt-6 w-1/2 text-center leading-8 tracking-normal text-gray-700 dark:text-white'>
        {"Promotional products like apparel, desk accessories, bags and gifts are the perfect way to build your brand. Whether you’re rebranding, planning an event or simply launching a marketing campaign, we’ll make sure you reach your goals, no matter how big or small. Contact us today to learn about our product options and why promo products are a great marketing tool."}
      </p>
      <span className="mt-6 w-1/2 rounded-lg bg-gradient-to-tr from-blue-500 to-blue-700 px-5 py-2 text-center text-lg text-white">Contact Us</span>
      <span className='flex w-fit items-center justify-center rounded-b-lg bg-gray-950 px-5 py-2.5 text-center text-white dark:bg-gray-100 dark:text-black'>
        416-799-1296<br/>
        easypaygtagroup@gmail.com
      </span>
    </div>
  )
}



