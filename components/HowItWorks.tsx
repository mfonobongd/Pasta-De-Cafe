import Step from "./Step";

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">

      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-serif text-center text-[#234034]">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12">

          <Step
            number="01"
            title="Choose Your Plan"
            text="Select meals that match your goals."
          />

          <Step
            number="02"
            title="We Prepare"
            text="Our chefs prepare fresh meals for you."
          />

          <Step
            number="03"
            title="Enjoy"
            text="Receive your meals and enjoy healthy living."
          />

        </div>

      </div>

    </section>
  );
}