'use client'

import Link from 'next/link'

import { MotionTransition } from '@/components/TransitionComponents'
import { usePathname } from 'next/navigation'
import { itemsNavbar } from '@/data/data'

const Navbar = () => {
  const router = usePathname()

  return (
    <MotionTransition
      position='right'
      className='fixed bottom-4 left-0 z-40 flex flex-col items-center justify-center w-full mt-auto h-max'
    >
      <nav>
        <div className='flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm'>
          {itemsNavbar.map(item => (
            <div
              key={item.id}
              className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${
                router === item.link && 'bg-secondary'
              }`}
              data-tooltip-target='tooltip-default'
            >
              <Link href={item.link}>{item.icon} </Link>
            </div>
          ))}
        </div>
      </nav>
    </MotionTransition>
  )
}

export default Navbar
