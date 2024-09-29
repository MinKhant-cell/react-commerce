import {useState} from 'react'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

import { ChevronLeftIcon } from '@heroicons/react/16/solid'
function CashInConfirmPage() {
    const instantAmount = ['1000','3000', '5000', '10000', '50000', '100000', '200000', '300000', '500000'];
    const [amount, setAmount] = useState('');
    const [note, setNote] = useState('');

    const handlePayment = () => {
        toast((t) => (
            <div>
              <p>Are you sure you want to proceed?</p>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button
                  onClick={() => {
                    toast.dismiss(t.id);
                    // Handle confirmation logic here
                    console.log('Confirmed!');
                  }}
                >
                  Confirm
                </button>
                <button
                  onClick={() => {
                    toast.dismiss(t.id);
                    console.log('Cancelled');
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          ));
      
    }

  return (
    <>
     <div className='p-5 w-auto'>
       <div className='flex gap-3 items-center mb-5'>
            <Link to={'/cashIn'}><ChevronLeftIcon className='size-6 text-gray-600'/></Link>
            <h1 className='text-lg font-semibold text-gray-500'>Transfer From Wallet</h1>
       </div>
       <div className='my-5'>
            <h1 className="font-semibold text-blue-600 mb-5">KBZ Payment</h1>
       </div>
       <div
        className=""
      >
        <div className="text-sm text-gray-500 font-semibold">Amount</div>
        <input 
         type="text"
         className="border w-full bg-white border-gray-300 p-3 rounded-lg shadow-sm mt-3" 
         value={amount}
         onChange={(e) => setAmount(e.target.value)}
         placeholder='Enter the amount of money'/>

        <div className='flex flex-wrap gap-5 my-5'>
            {instantAmount.map((item) => (
                 <div onClick={() => setAmount(item)} className='py-2 px-4 border border-gray-300 rounded-md bg-white'>
                 <h1 className='text-sm font-medium text-gray-600'>{item}</h1>
             </div>
            ))}
            
        </div>
      </div>
      <div
        className="mb-5"
      >
        <div className="text-sm text-gray-500 font-semibold">Note</div>
        <textarea 
        rows="3" 
        className="border w-full bg-white border-gray-300 p-3 rounded-lg shadow-sm mt-3" 
        placeholder='Enter the amount of money'/>
      </div>
      <div>
        <button onClick={handlePayment} className='w-full bg-blue-500 text-white p-3 rounded-md'>Confirm Payment</button>
        <Toaster position='center-center'/>
      </div>
      </div>
      </>
  )
}

export default CashInConfirmPage