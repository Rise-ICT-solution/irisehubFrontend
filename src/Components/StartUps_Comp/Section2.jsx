// Remote thumbnails representing video stories
const storyImgs = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=1200&q=80"
];

function StoryCard({ img, name, role }) {
  return (
    <div className="rounded-xl overflow-hidden bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.08)]">
      <div className="relative aspect-[16/9] bg-black">
        <img src={img} alt={name} className="absolute inset-0 w-full h-full object-cover" />
        {/* Play button ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-20 w-20 rounded-full bg-white/10 backdrop-blur-sm ring-2 ring-white/60 flex items-center justify-center">
            <div className="h-14 w-14 rounded-full bg-black text-white grid place-items-center">
              <span className="text-xl">➤</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white px-6 py-5">
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-sm text-white/70 mt-1">{role}</p>
      </div>
    </div>
  );
}

export default function Section2() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-400 font-semibold mb-3">Our stories</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Watch our stories:</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <StoryCard
            img={storyImgs[0]}
            name="Najia Ezaoui"
            role="Innovation Development Director"
          />
          <StoryCard
            img={storyImgs[1]}
            name="Aboubakr Benazzouz"
            role="Senior Project Manager"
          />
          <StoryCard
            img={storyImgs[2]}
            name="Reda Tamsamni"
            role="Investment Director"
          />
        </div>

        <div className="mt-12 border-t border-gray-300" />
      </div>
    </section>
  );
}


