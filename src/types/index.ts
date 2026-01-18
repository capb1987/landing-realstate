import { z } from "astro:schema";

import {
  ContactSchema,
  navItemSchema,
  navItemsSchema,
  ServiceSchema,
  testimonialSchema,
  testimonialsSchema,
  wrapTestimonialSchema,
} from "@/schemas";
import type { CollectionEntry } from "astro:content";

export type navItem = z.infer<typeof navItemSchema>;
export type navItems = z.infer<typeof navItemsSchema>;

export type testimonial = z.infer<typeof testimonialSchema>;
export type testimonials = z.infer<typeof testimonialsSchema>;

export type benefitsProps = string[];

export type wrapTestionialProps = z.infer<typeof wrapTestimonialSchema>;

export type PropiedadType = CollectionEntry<"inmuebles">;

export type Props = z.infer<typeof ServiceSchema>;

export type ContactProps = z.infer<typeof ContactSchema>;

export type PropiedadTypeSimplificada = {
  slug: string;
  titulo: string;
};
