import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

export interface CarouselItemInterface {
  title: string;
  subtitle: string;
}

export interface FeatureItemInterface {
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export interface AboutItemInterface {
  title: string;
  links: string[];
}
