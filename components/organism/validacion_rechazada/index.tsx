import * as React from "react";

function ValidacionRechazada() {
  return (
    <div className="flex flex-col justify-center text-2xl text-center text-green-600 max-w-[402px]">
      <div className="flex flex-col items-center px-16 py-10 w-full bg-white border border-black border-solid">
        <h2 className="self-start underline">Validacion Rechazada</h2>
        <p className="mt-3.5 underline">No hay registro</p>
        <img
          loading="lazy"
          src="Vector2.png"
          className="mt-3 w-6 aspect-[0.85] fill-red-600"
          alt="Red cross icon indicating validation rejection"
        />
      </div>
    </div>
  );
}

export default ValidacionRechazada;