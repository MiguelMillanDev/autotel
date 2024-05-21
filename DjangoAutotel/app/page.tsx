import Image from "next/image";
import Categorias from "./components/navbar/Categorias";
import PropertyList from "./components/propiedades/PropertyList";

export default function Home() {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
      <Categorias className="flex flex-row items-center justify-between" />

      <div className="nt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap">

      <PropertyList/>
      </div>
   
    </main>
  );
}
