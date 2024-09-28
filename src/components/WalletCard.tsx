import React from 'react'

function WalletCard() {
  return (
    <div className='p-5 border border-gray-200 rounded-lg shadow-sm bg-white'>
        <div>
            <h1 className='text-sm font-semibold text-gray-600'>Balance</h1>
        </div>
        <div className='my-3'>
            <h1>$ 0</h1>
        </div>
        <div>
            <h1>View Details</h1>
        </div>
    </div>
  )
}

export default WalletCard