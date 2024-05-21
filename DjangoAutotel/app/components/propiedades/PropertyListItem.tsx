import Image from "next/image";

const PropertyListItem = () => {
    return (
        <div className="cursor-pointer">
            <div className="relative overflow-hidden aspect-square rounded-xl m-2"> {/* Agrega la clase m-2 para un margen de 0.5rem */}
                <Image
                    layout="fill"
                    src='/Garaje1.jpg'
                    sizes="(max-width: 768px)768px, (max-width: 1200px): 768px, 768px"
                    className="hover:scale-110 object-cover transition"
                    alt="Garaje"
                />
            </div>

            <div className="mt-2">
                <p className="text-lg font-bold">Property name</p>
            </div>
            <div className="mt-2">
                <p className="text-sm text-gray-500"><strong>200$ por dia</strong></p>
            </div>
            
        </div>
    )
}

export default PropertyListItem;
