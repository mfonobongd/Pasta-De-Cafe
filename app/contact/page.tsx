export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-[#f8f5ef]">

      <div className="container mx-auto px-6 max-w-3xl">

        <h1 className="text-5xl font-serif text-[#234034] text-center">
          Contact Us
        </h1>

        <form className="mt-12 bg-white p-10 rounded-3xl shadow-sm">

          <div>
            <label className="block mb-2">
              Full Name
            </label>

            <input
              type="text"
              className="w-full border rounded-xl p-4"
            />
          </div>

          <div className="mt-6">
            <label className="block mb-2">
              Email Address
            </label>

            <input
              type="email"
              className="w-full border rounded-xl p-4"
            />
          </div>

          <div className="mt-6">
            <label className="block mb-2">
              Message
            </label>

            <textarea
              rows={5}
              className="w-full border rounded-xl p-4"
            />
          </div>

          <button
            className="mt-8 bg-[#234034] text-white px-8 py-4 rounded-full"
          >
            Send Message
          </button>

        </form>

      </div>

    </main>
  );
}