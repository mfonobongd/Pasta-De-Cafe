import Image from "next/image";

const meals = [
  {
    name: "Protein Bowl",
    price: "₦12,000",
    image: "/contact.png",
    description: "High-protein bowl packed with nutrients."
  },
  {
    name: "Chicken Pasta",
    price: "₦10,000",
    image: "/contact.png",
    description: "Fresh pasta with grilled chicken."
  },
  {
    name: "Green Smoothie",
    price: "₦6,000",
    image: "/contact.png",
    description: "Refreshing smoothie loaded with vitamins."
  }
];

export default function MenuPage() {
  return (
    <main className="pt-32 pb-24 bg-[#f8f5ef] min-h-screen">

      <div className="container mx-auto px-6">

        <h1 className="text-5xl font-serif text-[#234034] text-center">
          Our Menu
        </h1>

        <p className="text-center mt-6 text-gray-600 max-w-2xl mx-auto">
          Explore our chef-crafted meals designed around wellness,
          nutrition, and incredible taste.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {meals.map((meal) => (

            <div
              key={meal.name}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >

              <Image
                src={meal.image}
                alt={meal.name}
                width={500}
                height={300}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-serif text-[#234034]">
                  {meal.name}
                </h3>

                <p className="mt-3 text-gray-600">
                  {meal.description}
                </p>

                <p className="mt-5 text-xl font-semibold text-[#234034]">
                  {meal.price}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}