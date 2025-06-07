import GamesSection from "./Hobby/GamesSection";
import CookingSection from "./Hobby/CookingSection";
import DrinksSection from "./Hobby/DrinksSection";
import SportsSection from "./Hobby/SportsSection";

const Hobbies = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">My Hobbies</h1>
        {/* 測試區段 - 先放 Games */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Games</h2>
          <GamesSection />
        </section>

        <section className="mt-2 max-w-6xl mx-auto px-4 text-justify text-gray-800 dark:text-gray-200 leading-relaxed space-y-6">
          <h2 className="text-3xl font-bold mb-6">Drinks</h2>
          <p className="text-lg">
            Drinks Tea As a Taiwanese person, drinking tea feels like second
            nature — and no, I’m not talking about bubble tea! I love Taiwanese
            tea, especially Taiwan Tea No. 21 (紅韻), No. 18 (紅玉), and Jin
            Xuan. I’m also a big fan of matcha. Coffee I enjoy pour-over coffee,
            especially light-roast beans with fruity notes — sun-dried or
            honey-processed beans are my go-tos. As for espresso, I’m still
            learning, but I hope to eventually master not just the flavor, but
            also the art of latte art. Cocktails I love the visual appeal of
            layered shots. Some of my signature creations include the Trans
            Pride Flag Shot and Nonbinary Flag Shot. I like infusing gin with
            Taiwanese Tieguanyin tea and crafting cocktails with a bright,
            fruity profile. Cooking Cooking is a big passion of mine! I mostly
            stick to Taiwanese, Japanese, and Italian styles. Some of my
            signature dishes include chili oil wontons, dumplings, and Taiwanese
            beef noodle soup.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-6"></h2>
          <DrinksSection />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Cooking</h2>
          <CookingSection />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Sports</h2>
          <SportsSection />
        </section>
      </div>
    </main>
  );
};

export default Hobbies;
