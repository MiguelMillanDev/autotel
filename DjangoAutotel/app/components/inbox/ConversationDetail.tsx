'use client';

import CustomButton from "../forms/CustomButton";

const ConversationDetail = () => {

    return (
        <>
            <div className="max-h-[400px] overflow-auto flex flex-col space-y-4 p-4 bg-white rounded-xl shadow-lg">
                <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
                    <p className="font-bold text-gray-700">Miguel Angel</p>
                    <p className="text-gray-600">dsaadsasdsads</p>
                </div>

                <div className="w-[80%] ml-auto py-4 px-6 rounded-xl bg-blue-200">
                    <p className="font-bold text-gray-700">Miguel Angel</p>
                    <p className="text-gray-600">dsaadsasdsads</p>
                </div>
            </div>
            
            <div className="mt-4 py-4 px-6 flex items-center border border-gray-300 space-x-4 rounded-xl bg-white shadow-md">
                <input 
                    type="text" 
                    placeholder="Escribe tu mensaje..." 
                    className="w-full p-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <CustomButton
                    label='Enviar'
                    onClick={() => console.log('Usuario hizo click')}
                    className="w-[100px] bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-300"
                />
            </div>
        </>
    );
}

export default ConversationDetail;
