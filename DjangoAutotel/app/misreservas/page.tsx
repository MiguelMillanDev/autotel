import Image from "next/image";
import ContactButton from "../components/ContactButton";
import PropertyList from "../components/propiedades/PropertyList";

const MisReservas = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="pt-6 pb-2">
                <h1 className="my-6 text-3xl font-bold text-gray-800">Mis reservas</h1>
            </div>
            <div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6 shadow-lg border border-gray-200 rounded-xl bg-white">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                src="/Garaje1.jpg"
                                className="hover:scale-110 object-cover transition-transform duration-300 h-full w-full rounded-xl"
                                alt="Imagen Garaje"
                            />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-3 space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">Nombre de la propiedad</h2>
                        <p className="text-gray-700"><strong>Fecha de inicio:</strong> 08/5/2024</p>
                        <p className="text-gray-700"><strong>Fecha de fin:</strong> 08/5/2024</p>
                        <p className="text-gray-700"><strong>Número de horas:</strong> 8h</p>
                        <p className="text-gray-700"><strong>Precio total:</strong> $200</p>
                        <div className="mt-6">
                            <button className="py-3 px-6 text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors duration-300">
                                Ir a propiedades
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MisReservas;
