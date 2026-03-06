const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-blue-900">{title}</h2>
    </div>
  );
};

export default SectionTitle;