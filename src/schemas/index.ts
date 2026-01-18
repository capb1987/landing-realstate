import { z } from "astro:schema";

//items del menu
export const navItemSchema = z.object({
  title: z.string(),
  href: z.string(),
});

export const navItemsSchema = z.array(navItemSchema);

//schema de testimonios

export const testimonialSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
});

export const testimonialsSchema = z.array(testimonialSchema);

export const wrapTestimonialSchema = z.object({
  benefits: z.array(z.string()),
  images: z.array(z.string()),
});

export const ServiceSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.any(),
});

export const ContactSchema = z.object({
  nombre: z.string().min(1, {
    message: "El campo nombre es obligatorio",
  }),
  apellido: z.string().min(1, {
    message: "El campo apellido es obligatorio",
  }),
  correo: z.string().email({
    message: "Correo electrónico no válido",
  }),
  opcion: z.enum(["venta", "compra"], {
    errorMap: () => ({ message: "Selecciona una opción válida" }),
  }),
  apartamento: z.string().min(1, "El campo apartamento es obligatorio"),
  mensaje: z.string().min(10, "El mensaje no puede estar vacío"),
});
