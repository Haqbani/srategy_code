import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      <Header />

      <div className="pudding-container py-12">
        <h1 className="text-4xl font-bold mb-8 font-tiempos-text">About Us</h1>

        <div className="prose max-w-none">
          <p className="text-xl mb-6 font-tiempos-text">
            The Pudding explains ideas debated in culture with visual essays.
            We're not chasing current events or clickbait. We choose topics
            where visuals inform <em>and</em> entertain. We've been in the business of
            bringing you stories you didn't know you needed since 2017.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">How and why The Pudding exists</h2>

          <p className="mb-4">
            Visual essays are an emerging form of journalism. Some of the most complex,
            debated topics get lost in too long; didn't read 10,000-word articles.
            Visual storytelling makes ideas more accessible—or so goes the adage
            "a picture is worth a thousand words."
          </p>

          <p className="mb-4">
            We believe in journalism that denounces false equivalence, one that can
            explicitly say Black Lives Matter, one that never views human rights as
            partisan issues, and one that believes a person's own experiences are
            central to strong storytelling.
          </p>

          <p className="mb-4">
            We hope to be a place that centers and amplifies voices that have long been
            ignored. We strive for our journalism to be one of key making, not gate keeping,
            and we won't shy away from stories that tackle racism, sexism, and classism head on.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">The Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Team Member Cards */}
            <div className="text-center">
              <div className="rounded-md overflow-hidden mb-4">
                <Image
                  src="https://ext.same-assets.com/1263280870/2190762026.jpeg"
                  alt="Alvin Chang"
                  width={200}
                  height={200}
                  className="w-full object-cover"
                />
              </div>
              <h3 className="font-bold">Alvin Chang</h3>
            </div>

            <div className="text-center">
              <div className="rounded-md overflow-hidden mb-4">
                <Image
                  src="https://ext.same-assets.com/1266478349/688603003.jpeg"
                  alt="Caitlyn Ralph"
                  width={200}
                  height={200}
                  className="w-full object-cover"
                />
              </div>
              <h3 className="font-bold">Caitlyn Ralph</h3>
            </div>

            <div className="text-center">
              <div className="rounded-md overflow-hidden mb-4">
                <Image
                  src="https://ext.same-assets.com/2685298034/768964524.jpeg"
                  alt="Ilia Blinderman"
                  width={200}
                  height={200}
                  className="w-full object-cover"
                />
              </div>
              <h3 className="font-bold">Ilia Blinderman</h3>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
