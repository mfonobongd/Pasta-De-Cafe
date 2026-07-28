import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedMeals from "@/components/FeaturedMeals";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main>

      <Hero />

      <About />

      <FeaturedMeals />

      <HowItWorks />
      {/* Stats Section */}
<section className="py-24 bg-[#f8f5ef]">

  <div className="container mx-auto px-6">

    <div className="grid md:grid-cols-4 gap-10 text-center">

      <div>
        <h3 className="text-5xl font-bold text-[#234034]">
          500+
        </h3>

        <p className="mt-3 text-gray-600">
          Meals Delivered
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-bold text-[#234034]">
          100+
        </h3>

        <p className="mt-3 text-gray-600">
          Happy Clients
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-bold text-[#234034]">
          20+
        </h3>

        <p className="mt-3 text-gray-600">
          Menu Options
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-bold text-[#234034]">
          5★
        </h3>

        <p className="mt-3 text-gray-600">
          Customer Experience
        </p>
      </div>

    </div>

  </div>

</section>

      <CTA />

    </main>
  );
}