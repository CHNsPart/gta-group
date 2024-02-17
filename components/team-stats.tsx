import React from 'react';

const TeamStats: React.FC = () => {
  return (
    <div className="bg-white py-6 dark:bg-zinc-950 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* text - start */}
        <div className="mb-8 md:mb-12">
          <h2 className="mb-4 text-center text-2xl font-bold text-primary md:mb-6 lg:text-3xl">Our Team by the numbers</h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Proudly operating as a local Canadian business, we deliver quality and excellence in every endeavor.
          </p>
        </div>
        {/* text - end */}

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
          {/* stat - start */}
          <div className="flex flex-col items-center justify-center rounded-lg bg-primary p-4 dark:bg-gray-500/10 lg:p-8">
            <div className="text-xl font-bold text-white dark:text-primary sm:text-2xl md:text-3xl">200+</div>
            <div className="text-sm font-semibold text-secondary dark:text-white sm:text-base">Products</div>
          </div>
          {/* stat - end */}

          {/* stat - start */}
          <div className="flex flex-col items-center justify-center rounded-lg bg-primary p-4 dark:bg-gray-500/10 md:p-8">
            <div className="text-xl font-bold text-white dark:text-primary sm:text-2xl md:text-3xl">500+</div>
            <div className="text-sm font-semibold text-secondary dark:text-white sm:text-base">5★ Reviews</div>
          </div>
          {/* stat - end */}

          {/* stat - start */}
          <div className="flex flex-col items-center justify-center rounded-lg bg-primary p-4 dark:bg-gray-500/10 md:p-8">
            <div className="text-xl font-bold text-white dark:text-primary sm:text-2xl md:text-3xl">1000+</div>
            <div className="text-sm font-semibold text-secondary dark:text-white sm:text-base">Customers</div>
          </div>
          {/* stat - end */}

          {/* stat - start */}
          <div className="flex flex-col items-center justify-center rounded-lg bg-primary p-4 dark:bg-gray-500/10 md:p-8">
            <div className="text-xl font-bold text-white dark:text-primary sm:text-2xl md:text-3xl">Local</div>
            <div className="text-sm font-semibold text-secondary dark:text-white sm:text-base">Canadian Business</div>
          </div>
          {/* stat - end */}
        </div>
      </div>
    </div>
  );
};

export default TeamStats;
