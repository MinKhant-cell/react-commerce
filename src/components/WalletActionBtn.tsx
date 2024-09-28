import { ArrowDownRightIcon } from "@heroicons/react/16/solid"

function WalletActionBtn({name,icon}) {
  return (
    <div className='p-2 flex gap-3 border border-gray-200 bg-white rounded-lg shadow-sm'>
        <div>
            {icon}
        </div>
        <h1>{name}</h1>
    </div>
  )
}

export default WalletActionBtn

