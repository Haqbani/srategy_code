import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 sm:py-10 md:py-12 mt-8 sm:mt-12 md:mt-16">
      <div className="pudding-container px-4 sm:px-6">
        {/* Merch Promotion */}
        <div className="mb-8 sm:mb-10 md:mb-12 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <p className="text-gray-600 mb-2 text-sm sm:text-base">If you like our stories, you'll love our merch</p>
            <Image
              src="/images/merch-sticker.png"
              alt="The Pudding merch sticker"
              width={250}
              height={80}
              className="h-auto w-[180px] sm:w-[200px] md:w-[250px]"
            />
          </div>
          <div className="mt-4 lg:mt-0">
            <Link
              href="https://the-pudding.printify.me/products"
              className="bg-pudding-darkgrey text-white px-4 sm:px-6 py-2 sm:py-3 rounded text-sm sm:text-base hover:bg-opacity-90 transition-colors"
            >
              Shop our swag
            </Link>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Support Us */}
          <div className="mb-6 sm:mb-0">
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Support us on Patreon</h4>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              We pour our heart into these stories, but they take time and money.
              For just $2/month, you can help support us. Join our growing
              community of data-driven enthusiasts.
            </p>
          </div>

          {/* Subscribe */}
          <div className="mb-6 sm:mb-0">
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Subscribe to our newsletter</h4>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Get all our latest stories in your inbox. Plus get links to some
              of our favorite projects from around the web.
            </p>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">About Us</h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base">
              <li>
                <Link href="/about" className="hover:text-pudding-pink">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-pudding-pink">
                  Our Resources
                </Link>
              </li>
              <li>
                <Link href="/pitch" className="hover:text-pudding-pink">
                  Pitch a Story
                </Link>
              </li>
              <li>
                <Link href="https://polygraph.cool" className="hover:text-pudding-pink">
                  Brand Partnerships
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-pudding-pink">
                  Privacy Policy
                </Link>
              </li>
            </ul>

            <h4 className="font-bold text-base sm:text-lg mt-6 sm:mt-8 mb-3 sm:mb-4">Follow Us</h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base">
              <li>
                <Link href="https://www.instagram.com/the.pudding" className="hover:text-pudding-pink">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/puddingviz/" className="hover:text-pudding-pink">
                  Twitter/X
                </Link>
              </li>
              <li>
                <Link href="https://www.tiktok.com/@the_pudding" className="hover:text-pudding-pink">
                  TikTok
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/@thepudding" className="hover:text-pudding-pink">
                  YouTube
                </Link>
              </li>
              <li>
                <Link href="https://bsky.app/profile/puddingviz.bsky.social" className="hover:text-pudding-pink">
                  Bluesky
                </Link>
              </li>
              <li>
                <Link href="https://pudding.cool/feed/index.xml" className="hover:text-pudding-pink">
                  RSS
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-200 text-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="The Pudding"
              width={400}
              height={100}
              className="h-auto w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] mx-auto mb-4"
            />
          </Link>
          <p className="text-gray-500 text-xs sm:text-sm">
            The Pudding is a digital publication that explains ideas debated in culture with visual essays.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
