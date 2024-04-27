import * as React from "react";

interface ValidationSuccessProps {
  studentName: string;
  imageSrc: string;
}

function ValidacionExitosa({ studentName, imageSrc }: ValidationSuccessProps) {
  return (
    <section className="flex flex-col justify-center text-2xl text-center text-green-600 max-w-[402px]">
      <div className="flex flex-col items-center px-20 pt-9 pb-3.5 w-full bg-white border border-black border-solid">
        <h2 className="underline">Validacion Exitosa</h2>
        <img src={imageSrc} alt="Validation success icon" className="aspect-[0.95] w-[58px]" />
        <p className="mt-5 underline">Hola {studentName}</p>
      </div>
    </section>
  );
}

export default ValidacionExitosa;