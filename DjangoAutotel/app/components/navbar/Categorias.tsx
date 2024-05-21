import GarageIcon from '@mui/icons-material/Garage';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import WavesIcon from '@mui/icons-material/Waves';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import CarRepairIcon from '@mui/icons-material/BuildCircle';

const Categorias = () => {
    return (
        <div className="pt-3 pb-6 flex flex-wrap justify-center space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16">
        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100 w-[120px]">
            <GarageIcon className='w-[80px] h-[30px]' />
            <span className='text-xs'>Garage</span>
    
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <LocalParkingIcon className='w-[80px] h-[30px]' />
                <span className='text-xs'>Parkings</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <AirportShuttleIcon className='w-[80px] h-[30px]' />
                <span className='text-xs'>Furgonetas</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <WavesIcon className='w-[80px] h-[30px]' />
                <span className='text-xs'>Playa</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <ElectricCarIcon className='w-[80px] h-[30px]' />
                <span className='text-xs'>Carga</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <TwoWheelerIcon className='w-[80px] h-[30px]' />
                <span className='text-xs'>Motocicletas</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <LocalGasStationIcon className='w-[80px] h-[30px]' />
                <span className='text-xs'>Gasolinera</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <CarRepairIcon className='w-[80px] h-[30px]' />
                <span className='text-xs'>Taller</span>
            </div>
        </div>
    )
}

export default Categorias;
