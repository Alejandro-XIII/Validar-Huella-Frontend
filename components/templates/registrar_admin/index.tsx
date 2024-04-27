import * as React from "react";

interface InputProps {
  label: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ label, placeholder }) => {
  return (
    <div className="justify-center px-2.5 py-2 bg-white border-b border-solid shadow-sm border-zinc-400">
      <label htmlFor={label} className="sr-only">
        {label}
      </label>
      <input
        type="text"
        id={label}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full bg-transparent outline-none"
      />
    </div>
  );
};

const RegistrarAdmin: React.FC = () => {
  const inputFields: InputProps[] = [
    { label: "nombre", placeholder: "Nombre" },
    { label: "apellido", placeholder: "Apellido" },
    { label: "identificacion", placeholder: "Identificacion" },
    { label: "vinculo", placeholder: "Vinculo" },
    { label: "usuario", placeholder: "Usuario" },
    { label: "contrasena", placeholder: "Contraseña" },
    { label: "correo", placeholder: "Correo" },
    { label: "codigo", placeholder: "Codigo" },
    { label: "programa", placeholder: "Programa" },
    { label: "tiempoLaboral", placeholder: "Tiempo Laboral" },
  ];

  return (
    <div className="flex justify-center items-center px-16 py-20 text-base text-center bg-white max-md:px-5">
      <div className="flex flex-col px-12 pt-16 pb-7 mt-5 max-w-full border border-green-600 border-solid w-[400px] max-md:px-5">
        <h2 className="self-center text-2xl text-green-600 underline">
          Registrar Bibliotecario
        </h2>
        <form>
          <div className="flex gap-1 mt-4 whitespace-nowrap">
            {inputFields.slice(0, 2).map((field) => (
              <Input
                key={field.label}
                label={field.label}
                placeholder={field.placeholder}
              />
            ))}
          </div>
          <div className="flex gap-1.5 mt-4 whitespace-nowrap text-zinc-400">
            {inputFields.slice(2, 4).map((field) => (
              <Input
                key={field.label}
                label={field.label}
                placeholder={field.placeholder}
              />
            ))}
          </div>
          <div className="flex gap-1 mt-4 whitespace-nowrap text-zinc-400">
            {inputFields.slice(4, 6).map((field) => (
              <Input
                key={field.label}
                label={field.label}
                placeholder={field.placeholder}
              />
            ))}
          </div>
          <div className="flex gap-1 mt-4 whitespace-nowrap text-zinc-400">
            {inputFields.slice(6, 8).map((field) => (
              <Input
                key={field.label}
                label={field.label}
                placeholder={field.placeholder}
              />
            ))}
          </div>
          <div className="flex gap-1 mt-4 text-zinc-400">
            {inputFields.slice(8).map((field) => (
              <Input
                key={field.label}
                label={field.label}
                placeholder={field.placeholder}
              />
            ))}
          </div>
          <button
            type="submit"
            className="justify-center self-center px-2.5 py-2 mt-14 max-w-full text-white whitespace-nowrap bg-green-600 rounded-2xl shadow-sm w-[122px] max-md:mt-10"
          >
            Registrar
          </button>
        </form>
        <a
          href="#"
          className="justify-center self-center px-2.5 py-2 mt-2.5 max-w-full text-green-600 underline whitespace-nowrap bg-white rounded-2xl w-[122px]"
        >
          Volver
        </a>
      </div>
    </div>
  );
};

export default RegistrarAdmin;