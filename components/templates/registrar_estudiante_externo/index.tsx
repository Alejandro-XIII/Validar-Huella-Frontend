import * as React from "react";

interface InputFieldProps {
  label: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder }) => {
  return (
    <div className="justify-center px-2.5 py-2 bg-white border-b border-solid shadow-sm border-zinc-400 text-zinc-400">
      <label htmlFor={label} className="sr-only">
        {label}
      </label>
      <input
        type="text"
        id={label}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full bg-transparent focus:outline-none"
      />
    </div>
  );
};

const RegistrarEstudianteExterno: React.FC = () => {
  const inputFields: InputFieldProps[] = [
    { label: "nombre", placeholder: "Nombre" },
    { label: "apellido", placeholder: "Apellido" },
    { label: "identificacion", placeholder: "Identificacion" },
    { label: "usuario", placeholder: "Usuario" },
    { label: "programa", placeholder: "Programa" },
    { label: "semestre", placeholder: "Semestre" },
    { label: "correo", placeholder: "Correo" },
    { label: "universidad", placeholder: "Universidad" },
  ];

  return (
    <main className="flex justify-center items-center px-16 py-20 text-base text-center bg-white max-md:px-5">
      <section className="flex flex-col items-center px-10 py-20 mt-5 max-w-full border border-green-600 border-solid w-[400px] max-md:px-5">
        <h2 className="self-stretch mt-2.5 text-2xl text-green-600 underline">
          Registrar Estudiante Externo
        </h2>
        <form>
          <div className="flex gap-1 self-stretch mt-4 whitespace-nowrap">
            <InputField label="nombre" placeholder="Nombre" />
            <InputField label="apellido" placeholder="Apellido" />
          </div>
          <div className="flex gap-1 mt-4 whitespace-nowrap text-zinc-400">
            <InputField
              label="identificacion"
              placeholder="Identificacion"
            />
            <InputField label="usuario" placeholder="Usuario" />
          </div>
          <div className="flex gap-1 self-stretch mt-4 whitespace-nowrap text-zinc-400">
            <InputField label="programa" placeholder="Programa" />
            <InputField label="semestre" placeholder="Semestre" />
          </div>
          <div className="flex gap-1 mt-4 whitespace-nowrap text-zinc-400">
            <InputField label="correo" placeholder="Correo" />
            <InputField label="universidad" placeholder="Universidad" />
          </div>
          <button
            type="submit"
            className="justify-center px-2.5 py-2 mt-7 max-w-full text-white whitespace-nowrap bg-green-600 rounded-2xl shadow-sm w-[122px]"
          >
            Registrar
          </button>
        </form>
        <button className="justify-center px-2.5 py-2 mb-1.5 max-w-full text-green-600 underline whitespace-nowrap bg-white rounded-2xl w-[122px]">
          Volver
        </button>
      </section>
    </main>
  );
};

export default RegistrarEstudianteExterno;