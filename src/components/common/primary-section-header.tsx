interface PrimarySectionHeaderProps {
  title: string;
  className?: string;
}

export default function PrimarySectionHeader({
  title,
  className,
}: PrimarySectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${className || ""}`}
      >
        {title}
      </h2>
      <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
    </div>
  );
}
