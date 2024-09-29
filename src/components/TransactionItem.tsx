import { ArrowDownRightIcon, ArrowsRightLeftIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import moment from 'moment';

function TransactionItem({amount,type, date, description}) {
  const typeIcon = (type) => {
    if (type === 1) {
      return <ArrowsRightLeftIcon className='text-white size-6'/>
    }
    else if (type === 2) {
      return <ArrowDownRightIcon className='text-white size-6'/>
    }
    else if (type === 3) {
      return <ArrowUpRightIcon className='text-white size-6'/>
    }
  }

  const typeText = (type) => {
    if (type === 1) {
      return "Transfer"
    }
    else if (type === 2) {
      return "Cash In"
    }
    else if (type === 3) {
      return "Cash Out"
    }
  }
  return (
    <div className='grid px-5 py-3 grid-cols-4 gap-3 border border-gray-300 rounded-lg shadow-sm bg-white'>
        <div className="">
          <div className="w-12 h-12 bg-blue-600 p-2 rounded-lg shadow-md flex justify-center items-center">
           {typeIcon(type)}
          </div>
        </div>
        <div className="grid col-span-2">
          <h1 className="uppercase text-sm font-semibold text-gray-600">{typeText(type)}</h1>
          <h1 className="text-xs text-gray-500">{moment(date).format('DD-MM-YY')}</h1>
        </div>
        <div>
        <h1 className={"text-end "+ (type === 2 ? 'text-green-500' : 'text-red-500')}>{type === 2 ? '+' : '-'} $ {amount}</h1>
        </div>
    </div>
  )
}

export default TransactionItem
