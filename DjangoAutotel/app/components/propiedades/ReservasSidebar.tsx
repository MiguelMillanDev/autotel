const ReservasSidebar = () => {
    return(
        <aside className="mt-6 p-6 col-span-2 rounded-xl  border border-gray-30">
            <h2 className="mb-5 text-2xl">3$ la hora </h2>
        
            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label className="block font-bold text-xs">Numero de horas</label>
                <select className="w-full ml-1 text-xm">
                    <option >1</option>
                    <option >2</option>
                    <option >3</option>
                    <option >4</option>
                    <option >5</option>
                    <option >6</option>
                    <option >7</option>
                    <option >8</option>
                </select>
                
                
            </div>
            
            <div className="w-full mb-6 py-6 text-center bg-blue-500 hover:bg-blue-800 rounded-xl">Alquila</div>



            

        </aside>
    )
}

export default ReservasSidebar;