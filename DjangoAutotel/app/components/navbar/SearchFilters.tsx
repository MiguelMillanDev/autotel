'use client';



const SearchFilters = () => {
   ;

    return (
        <div 
            onClick={() => searchModal.open('location')}
            className="h-[48px] lg:h-[64px] flex flex-row items-center justify-between border rounded-full"
        >
            <div className="hidden lg:block">
                <div className="flex flex-row items-center justify-between">
                    <div className="cursor-pointer w-[250px] h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Destino</p>
                        <p className="text-sm">Buscar parking</p>
                    </div>

                    <div className="cursor-pointer h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Llegada</p>
                        <p className="text-sm">Introduce la fecha</p>
                    </div>
                    
                    <div className="cursor-pointer h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Salida</p>
                        <p className="text-sm">Introduce la fecha</p>
                    </div>

                    <div className="cursor-pointer h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">¿Cuántos vehículos?</p>
                         <p className="text-sm">Agregar cantidad de vehículos</p>
                    </div>

                </div>
            </div>

            <div className="p-2">
            <div className="cursor-pointer p-2 lg:p-4 transition rounded-full text-white bg-blue-500 hover:bg-black-600">
                    <svg 
                        viewBox="0 0 32 32" 
                        style={{display:'block', fill:'none', height: '12px', width: '12px', stroke: 'currentColor', strokeWidth:4, overflow:'visible'}} 
                        aria-hidden="true" role="presentation" focusable="false"
                    >
                        <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default SearchFilters;