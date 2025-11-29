import { Apple, Play } from "lucide-react";
import Image from "next/image";

export default function Showcase() {
  return (
    <div className="min-h-screen bg-[#faf8f3]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#faf8f3]/80 border-b border-gray-200/50">
        <div className="px-4 py-4 md:px-8 flex items-center justify-between max-w-5xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="text-2xl">
              <Image
                src={"/brandlogo.png"}
                width={100}
                height={100}
                alt="brandlogo image"
                priority
                className="w-full h-10 object-cover"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/PZxPQAIogM0nyRNiQAAAABJRU5ErkJggg=="
              />
            </div>
            <span className="font-semibold text-gray-800">GTWorld-Clone</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-800">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-800">
              Terms of Use
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-16"></div>

      {/* Hero Section */}
      <section className="px-4 md:px-8 py-12 md:py-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide">
              🌾 Cozy Farming • iOS & Android Beta
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Grow your tiny farm, one harvest at a time.
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              In Tiny Harvest you plant crops, craft goods, complete orders,
              explore wildlands and go on frontier expeditions – all at your own
              relaxed pace.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                <Apple size={20} />
                Download for iOS
              </button>
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-emerald-700 transition">
                <Play size={20} />
                Get it on Google Play
              </button>
            </div>

            <p className="text-sm text-gray-500">
              iOS & Android • Public beta testing • Full release coming soon
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/showcase1.png"
              alt="Tiny Harvest phone mockup"
              width={250}
              height={250}
              className="w-full max-w-sm md:max-w-xs"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Relaxing farming with depth
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="text-5xl">🌱</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Grow & Craft
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Plant crops, harvest them, and turn your wheat, corn and veggies
              into crafted goods in your Mill and Bakery.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="text-5xl">📦</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Fulfill Orders
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Complete villager orders and special contracts for coins and XP to
              level up your farm.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="text-5xl">🌲</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Explore Wildlands
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Send expeditions into forests and rivers to collect rare materials
              over time.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="text-5xl">🗺️</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Frontier Expedition
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Progress through regions with your caravan, earn Frontier XP and
              compete on leaderboards.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Play Section */}
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Perfect for a few minutes of play
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Quick Feature 1 */}
          <div>
            <h3 className="text-xl font-semibold text-emerald-600 mb-3">
              Daily quests & fortune
            </h3>
            <p className="text-gray-600">
              Log in for quick daily goals and rewards.
            </p>
          </div>

          {/* Quick Feature 2 */}
          <div>
            <h3 className="text-xl font-semibold text-emerald-600 mb-3">
              Friendly boosts
            </h3>
            <p className="text-gray-600">
              Help friends and get small crop speed boosts.
            </p>
          </div>

          {/* Quick Feature 3 */}
          <div>
            <h3 className="text-xl font-semibold text-emerald-600 mb-3">
              Upgrades
            </h3>
            <p className="text-gray-600">
              Invest coins and materials into barn, fields, animals and
              wildlands efficiency.
            </p>
          </div>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-lg max-w-5xl mx-auto">
          <p className="text-gray-700 italic">
            Tiny Harvest is designed to feel good in short sessions – no energy
            timers that block progress.
          </p>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          In-game preview
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Screenshot placeholders */}
          {[
            { label: "Home view", imageUrl: "/showcase1.png" },
            { label: "Payments view", imageUrl: "/showcase2.png" },
            { label: "Products view", imageUrl: "/showcase3.png" },
            { label: "Home view", imageUrl: "/showcase1.png" },
          ].map((screen, idx) => (
            <div key={idx} className="text-center">
              <div className="rounded-3xl aspect-[9/19] mb-4 flex items-center justify-center">
                <Image
                  src={screen.imageUrl}
                  alt="gtbank-clone showcase image"
                  width={200}
                  height={200}
                  className="-full"
                />
              </div>
              <p className="text-gray-600 text-sm">{screen.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Made with Care Section */}
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Made with care
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          GT-Clone is a solo-developed game focused on cozy progression,
          satisfying systems and zero pressure. It's built for people who enjoy
          growing something over time – whether that's their farm, their
          expeditions or just a calming daily routine.
        </p>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-12 border-t border-gray-200 max-w-5xl mx-auto">
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-4">© 2025 GT-Clone Demo</p>
          <div className="flex justify-center gap-6 text-sm text-gray-600 mb-4">
            <a href="#" className="hover:text-gray-800">
              Privacy Policy
            </a>
            <span className="text-gray-400">•</span>
            <a href="#" className="hover:text-gray-800">
              Terms of Use
            </a>
          </div>
          <p className="text-sm text-gray-500">
            Made with 💚 by Rasheed Olatunde
          </p>
        </div>
      </footer>
    </div>
  );
}
