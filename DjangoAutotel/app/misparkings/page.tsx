import Image from "next/image";
import ContactButton from "../components/ContactButton";
import PropertyList from "../components/propiedades/PropertyList";

const MisParkingsPage = () => {
    return (
        <main className="max-w-7xl mx-auto px-6 pb-6">
            <div className="pt-6 pb-2">
                <h1 className="my-6 text-3xl font-bold text-gray-800">Mis Parkings</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <PropertyList />
                </div>
            </div>
        </main>
    );
}

export default MisParkingsPage;
