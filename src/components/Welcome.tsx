import { BellIcon } from '@heroicons/react/24/outline'
import logo from '../../public/vite.svg'
import LanguageBtn from './LanguageBtn'

function Welcome() {
  return (
    <>
    <div className='flex justify-between items-start'>
    <div className='flex gap-3 items-center mb-5'>
        <div>
            <img src={logo} alt="Logo" className='w-10 h-10' />
        </div>
        <div>
            <p className='text-xs text-blue-500'>Good Morning</p>
            <h1 className='text-sm font-medium text-gray-600'>John Doe</h1>
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