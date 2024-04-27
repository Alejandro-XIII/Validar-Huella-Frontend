import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button className={`justify-center px-2.5 py-2 text-white whitespace-nowrap bg-green-600 rounded-2xl shadow-sm ${className}`}>
      {children}
    </button>
  );
};

const AdminHome: React.FC = () => {
  return (
    <main className="flex justify-center items-center px-16 py-20 text-base text-center text-green-600 bg-white max-md:px-5">
      <section className="flex flex-col items-center px-16 py-20 mt-5 max-w-full border border-green-600 border-solid w-[400px] max-md:px-5">
        <h1 className="mt-6 text-2xl underline">Hola Usuario</h1>
        <Button className="mt-10 max-md:mt-10">Validar</Button>
        <h2 className="mt-12 text-2xl underline max-md:mt-10">Registrar</h2>
        <div className="flex gap-5 justify-between self-stretch mt-3 text-white">
          <Button>Estudiante Interno</Button>
          <Button>Estudiante Externo</Button>
        </div>
        <button className="justify-center px-2.5 py-2 mt-8 mb-3 underline bg-white rounded-2xl">
          Cerrar sesion
        </button>
      </section>
    </main>
  );
};

export default AdminHome;