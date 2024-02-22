import Image from "next/image";
import { Button } from "./ui/button";

export const Header = () => {
    return (
      <div className="relative flex w-full flex-col bg-gradient-to-tr from-blue-300 to-white py-16 dark:from-blue-950 lg:flex-col lg:py-0">
        <div className="container mx-auto flex w-full max-w-xl flex-col items-start px-4 lg:max-w-screen-xl lg:px-8">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="mb-6 max-w-xl">
              <div>
                <p className="mb-4 inline-block rounded-full bg-yellow-500 px-3 py-2 text-xs font-semibold uppercase  tracking-wider text-yellow-950">
                  New Colaboration
                </p>
              </div>
              <h2 className="mb-3 max-w-lg font-sans text-3xl font-bold tracking-tight text-primary sm:text-4xl sm:leading-none">
                Put Your Logo
                <br className="hidden md:block" />
                <span className="inline-block">
                    On Anything!
                </span>
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-200 md:text-lg">
                Are you tired and frustrated with promotional product and marketing efforts that fall flat? Do you find yourself spending hours on the computer without successful results? Feeling defeated and anxious about finding effective gifts for lead generation and referrals? We are here to solve these challenges!
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
                <Button className="dark:text-white" size={"lg"}>
                    Explore Now
                </Button>
            </div>
          </div>
        </div>
        <div className="inset-y-0 right-0 mx-auto w-full max-w-xl px-4 lg:absolute lg:mx-0 lg:mb-0 lg:w-1/2 lg:max-w-full lg:pl-8 lg:pr-0 xl:px-0">
          <Image
            height={500}
            width={500}
            quality={100}
            priority
            className="h-56 w-full rounded object-cover sm:h-96 lg:h-fit lg:rounded-none lg:shadow-none"
            src="/hero-gta.svg"
            alt="hero"
          />
        </div>
      </div>
    );
  };