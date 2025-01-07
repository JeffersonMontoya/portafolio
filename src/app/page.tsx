'use client'

import Introduction from '@/components/Introduction'
import { Particulas } from '@/components/Particulas'
import TransitionPage from '@/components/TransitionPage'

export default function Home () {
  return (
    <main>
      <TransitionPage />
      <div className='flex bg-no-repeat bg-gradient-cover '>
        <Particulas />
        
        <Introduction />
        
      </div>
    </main>
  )
}
