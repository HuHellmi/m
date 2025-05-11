
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

interface CarouselWithAutoplayProps {
  children: React.ReactNode[];
  className?: string;
  itemClassName?: string;
}

export function CarouselWithAutoplay({ 
  children, 
  className,
  itemClassName
}: CarouselWithAutoplayProps) {
  const plugin = useRef(
    Autoplay({ delay: 20000, stopOnInteraction: true })
  );

  return (
    <Carousel
      className={className}
      plugins={[plugin.current]}
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.reset()}
    >
      <CarouselContent>
        {children.map((child, index) => (
          <CarouselItem key={index} className={itemClassName}>
            {child}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
