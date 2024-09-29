import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'
import { LanguageIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function LanguageBtn() {
    const [languages, setLanguages] = useState([
        'English',
        'Chinese',
        'Thai',
        'Vietnamese',
        'Indonesian',
    ])
  return (
    <div className="w-52 text-right">
      <Menu __demoMode>
        <MenuButton className="inline-flex items-centergap-2 rounded-md py-1.5 px-3 text-sm/6 text-gray-600 shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white">
          <LanguageIcon className='size-6 text-gray-600'/>
          <ChevronDownIcon className="size-4 text-gray-500"/>
        </MenuButton>
        <MenuItems
          transition
          anchor="bottom end"
          className="w-40 origin-top-right rounded-xl border border-gray-200 bg-white p-1 text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
            {languages.map((language) => (
                <MenuItem>
                    <button className="w-full text-start text-gray-500 rounded-lg py-1.5 px-3 data-[focus]:bg-white">
                        {language}
                    </button>
                </MenuItem>
            ))}
          
        </MenuItems>
      </Menu>
    </div>
  )
}
