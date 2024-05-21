import ReservasSidebar from "@/app/components/propiedades/ReservasSidebar";
import Image from "next/image";


const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1200px] mx-auto px-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src="/Garaje1.jpg"
                    className="object-cover w-full h-full"
                    alt="Garaje"
                />
            </div>

            <div className="py-6 flex items-center space-x-4">
                <Image
                src="/Profile.png"
                width={50}
                height={50}
                className="rounded-full"
                alt="the user name"
                />
                <p><strong>Miguel Angel Millan</strong> es tu anfitrion</p>
            </div>
            

            <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <span className="mb-6 block text-lg text-gray-600">
                        Información sobre esta plaza
                    </span>
                    <p>
                        La ubicación de esta plaza de garaje es inmejorable. Se encuentra en una zona céntrica y bien comunicada, a pocos minutos a pie de importantes puntos de interés, como centros comerciales, supermercados, restaurantes y zonas de ocio. Además, cuenta con excelentes conexiones de transporte público y fácil acceso a las principales vías y autopistas de la ciudad.
                    </p>
                    <h2 className="mt-6 text-xl">¿Dónde se queda mi coche?</h2>
                    <p>Madrid, Pozuelo</p>
                    <h2 className="mt-6 text-xl">¿Para qué tipo de vehículo?</h2>
                    <p>Furgoneta</p>
                    <h2 className="mt-6 text-xl">¿Qué tamaño tiene la plaza?</h2>
                    <p>14</p>
                </div>
                <ReservasSidebar />

                



                <div className="py-6 pr-6 col-span-2">
                    {/* Aquí puedes añadir más detalles o funcionalidades */}
                </div>
               
            </div>
        </main>
    );
};

export default PropertyDetailPage;
