import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[#f8f5ef]">

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>

          <h1 className="text-5xl md:text-6xl font-serif text-[#234034] leading-tight">
            Nourish Your Body.
            <br />
            Elevate Your Lifestyle.
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Delicious, chef-crafted meals designed around your wellness goals.
          </p>

          <Link
  href="/menu"
  className="inline-block mt-8 bg-[#234034] text-white px-8 py-4 rounded-full"
>
  Explore Our Meals
</Link>

        </div>

        <Image
          src="/contact.png"
          alt="Pasta De Café"
          width={600}
          height={500}
          priority
          className="rounded-3xl object-cover"
        />

      </div>

    </section>
  );
}