import * as React from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <button
      className={`justify-center px-2.5 py-2 max-w-full whitespace-nowrap rounded-2xl shadow-sm w-[122px] ${className}`}
    >
      {children}
    </button>
  );
};

const RegistrarEstudianteInterno: React.FC = () => {
  return (
    <main className="flex justify-center items-center px-16 py-20 text-base text-center text-green-600 bg-white max-md:px-5">
      <section className="flex flex-col items-center px-11 py-20 mt-5 max-w-full border border-green-600 border-solid w-[400px] max-md:px-5">
        <h2 className="self-stretch mt-2.5 text-2xl underline">
          Registrar Estudiante Interno
        </h2>
        <label
          htmlFor="identificacion"
          className="justify-center px-2.5 py-2 mt-10 whitespace-nowrap bg-white border-b border-green-600 border-solid shadow-sm max-md:mt-10"
        >
          Identificacion
        </label>
        <input
          type="text"
          id="identificacion"
          className="sr-only"
          aria-label="Identificacion"
        />
        <Button className="mt-14 bg-green-600 text-white max-md:mt-10">
          Registrar
        </Button>
        <Button className="mb-16 bg-white text-green-600 underline max-md:mb-10">
          Volver
        </Button>
      </section>
    </main>
  );
};

export default RegistrarEstudianteInterno;