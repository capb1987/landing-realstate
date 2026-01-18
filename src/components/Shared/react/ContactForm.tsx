import type { ContactProps, PropiedadType } from "@/types";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema } from "@/schemas";

type ContactFormProps = {
  propiedades: PropiedadType[];
};

const ContactForm = ({ propiedades }: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactProps>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit: SubmitHandler<ContactProps> = (data) => {
    const myformId = {
      ...data,
      id: crypto.randomUUID(),
    };
    console.log(myformId);

    reset();
  };
  return (
    <form
      method="post"
      onSubmit={handleSubmit(onSubmit)}
      className="bg-linear-to-br from-slate-400 via-40% to-gray-500 border border-slate-300 min-h-[50dvh] shadow-5xl rounded-2xl p-4 md:p-6 lg:p-8"
      data-aos="fade-in"
      data-aos-delay="150"
      data-aos-duration="2000"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div className="grid gap-2">
          <label htmlFor="nombre" className="font-light italic text-white">
            Nombre
          </label>
          <input
            {...register("nombre")}
            id="nombre"
            className={`bg-slate-50 w-full p-2 rounded-md ${
              errors.nombre
                ? "border-2 border-red-600"
                : "border border-slate-300"
            } focus:outline-none focus:border-slate-500`}
            type="text"
          />

          {errors.nombre && (
            <p className="text-red-600 text-sm mt-1 font-semibold font-sans">
              {errors.nombre.message}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <label htmlFor="apellido" className="font-light italic text-white">
            Apellido
          </label>
          <input
            id="apellido"
            {...register("apellido")}
            className={`bg-slate-50 w-full p-2 rounded-md ${
              errors.apellido
                ? "border-2 border-red-600"
                : "border border-slate-300"
            } focus:outline-none focus:border-slate-500`}
            type="text"
          />
          {errors.apellido && (
            <p className="text-red-600 text-sm mt-1 font-semibold font-sans">
              {errors.apellido.message}
            </p>
          )}
        </div>

        <div className="md:col-span-2 grid gap-2">
          <label htmlFor="correo" className="font-light italic text-white">
            Correo
          </label>
          <input
            {...register("correo")}
            id="correo"
            className={`bg-slate-50 w-full p-2 rounded-md ${
              errors.correo
                ? "border-2 border-red-600"
                : "border border-slate-300"
            } focus:outline-none focus:border-slate-500`}
            type="text"
          />
          {errors.correo && (
            <p className="text-red-600 text-sm mt-1 font-semibold font-sans">
              {errors.correo.message}
            </p>
          )}
        </div>

        <div className="md:col-span-2 grid gap-2">
          <label htmlFor="opcion" className="font-light italic text-white">
            Tipo de Opción
          </label>
          <select
            {...register("opcion")}
            id="opcion"
            className={`bg-slate-50 w-full p-2 rounded-md ${
              errors.opcion
                ? "border-2 border-red-600"
                : "border border-slate-300"
            } focus:outline-none focus:border-slate-500`}
          >
            <option value="">-- Selecciona una opción --</option>
            <option value="venta">Venta</option>
            <option value="compra">Compra</option>
          </select>

          {errors.opcion && (
            <p className="text-red-600 text-sm mt-1 font-semibold font-sans">
              {errors.opcion.message}
            </p>
          )}
        </div>

        <div className="md:col-span-2 grid gap-2">
          <label htmlFor="apartamento" className="font-light italic text-white">
            Tipo de Apartamento a comprar / vender
          </label>
          <select
            {...register("apartamento")}
            id="apartamento"
            className={`bg-slate-50 w-full p-2 rounded-md  ${
              errors.apartamento
                ? "border-2 border-red-600"
                : "border border-slate-300"
            } focus:outline-none focus:border-slate-500`}
          >
            <option value="">-- Selecciona una opción --</option>
            {propiedades.map((item) => (
              <option key={item.id} value={item.id.replace(/\.[^/.]+$/, "")}>
                {item.data.titulo}
              </option>
            ))}
          </select>
          {errors.apartamento && (
            <p className="text-red-600 text-sm mt-1 font-semibold font-sans">
              {errors.apartamento.message}
            </p>
          )}
        </div>

        <div className="md:col-span-2 grid gap-2">
          <label htmlFor="mensaje" className="font-light italic text-white">
            Mensaje
          </label>
          <textarea
            {...register("mensaje")}
            id="mensaje"
            className={`bg-slate-50 w-full p-2 rounded-md ${
              errors.mensaje
                ? "border-2 border-red-600"
                : "border border-slate-300"
            } focus:outline-none focus:border-slate-500`}
            rows={4}
            cols={50}
          ></textarea>

          {errors.mensaje && (
            <p className="text-red-600 text-sm mt-1 font-semibold font-sans">
              {errors.mensaje.message}
            </p>
          )}
        </div>

        <div className="md:col-span-2 mt-4">
          <input
            type="submit"
            value="Enviar"
            className="bg-slate-400 text-base md:text-lg lg:text-xl uppercase font-semibold text-white p-2 md:p-4 rounded-md w-full cursor-pointer hover:bg-slate-600 transition-colors duration-300"
          />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
