import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 pt-3 sm:pt-6">
      {/* Main Header */}
      <div className="pudding-container py-4 sm:py-6 md:py-8 flex justify-between items-center relative">
        {/* Left Spacer */}
        <div className="flex-1 flex justify-start">
          {/* Spacer */}
        </div>

        {/* Logo Container - Centered on all screen sizes */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="The Pudding Logo"
              width={400}
              height={100}
              className="h-auto w-[220px] sm:w-[280px] md:w-[320px] lg:w-[400px]"
              priority
            />
          </Link>
        </div>

        {/* Right side - Subscribe button */}
        <div className="flex-1 flex justify-end">
          <Link href="/subscribe">
            <Image
              src="/images/subscribe.png"
              alt="Subscribe"
              width={200}
              height={55}
              className="h-auto w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px]"
            />
          </Link>
        </div>
      </div>

      {/* Navigation - Scrollable on mobile */}
      <nav className="pudding-container py-2 mt-2 flex justify-start md:justify-center space-x-3 md:space-x-4 overflow-x-auto hide-scrollbar">
        <button className="navigation-link flex items-center shrink-0">
          <Image
            src="https://ext.same-assets.com/1529999494/3392076463.png"
            alt="Our Faves"
            width={80}
            height={30}
            className="h-auto w-[70px] md:w-[80px]"
          />
        </button>
        <button className="navigation-link flex items-center shrink-0">
          <Image
            src="https://ext.same-assets.com/4098661460/3646292824.png"
            alt="Popular"
            width={80}
            height={30}
            className="h-auto w-[70px] md:w-[80px]"
          />
        </button>
        <button className="navigation-link flex items-center shrink-0">
          <Image
            src="https://ext.same-assets.com/2893710483/2072932812.png"
            alt="Updating"
            width={80}
            height={30}
            className="h-auto w-[70px] md:w-[80px]"
          />
        </button>
        <button className="navigation-link flex items-center shrink-0">
          <Image
            src="https://ext.same-assets.com/20237173/391805107.png"
            alt="Your Input"
            width={80}
            height={30}
            className="h-auto w-[70px] md:w-[80px]"
          />
        </button>
        <button className="navigation-link flex items-center shrink-0">
          <Image
            src="https://ext.same-assets.com/1803232702/3672488227.png"
            alt="Video"
            width={80}
            height={30}
            className="h-auto w-[70px] md:w-[80px]"
          />
        </button>
        <button className="navigation-link flex items-center shrink-0">
          <Image
            src="https://ext.same-assets.com/1973638837/607026264.png"
            alt="Audio"
            width={80}
            height={30}
            className="h-auto w-[70px] md:w-[80px]"
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;
