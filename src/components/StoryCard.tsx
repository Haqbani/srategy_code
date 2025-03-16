import Image from 'next/image';
import Link from 'next/link';

interface StoryCardProps {
  number: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  color: string;
}

const StoryCard = ({ number, date, title, description, imageUrl, link, color }: StoryCardProps) => {
  // Define color classes based on the color prop
  const colorClasses: Record<string, string> = {
    pink: 'bg-[#d9476e]',
    yellow: 'bg-[#e1be3f]',
    orange: 'bg-[#e08d45]',
    teal: 'bg-[#45b79a]',
    blue: 'bg-[#4592b7]',
    purple: 'bg-[#a75c83]',
  };

  const bgColorClass = colorClasses[color] || colorClasses.pink;

  return (
    <div className="w-full">
      {/* Story number and date */}
      <div className="flex justify-between text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">
        <span>#{number}</span>
        <span>{date}</span>
      </div>

      {/* Card with background color */}
      <Link href={link} className="block group">
        <div className={`${bgColorClass} rounded-md overflow-hidden transition-transform duration-200 group-hover:scale-[1.02]`}>
          {/* Story image */}
          <div className="relative aspect-square">
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover"
              loading="eager"
            />
          </div>

          {/* Story info */}
          <div className="p-3 sm:p-4">
            <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-white">{title}</h3>
            <p className="text-white text-xs sm:text-sm opacity-90 line-clamp-3 sm:line-clamp-4">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default StoryCard;
