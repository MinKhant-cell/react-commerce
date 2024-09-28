import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { Link } from 'react-router-dom'
function CashInPage() {
    const handleClick = (method) => {
        alert(`You selected: ${method}`);
    };

  return (
    <>
     <div className='p-5 w-auto'>
       <div className='flex gap-3 items-center mb-5'>
            <Link to={'/'}><ChevronLeftIcon className='size-6 text-gray-600'/></Link>
            <h1 className='text-lg font-semibold text-gray-500'>Cash In</h1>
       </div>
       <div>
        <h1 className="text-xl text-gray-600 mb-5">Ways to Cash In</h1>
       </div>
       <div
        className="border border-gray-300 p-3 rounded-lg shadow-sm mb-5 cursor-pointer hover:bg-gray-100"
        onClick={() => handleClick('Wallet Pay')}
      >
        <div className="text-lg text-blue-500 font-semibold">Wallet Pay</div>
        <div className="text-sm text-gray-500 mt-2">
          Top up your wallet instantly using Wallet Pay for fast and secure transactions.
        </div>
      </div>

      <div
        className="border border-gray-300 p-3 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100"
        onClick={() => handleClick('MPU')}
      >
        <div className="text-lg text-blue-500 font-semibold">MPU</div>
        <div className="text-sm text-gray-500 mt-2">
          Use MPU (Myanmar Payment Union) to cash in securely through your debit or credit card.
        </div>
      </div>
      </div>
      </>
  )
}

export default CashInPage