interface ImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
}

export function Image({ src, alt, fill, className }: ImageProps) {
  const imageClasses = fill 
    ? `absolute inset-0 w-full h-full object-cover ${className || ''}`
    : className;

  return <img src={src} alt={alt} className={imageClasses} />;
}