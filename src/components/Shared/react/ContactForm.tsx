import type { ContactProps, PropiedadType } from "@/types";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema } from "@/schemas";
import { Bounce, ToastContainer, toast } from "react-toastify";

type ContactFormProps = {
  propiedades: PropiedadType[];
};

const ContactForm = ({ propiedades }: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactProps>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit: SubmitHandler<ContactProps> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    const myformId = { ...data, id: crypto.randomUUID() };
    console.log(myformId);

    toast.success("¡Mensaje enviado con éxito!", {
      position: "top-center",
      autoClose: 4000,
      theme: "light",
      transition: Bounce,
    });

    reset();
  };

  // Estilo ultra-claro: Bordes negros definidos y foco dorado
  const inputClass = (error: any) => `
    w-full px-4 py-3 rounded-none border-b-2 transition-colors duration-200
    bg-gray-50 text-slate-900 placeholder:text-gray-400
    focus:outline-none focus:bg-white
    ${
      error
        ? "border-red-500 bg-red-50"
        : "border-black focus:border-yellow-500"
    }
  `;

  return (
    <div
      className="w-full max-w-5xl mx-auto px-4 py-12"
      data-aos="flip-up"
      data-aos-duration="1000"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 bg-white shadow-2xl rounded-sm overflow-hidden border border-gray-100">
        {/* Columna de Información (Identidad visual) */}
        <div className="bg-black p-8 md:p-12 text-white flex flex-col justify-between">
          <div>
            <div className="w-12 h-1 bg-yellow-500 mb-6"></div>
            <h2 className="text-4xl font-light leading-tight tracking-tight">
              ¿LISTO PARA TU <br />
              <span className="font-bold text-yellow-500 tracking-tighter italic">
                NUEVO HOGAR?
              </span>
            </h2>
            <p className="mt-6 text-gray-400 font-light leading-relaxed">
              Completa el formulario y un asesor de <strong>Smart House</strong>{" "}
              se pondrá en contacto contigo en menos de 24 horas.
            </p>
          </div>

          <div className="hidden lg:block">
            <p className="text-xs uppercase tracking-[0.3em] text-yellow-500 font-bold">
              Smart House Real Estate
            </p>
          </div>
        </div>

        {/* Columna del Formulario (Claridad total) */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:col-span-2 p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            {/* Nombre */}
            <div className="relative">
              <label className="block text-[10px] uppercase tracking-widest font-bold text-black mb-1">
                Nombre
              </label>
              <input
                {...register("nombre")}
                type="text"
                placeholder="Ej. Carlos"
                className={inputClass(errors.nombre)}
              />
              {errors.nombre && (
                <span className="text-red-600 text-[10px] font-bold mt-1 absolute block">
                  {errors.nombre.message}
                </span>
              )}
            </div>

            {/* Apellido */}
            <div className="relative">
              <label className="block text-[10px] uppercase tracking-widest font-bold text-black mb-1">
                Apellido
              </label>
              <input
                {...register("apellido")}
                type="text"
                placeholder="Ej. Villa"
                className={inputClass(errors.apellido)}
              />
              {errors.apellido && (
                <span className="text-red-600 text-[10px] font-bold mt-1 absolute block">
                  {errors.apellido.message}
                </span>
              )}
            </div>

            {/* Correo */}
            <div className="relative md:col-span-2">
              <label className="block text-[10px] uppercase tracking-widest font-bold text-black mb-1">
                Correo Electrónico
              </label>
              <input
                {...register("correo")}
                type="email"
                placeholder="correo@ejemplo.com"
                className={inputClass(errors.correo)}
              />
              {errors.correo && (
                <span className="text-red-600 text-[10px] font-bold mt-1 absolute block">
                  {errors.correo.message}
                </span>
              )}
            </div>

            {/* Operación */}
            <div className="relative">
              <label className="block text-[10px] uppercase tracking-widest font-bold text-black mb-1">
                ¿Qué buscas?
              </label>
              <select
                {...register("opcion")}
                className={inputClass(errors.opcion)}
              >
                <option value="">Selecciona...</option>
                <option value="venta">Quiero Vender</option>
                <option value="compra">Quiero Comprar</option>
              </select>
              {errors.opcion && (
                <span className="text-red-600 text-[10px] font-bold mt-1 absolute block">
                  {errors.opcion.message}
                </span>
              )}
            </div>

            {/* Apartamento */}
            <div className="relative">
              <label className="block text-[10px] uppercase tracking-widest font-bold text-black mb-1">
                Propiedad
              </label>
              <select
                {...register("apartamento")}
                className={inputClass(errors.apartamento)}
              >
                <option value="">Tipo de propiedad</option>
                {propiedades.map((item) => (
                  <option
                    key={item.id}
                    value={item.id.replace(/\.[^/.]+$/, "")}
                  >
                    {item.data.titulo}
                  </option>
                ))}
              </select>
              {errors.apartamento && (
                <span className="text-red-600 text-[10px] font-bold mt-1 absolute block">
                  {errors.apartamento.message}
                </span>
              )}
            </div>

            {/* Mensaje */}
            <div className="relative md:col-span-2">
              <label className="block text-[10px] uppercase tracking-widest font-bold text-black mb-1">
                Mensaje
              </label>
              <textarea
                {...register("mensaje")}
                rows={2}
                placeholder="Cuéntanos más..."
                className={`${inputClass(errors.mensaje)} resize-none`}
              ></textarea>
              {errors.mensaje && (
                <span className="text-red-600 text-[10px] font-bold mt-1 absolute block">
                  {errors.mensaje.message}
                </span>
              )}
            </div>
          </div>

          <div className="mt-12 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-200 bg-black hover:bg-yellow-500 hover:text-black w-full md:w-auto hover: cursor-pointer"
            >
              {isSubmitting ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                <span className="flex items-center gap-2">
                  SOLICITAR INFORMACIÓN
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              )}
            </button>
          </div>
        </form>
      </div>

      <ToastContainer transition={Bounce} />
    </div>
  );
};

export default ContactForm;
