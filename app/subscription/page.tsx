import Link from "next/link";

const plans = [
  {
    title: "Basic Plan",
    price: "₦265,000",
    description: "Balanced meals for healthy living."
  },
  {
    title: "High Protein Plan",
    price: "₦295,000",
    description: "Ideal for muscle gain and weight management."
  },
  {
    title: "Custom Plan",
    price: "₦325,000",
    description: "Tailored to your unique nutritional needs."
  }
];

export default function SubscriptionPage() {
  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">

      <div className="container mx-auto px-6">

        <h1 className="text-5xl font-serif text-center text-[#234034]">
          Meal Plans
        </h1>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {plans.map((plan) => (

            <div
              key={plan.title}
              className="border rounded-3xl p-8"
            >

              <h2 className="text-2xl font-serif text-[#234034]">
                {plan.title}
              </h2>

              <p className="mt-4 text-gray-600">
                {plan.description}
              </p>

              <p className="mt-6 text-3xl font-bold text-[#234034]">
                {plan.price}
              </p>

              <Link
                href="/contact"
                className="inline-block mt-8 bg-[#234034] text-white px-6 py-3 rounded-full"
              >
                Subscribe
              </Link>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}