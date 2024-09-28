import TransferIcon from "../icons/TransferIcon"
import moment from 'moment';

function TransactionItem({amount,type, date, description}) {
  return (
    <div className='grid px-5 py-3 grid-cols-3 gap-3 border border-gray-200 rounded-lg shadow-sm bg-white'>
        <div className="p-2 flex justify-start items-center">
            <TransferIcon size={24}/>
        </div>
        <div className="">
        <h1 className="uppercase text-sm font-semibold text-gray-600">{type}</h1>
        <h1 className="text-xs text-gray-500">{moment(date).format('DD-MM-YY')}</h1>
        </div>
        <div>
        <h1 className="text-end">$ {amount}</h1>
        </div>
    </div>
  )
}

export default TransactionItem
