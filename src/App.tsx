import './App.css'
import WalletCard from './components/WalletCard'
import WalletActionBtn from './components/WalletActionBtn'
import TransactionItem from './components/TransactionItem'
import useTransaction from './store/useTransaction'
import { ArrowDownRightIcon, ArrowsRightLeftIcon, ArrowUpRightIcon } from '@heroicons/react/16/solid'
import { Link } from 'react-router-dom'
import Welcome from './components/Welcome'
function App() {

  const transactions = useTransaction((state) => state.transactions)

  return (
    <>
      <div className='p-5 w-auto'>
       <Welcome/>
       <WalletCard/>
       <div className='flex gap-3 justify-between my-5'>
          <Link to={'/cashIn'}>
            <WalletActionBtn icon={<ArrowDownRightIcon className='size-5 text-gray-600'/>} name={"Cash In"}/>
          </Link>
          <Link to={'/'}>
            <WalletActionBtn icon={<ArrowUpRightIcon className='size-5 text-gray-600'/>} name={"Cash Out"}/>
          </Link>
          <Link to={'/'}>
            <WalletActionBtn icon={<ArrowsRightLeftIcon className='size-5 text-gray-600'/>} name={"Transfer"}/>
          </Link>

       </div>
       <div>
        <div className="flex justify-between items-center mb-5">
        <h1 className='text-blue-500 font-semibold'>History</h1>
        <Link to={'/'} className='text-gray-600 text-xs py-1 px-2 rounded-md border border-gray-400'>
          See All
        </Link>
        </div>
        <div className='flex flex-col gap-3'>
          {transactions.map((transaction) => (
          <TransactionItem type={transaction.type} amount={transaction.amount} date={transaction.date} description={transaction.description}/>
          ))}
          
        </div>
       </div>
      </div>
    </>
  )
}

export default App
