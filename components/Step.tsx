type StepProps = {
  number: string;
  title: string;
  text: string;
};

export default function Step({
  number,
  title,
  text,
}: StepProps) {
  return (
    <div>
      <div className="text-4xl font-serif text-[#234034]">
        {number}
      </div>

      <h3 className="mt-4 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-gray-600">
        {text}
      </p>
    </div>
  );
}