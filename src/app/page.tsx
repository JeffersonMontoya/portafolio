'use client'

import Introduction from '@/components/Introduction'
import TransitionPage from '@/components/TransitionPage'

export default function Home () {
  return (
    <main>
      <TransitionPage />
      <div className='flex bg-no-repeat bg-gradient-cover '>
        
        
        <Introduction />
        
      </div>
    </main>
  )
}
