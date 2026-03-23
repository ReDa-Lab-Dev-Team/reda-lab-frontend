import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// fetching and applying
import GeneralCarousel from "./general-carousel";

// generic props
interface UncommonGridLayoutProps<T> {
  items: T[];
  loading?: boolean;
  itemKey: (item: T) => string | number;
  renderItem: (item: T) => React.ReactNode;

  // Qualification logic
  shouldQualify?: (item: T) => boolean;
  maxRegularItems?: number;

  // Customize display
  title?: string;
}

export default function UncommonGridLayout<T>({
  items,
  loading = false,
  itemKey,
  renderItem,
  shouldQualify = () => false,
  maxRegularItems = 4,
  title = "Most Recent Projects",
}: UncommonGridLayoutProps<T>) {
  if (loading) return <div>Loading...</div>;
  if (!items.length) return <div>No items found</div>;

  const qualifyingFeatured = items.find(shouldQualify);
  const regularItems = qualifyingFeatured
    ? items
        .filter((i) => itemKey(i) !== itemKey(qualifyingFeatured))
        .slice(0, maxRegularItems)
    : [];

  const shouldUseUncommonGrid =
    Boolean(qualifyingFeatured) && regularItems.length === maxRegularItems;

  return (
    <section className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">{title}</h2>

        {/* Desktop */}
        {shouldUseUncommonGrid ? (
          <div className="hidden md:grid grid-cols-12 gap-6">
            <div className="col-span-5">{renderItem(qualifyingFeatured!)}</div>
            <div className="col-span-7 grid grid-cols-2 gap-6">
              {regularItems.map((item) => (
                <div key={itemKey(item)}>{renderItem(item)}</div>
              ))}
            </div>
          </div>
        ) : (
          <div className="hidden md:block">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {items.map((item) => (
                  <CarouselItem
                    key={itemKey(item)}
                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full">{renderItem(item)}</div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        )}

        {/* Mobile */}
        <div className="md:hidden">
          <GeneralCarousel
            items={items}
            renderItem={renderItem}
            itemKey={itemKey}
          />
        </div>
      </div>
    </section>
  );
}
