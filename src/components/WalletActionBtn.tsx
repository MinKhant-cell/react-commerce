import { ArrowDownRightIcon } from "@heroicons/react/16/solid"

function WalletActionBtn({name,icon}) {
  return (
    <div className='p-2 flex hover:text-blue-500 text-gray-600 items-center gap-3 border border-gray-200 bg-white rounded-lg shadow-sm transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
            {icon}
        <h1 className="text-sm ">{name}</h1>
    </div>
  )
}

export default WalletActionBtn

