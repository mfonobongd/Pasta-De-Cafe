import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Pasta De Café</h1>

      <Image
        src="/contact.png"
        alt="Contact"
        width={600}
        height={400}
      />
    </main>
  );
}