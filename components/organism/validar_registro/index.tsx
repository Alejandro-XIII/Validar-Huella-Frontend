import * as React from "react";

interface MessageProps {
  text: string;
  iconSrc: string;
}

const ValidarRegistro: React.FC<MessageProps> = ({ text, iconSrc }) => {
  return (
    <div className="flex flex-col justify-center text-2xl text-center text-green-600 max-w-[402px]">
      <div className="flex flex-col px-6 pt-9 pb-16 w-full bg-white border border-black border-solid">
        <div className="underline">{text}</div>
        <img src={iconSrc} alt="icon" className="self-center mt-8 w-6 aspect-[0.85] fill-red-600" />
      </div>
    </div>
  );
};

export default ValidarRegistro;