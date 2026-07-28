import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#234034] text-white py-16">

      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-2xl font-serif">
              Pasta De Café
            </h3>

            <p className="mt-4 text-gray-300">
              Chef-crafted meals designed for wellness,
              convenience, and great taste.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Quick Links
            </h4>

            <div className="space-y-2">

              <Link href="/">
                Home
              </Link>

              <br />

              <Link href="/menu">
                Menu
              </Link>

              <br />

              <Link href="/subscription">
                Meal Plans
              </Link>

            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Contact
            </h4>

            <p>hello@pastadecafe.com</p>
            <p>Lagos, Nigeria</p>
          </div>

        </div>

      </div>

    </footer>
  );
}