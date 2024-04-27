import * as React from "react";

interface InputProps {
  className: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ className, placeholder }) => {
  return (
    <div className={`justify-center px-2.5 py-2 mt-9 bg-white border-b border-solid shadow-sm ${className}`}>
      <label htmlFor={placeholder} className="sr-only">
        {placeholder}
      </label>
      <input type="text" id={placeholder} placeholder={placeholder} aria-label={placeholder} className="w-full bg-transparent outline-none" />
    </div>
  );
};

const LoginAdmin: React.FC = () => {
  return (
    <main className="flex justify-center items-center px-16 py-20 text-base text-center whitespace-nowrap bg-white max-md:px-5">
      <div className="flex flex-col px-12 py-20 mt-5 max-w-full border border-green-600 border-solid w-[400px] max-md:px-5">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/176ce62395c9a9c76cd439e84d091b821084e0941675a821688b7228050b33ac?apiKey=4332f8008fc24abd89ca8c1c435782ba&" alt="Logo" className="self-center aspect-[1.11] w-[69px]" />
        <form>
          <Input className="border-green-600 text-green-600" placeholder="Usuario" />
          <Input className="border-zinc-400 text-zinc-400" placeholder="Contraseña" />
          <button type="submit" className="justify-center self-center px-2.5 py-2 mt-6 mb-11 text-white bg-green-600 rounded-2xl shadow-sm max-md:mb-10">
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
};

export default LoginAdmin;