import type { Props } from "@/types";

import { FaHandshake, FaChartLine, FaSearch } from "react-icons/fa";

export const services: Props[] = [
  {
    title: "Pasión por conectar hogares",
    description:
      "Humanizamos la gestión inmobiliaria con transparencia. No vendemos metros, hallamos el escenario de tu próxima historia. Descubre las ventajas de ser un agente con propósito en nuestro equipo de expertos. Transforma vidas mientras construyes tu éxito profesional.",
    icon: FaHandshake,
  },
  {
    title: "Trayectoria que respalda.",
    description:
      "Con años de liderazgo en el mercado local, combinamos el conocimiento profundo del sector inmobiliario con tecnología de vanguardia. Nuestra prioridad es proteger tu inversión con asesoría legal y comercial de alto nivel, confiar en nosotros nos da las mejores manos. ",
    icon: FaChartLine,
  },
  {
    title: "Soluciones a tu medida",
    description:
      "Tu visión es nuestra guía. Nos especializamos en entender tus necesidades únicas para ofrecerte opciones que realmente encajen con tus sueños y presupuesto, garantizando un proceso sin estrés y totalmente personalizado",
    icon: FaSearch,
  },
];
