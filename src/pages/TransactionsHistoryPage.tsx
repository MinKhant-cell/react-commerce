import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import TransactionItem from '../components/TransactionItem';
import useTransaction from '../store/useTransaction';

function TransactionsHistoryPage() {
  const transactions = useTransaction((state) => state.transactions)

  const navigate = useNavigate();
    const handleClick = (method) => {
      if  (method === 1) {
        navigate(`/cashInConfirmPage`);
      }else{
        toast('Comming Soon!', {
          icon: '😃',
        });
      }
      
    };

  return (
    <>
    <Toaster position='top-center'/>
     <div className='p-5 w-auto'>
       <div className='flex gap-3 items-center mb-5'>
            <Link to={'/'}><ChevronLeftIcon className='size-6 text-gray-600'/></Link>
            <h1 className='text-lg font-semibold text-blue-500'>Transactions Histroy</h1>
       </div>

       <div className='flex flex-col gap-3'>
          {transactions.map((transaction) => (
          <TransactionItem type={transaction.type} amount={transaction.amount} date={transaction.date} description={transaction.description}/>
          ))}
        </div>
       
      </div>
      </>
  )
}

export default TransactionsHistoryPage