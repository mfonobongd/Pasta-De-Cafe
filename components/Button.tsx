import Link from "next/link";

type ButtonProps = {
  href: string;
  text: string;
};

export default function Button({
  href,
  text,
}: ButtonProps) {
  return (
    <div className="mt-8">
  <Button
    href="/menu"
    text="Explore Our Meals"
  />
</div>
  );
}