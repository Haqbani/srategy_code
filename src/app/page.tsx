import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoryCard from "@/components/StoryCard";
import { stories } from "@/data/stories";

export default function Home() {
  return (
    <main>
      <Header />

      <div className="pudding-container py-6 sm:py-8 md:py-12 px-4 sm:px-6">
        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {stories.map((story) => (
            <StoryCard
              key={story.id}
              number={story.number}
              date={story.date}
              title={story.title}
              description={story.description}
              imageUrl={story.imageUrl}
              link={story.link}
              color={story.color}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <button className="bg-pudding-darkgrey text-white px-4 sm:px-6 py-2 sm:py-3 rounded text-sm sm:text-base hover:bg-opacity-90 transition-colors">
            Load More Stories
          </button>
        </div>
      </div>

      <Footer />
    </main>
  );
}
