import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

//schema de propiedades

const inmuebles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/inmuebles" }),
  schema: z.object({
    titulo: z.string(),
    precio: z.number(),
    barrio: z.string(),
    habitaciones: z.number(),
    parqueadero: z.boolean(),
    baños: z.number(),
    area: z.number(), // en m2
    imagen: z.string(),
    destacado: z.boolean().optional(),
  }),
});

//schema del blog

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string().max(100),
    fecha: z.coerce.date().transform((d) =>
      d.toLocaleDateString("es-CO", {
        timeZone: "America/Bogota",
        year: "numeric",
        month: "short",
        day: "2-digit",
      })
    ),
    imagen: z.string(),
    autor: z.string(),
    tags: z.string().array(),
  }),
});

export const collections = {
  inmuebles: inmuebles,
  blog: blog,
};
