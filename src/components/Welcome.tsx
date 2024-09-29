import { BellIcon } from '@heroicons/react/24/outline'
import logo from '../../public/vite.svg'
import LanguageBtn from './LanguageBtn'

function Welcome() {
  return (
    <>
    <div className='flex justify-between items-start mb-5'>
    <div className='flex gap-3 items-center flex-nowrap'>
        <img src={logo} alt="Logo" className='w-28' />
        <div>
            <h1 className='text-lg font-semibold text-gray-600 text-nowrap'>John Doe</h1>
        </div>
    </div>
        <div className='flex gap-3 items-center'>
            <LanguageBtn/>
            <BellIcon className='size-6 text-gray-600'/>
        </div>
    </div>
    
    
    </>
  )
}

export default Welcome