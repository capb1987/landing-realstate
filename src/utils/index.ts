export const formatearCOP = (valor: number): string => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0, // Los pesos colombianos no suelen usar centavos
  }).format(valor);
};
