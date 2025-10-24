import { defineCollection, defineContentConfig } from "@nuxt/content";
import { z } from "zod";

const UIColorsEnum = z.enum(["neutral", "primary", "secondary", "accent", "info", "ghost", "success", "error", "warning"]);

const NavLinkSchema = z.object({
  id: z.number(),
  title: z.string(),
  url: z.string(),
  target: z.enum(["_self", "_blank", "_parent", "_top"]).optional(),
});

const siteConfigCollection = defineCollection({
  type: "data",
  source: "site-config.yaml",
  schema: z.object({
    sitename: z.string(),
    navigation: z.object({
      links: z.array(NavLinkSchema),
    }),
    footer: z.object({
      text: z.union([z.string(), z.number()]),
    }),
  }),
});

const TechSchema = z.object({
  title: z.string(),
  color: z.union([UIColorsEnum, z.enum(["base1", "base2", "base3"])]),
  icon: z.string(),
});

const ButtonLinkSchema = z.object({
  title: z.string(),
  url: z.string(),
  icon: z.string().optional(),
  color: UIColorsEnum.optional(),
  target: z.enum(["_self", "_blank", "_parent", "_top"]).optional(),
});

const ImageSchema = z.object({
  src: z.string(),
  alt: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
});

const ProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  techs: z.array(TechSchema),
  links: z.array(ButtonLinkSchema),
  image: ImageSchema,
});

const homepageCollection = defineCollection({
  type: "data",
  source: "homepage.yaml",
  schema: z.object({
    title: z.string(),
    blocks: z.object({
      hero: z.object({
        shaderPath: z.string(),
        headline: z.string(),
        subheadline: z.string(),
      }),
      personal: z.array(
        z.array(
          z.object({
            key: z.string(),
            value: z.string(),
          }),
        ),
      ),
      techs: z.array(TechSchema),
      projects: z.array(ProjectSchema),
      contacts: z.array(
        z.object({
          title: z.string(),
          icon: z.string(),
          url: z.string(),
          target: z.enum(["_self", "_blank", "_parent", "_top"]),
          color: UIColorsEnum,
        }),
      ),
    }),
  }),
});

export default defineContentConfig({
  collections: {
    homepage: homepageCollection,
    siteConfig: siteConfigCollection,
  },
});
