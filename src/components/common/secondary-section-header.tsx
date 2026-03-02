type SecondarySectionHeaderProps = {
  title: string;
  description: string;
};

export default function SecondarySectionHeader({
//   title,
  description,
}: SecondarySectionHeaderProps) {
  return (
    <div className="mb-12 text-left max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
        Our <span className="text-amber-500">Researchers</span>
        {/* {title} */}
      </h2>
      <p className="text-primary leading-relaxed text-sm md:text-base">
        {description}
      </p>
    </div>
  );
}
