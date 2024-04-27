import * as React from "react";

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <img loading="lazy" src={src} alt={alt} className="w-full aspect-[0.97] fill-green-600" />
  );
};

const Validar: React.FC = () => {
  return (
    <div className="flex justify-center items-center px-16 py-9 bg-white border border-black border-solid max-w-[402px]">
      <div className="flex flex-col max-w-full w-[184px]">
        <h2 className="text-2xl text-center text-green-600 underline">
          Ingrese la huella
        </h2>
        <div className="flex justify-center items-center self-center mt-8 w-[58px]">
          <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/119f233591a01eae646df99930598f894c06898a72e1720889fc8ba93ed65367?apiKey=4332f8008fc24abd89ca8c1c435782ba&" alt="Fingerprint icon" />
        </div>
      </div>
    </div>
  );
};

export default Validar;