import { ArrowDownRightIcon } from "@heroicons/react/16/solid"

function WalletActionBtn({name,icon}) {
  return (
    <div className='p-2 flex items-center gap-3 border border-gray-200 bg-white rounded-lg shadow-sm'>
            {icon}
        <h1 className="text-sm text-gray-500">{name}</h1>
    </div>
  )
}

export default WalletActionBtn

