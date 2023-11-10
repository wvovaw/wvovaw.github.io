import type { Tech, Project, HEXColorLink } from "@/types";

export type HomepageData = {
  hero: {
    headline: string;
    subheadline: string;
    shaderPath: string;
  };
  techs: Tech[];
  personal: { key: string; value: string }[][];
  projects: Project[];
  contacts: HEXColorLink[];
};
