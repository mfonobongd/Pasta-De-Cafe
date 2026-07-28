type MealCardProps = {
  title: string;
  description: string;
};

export default function MealCard({
  title,
  description,
}: MealCardProps) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm">
      <h3 className="text-2xl font-serif text-[#234034]">
        {title}
      </h3>

      <p className="mt-4 text-gray-600">
        {description}
      </p>
    </div>
  );
}