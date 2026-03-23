import GeneralCarousel from "./general-carousel";

interface GeneralListProps<T> {
  items: T[];
  title?: string;
  itemKey: (item: T) => string | number;
  renderItem: (item: T) => React.ReactNode;
}

export default function GeneralList<T>({
  items,
  title,
  itemKey,
  renderItem,
}: GeneralListProps<T>) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>

      {/* Mobile Carousel */}
      <GeneralCarousel
        items={items}
        itemKey={itemKey}
        renderItem={renderItem}
      />

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={itemKey(item)}>{renderItem(item)}</div>
        ))}
      </div>
    </section>
  );
}
