import './App.css'
import WalletCard from './components/WalletCard'
import WalletActionBtn from './components/WalletActionBtn'
import TransactionItem from './components/TransactionItem'
import useTransaction from './store/useTransaction'
import { ArrowDownRightIcon, ArrowsRightLeftIcon, ArrowUpRightIcon } from '@heroicons/react/16/solid'
import { Link } from 'react-router-dom'
function App() {

  const transactions = useTransaction((state) => state.transactions)

  return (
    <>
      <div className='p-5 w-auto'>
       <WalletCard/>
       <div className='flex gap-3 justify-between my-5'>
          <Link to={'/cashIn'}>
            <WalletActionBtn icon={<ArrowDownRightIcon className='size-5 text-gray-600'/>} name={"Cash In"}/>
          </Link>
          <WalletActionBtn icon={<ArrowUpRightIcon className='size-5 text-gray-600'/>} name={"Cash Out"}/>
          <WalletActionBtn icon={<ArrowsRightLeftIcon className='size-5 text-gray-600'/>} name={"Transfer"}/>
       </div>
       <div>
        <div className="flex justify-between mb-5">
        <h1>History</h1>
        <h1>See All</h1>
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
