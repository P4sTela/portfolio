import { useState, useEffect, useCallback } from "react";

interface ImageCarouselProps {
  images: ImageMetadata[];
  alt: string;
  autoPlay?: boolean;
  interval?: number;
  showIndicators?: boolean;
  showControls?: boolean;
  className?: string;
}

export function ImageCarousel({
  images,
  alt,
  autoPlay = true,
  interval = 4000,
  showIndicators = true,
  showControls = false,
  className = "",
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (!autoPlay || images.length <= 1 || isHovered) return;

    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length, isHovered, goToNext]);

  if (images.length === 0) {
    return (
      <div
        className={`aspect-video bg-base-300 flex items-center justify-center ${className}`}
      >
        <span className="text-base-content/50">No Image</span>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className={`aspect-video overflow-hidden ${className}`}>
        <img
          src={images[0].src}
          alt={alt}
          className="object-cover object-top w-full h-full"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-video overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={image.src}
              alt={`${alt} - ${index + 1}`}
              className="object-cover object-top w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      {showControls && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 btn btn-circle btn-sm btn-ghost bg-base-100/50 hover:bg-base-100/80"
            aria-label="前の画像"
          >
            ❮
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-circle btn-sm btn-ghost bg-base-100/50 hover:bg-base-100/80"
            aria-label="次の画像"
          >
            ❯
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                goToSlide(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-primary w-4"
                  : "bg-base-100/50 hover:bg-base-100/80"
              }`}
              aria-label={`画像 ${index + 1} に移動`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
