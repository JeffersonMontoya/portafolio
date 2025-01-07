
import React from 'react'
import TransitionPage from '@/components/TransitionPage'

import ContainerPage from '@/components/Container'
import { Avatar } from '@/components/Avatar'
import CounterServices from '@/components/CounterServices'
import Timeline from '@/components/Timeline'

const AboutPage = () => {
  return (
    <>
    <TransitionPage/>
    <ContainerPage>

      <Avatar/>
      <h1 className='text-2xl leading-tight text-center md:text md:text-6xl mt-10'>Toda mi {''}
        <span className='font-bold text-secondary'>trayectoria profesional</span>
        
      </h1>

      <CounterServices/>
      <Timeline/>
    </ContainerPage>
   
    </>

  )
}

export default AboutPage
