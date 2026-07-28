import MealCard from "./MealCard";

export default function FeaturedMeals() {
  return (
    <section className="py-24 bg-[#f8f5ef]">

      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-serif text-center text-[#234034]">
          Our Signature Meals
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <MealCard
            title="Balanced Meals"
            description="Perfect portions designed for everyday wellness."
          />

          <MealCard
            title="High Protein"
            description="Meals packed with nutrients to fuel your goals."
          />

          <MealCard
            title="Custom Plans"
            description="Personalised meals created around your lifestyle."
          />

        </div>

      </div>

    </section>
  );
}