import type { UIColors } from "./ui";

export interface NavLink {
  id: number;
  title: string;
  url: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
}

export type TargetType = "_self" | "_blank" | "_parent" | "_top";

export interface Link {
  url: string;
  title: string;
  target?: TargetType;
}

export interface IconLink extends Link {
  icon?: string;
}

interface IColorizable<C> {
  color?: C;
}

export interface ButtonLink extends IColorizable<UIColors>, IconLink {}
export interface HEXColorLink extends IColorizable<`#${string}`>, IconLink {}

export interface Image {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Tech {
  icon: string;
  title: string;
  color: UIColors | "base1" | "base2" | "base3";
}

export interface Project {
  title: string;
  description: string;
  techs: Tech[];
  image: Image;
  links: ButtonLink[];
}

export interface Contact {
  title: string;
  icon: string;
  url: string;
  target: TargetType;
  color: UIColors;
}

export * from "./ui";
