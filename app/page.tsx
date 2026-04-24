import HeroSection from "../components/shared/HeroSection";
import HomeOrderGuide from "../components/shared/HomeOrderGuide";

const featureBlocks = [
  {
    id: "salmon",
    kicker: "Feature 01",
    titleLines: ["Salmon", "Freshness", "The first signal."],
    body: "You feel it before the first full bite — a cleaner taste, a softer shine, and salmon that holds its shape without ever feeling heavy. It is the kind of freshness that stays calm, even at the end of the evening.",
    image:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=1200&q=80",
    alt: "Close view of salmon sushi with a fresh, clean texture",
  },
  {
    id: "rice",
    kicker: "Feature 02",
    titleLines: ["Rice", "Precision", "The hidden discipline."],
    body: "Every grain holds structure, temperature, and timing together. When the rice is right, the whole piece feels exact — from a quick lunch at your desk to the last roll shared on the sofa.",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
    alt: "Carefully prepared sushi rice arranged with a precise, balanced feel",
  },
  {
    id: "packaging",
    kicker: "Feature 03",
    titleLines: ["Packaging", "Experience", "What carries the idea."],
    body: "The experience starts before the first bite. Boxes, sleeves, and wraps are treated as part of the product — rigid, paper-based, and ready to go straight onto the table looking composed. From everyday orders to sushi bouquets and birthday cakes made to order, each piece is designed to feel considered in the hand and easier to sort within Finland’s recycling system.",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80",
    alt: "Minimal takeaway packaging presented in a calm home setting",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="home-intro">
        <div className="frame-inner">
          <div className="home-intro-panel">
            <p className="eyebrow home-intro-eyebrow">Homepage intro</p>

            <div className="home-intro-copy home-intro-copy-centered">
              <p>
                Noirumi Studio is an online-first sushi concept built for the way
                people actually eat now. A tighter menu keeps the food clean and precise,
                while packaging is made to arrive the way it should feel on the table —
                calm, composed, and quietly special. What surrounds the food is treated
                with the same care as what’s inside.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-story-section">
        <div className="hero-section">
          <div className="feature-story-grid">
            {featureBlocks.map((block) => (
              <article key={block.id} className="feature-story-card">
                <div className="feature-story-media">
                  <img src={block.image} alt={block.alt} loading="lazy" />
                </div>

                <div className="feature-story-copy">
                  <p className="feature-story-kicker">{block.kicker}</p>

                  <h2 className="feature-story-heading">
                    {block.titleLines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </h2>

                  <p className="feature-story-body">{block.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <HomeOrderGuide />
    </>
  );
}