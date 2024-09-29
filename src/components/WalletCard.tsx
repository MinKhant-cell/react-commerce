import { QrCodeIcon } from '@heroicons/react/24/outline'
import React from 'react'

function WalletCard() {
  return (
    <div className="p-5 border border-gray-200 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white flex justify-between items-center">
    <div>
        <div className="mb-3">
            <h1 className="text-md font-bold">Balance</h1>
        </div>
        <div className="mb-5">
            <h1 className="text-3xl font-extrabold">$ 450</h1>
        </div>
        <button className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            View Details
        </button>
    </div>
    <div className="ml-5">
        <h1 className='text-xs text-center mb-1'>Scan Me</h1>
        <div className="w-14 h-14 bg-blue-700 p-1 rounded-lg shadow-md flex items-center justify-center">
            <QrCodeIcon className='text-white font-thin'/>
        </div>
    </div>
</div>

  )
}

export default WalletCard