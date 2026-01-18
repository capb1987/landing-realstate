import axios from "axios";
import type { benefitsProps, wrapTestionialProps } from "@/types";
import { testimonialsSchema } from "@/schemas";

import perfil1 from "@/img/perfil1.jpg";
import perfil2 from "@/img/perfil2.jpg";
import perfil3 from "@/img/perfil3.jpg";

export const getAllTestimonials = async () => {
  const response = await axios("https://dummyjson.com/users?limit=3");
  const data = await response.data.users;
  const parsedTestimonials = await testimonialsSchema.parseAsync(data);
  return parsedTestimonials;
};

const benefits: benefitsProps = [
  "Mi experiencia con Smart House fue excepcional. Buscaba un apartamento en el norte de Barranquilla y me impresionó su conocimiento del mercado local. Hicieron que el proceso de cierre fuera rápido y sin complicaciones. ",
  "Como inversionista extranjero, necesitaba a alguien de confianza en la ciudad. El equipo de Smart House no solo me ayudó a encontrar una propiedad, sino que se encargaron de toda la parte legal y administrativa.",
  "Vender mi casa en Prado fue mucho más fácil de lo que imaginé gracias a Smart House. Su estrategia de marketing digital atrajo a los compradores correctos en tiempo récord. Me sentí acompañada en cada paso del camino.",
];

export const testimonialImage_text: wrapTestionialProps = {
  benefits: benefits,
  images: [perfil1.src, perfil2.src, perfil3.src],
};
