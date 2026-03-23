interface YearFilterProps {
  years: number[];
  activeYear: number;
  onChange: (year: number) => void;
}

const YearFilter = ({ years, activeYear, onChange }: YearFilterProps) => {
  return (
    <div className="flex items-center gap-6 border-b border-slate-200 mb-8">
      {years.map((year) => (
        <button
          key={year}
          onClick={() => onChange(year)}
          className={`pb-3 text-lg font-bold transition-all relative ${
            activeYear === year
              ? "text-blue-600"
              : "text-slate-400 hover:text-slate-600"
          }`}
        >
          {year}
          {activeYear === year && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-t-full"></span>
          )}
        </button>
      ))}
    </div>
  );
};

export default YearFilter;
