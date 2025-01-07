import Image from 'next/image'
import React from 'react'

const Introduction = () => {
  return (
    <div className='w-full min-h-screen bg-darkBg/60'>
      <div className=' container mx-auto px-4 py-8'>
        <div className=' flex flex-col md:flex-row items-center justify-between gap-8 py-16'>
          <div className='w-full md:w-1/2 flex justify-center md:justify-start'>
            <div className='relative w-full max-w-md '>
              <Image
                src='/home-4.png'
                priority
                width={400}
                height={400}
                alt='Avatar'
                className='w-full h-auto object-contain'
              />
            </div>
          </div>

          <div className='w-full md:w-1/2 text-white'>
            <div className='mb-8'>
              <h2 className='text-xl md:text-2xl font-semibold leading-relaxed'>
                Desarrollador de software con experiencia en optimización de
                procesos y creación de soluciones internas. Trabajé en
                Andes-BPO, contribuyendo a la automatización de procesos y al
                desarrollo de un CRM de cobros. Manejo tecnologías como{' '}
                <span className='font-semibold'>Laravel</span>,{' '}
                <span className='font-semibold'>Next.js</span>,{' '}
                <span className='font-semibold'>MySQL</span> y{' '}
                <span className='font-semibold'>Django</span>, enfocado en
                soluciones eficientes y personalizadas.
              </h2>
            </div>

            <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6'>
              <a
                href='/projects'
                className='w-full sm:w-auto px-6 py-3 text-center border-2 text-md rounded-xl 
                         transition-all hover:shadow-xl hover:shadow-white/50'
              >
                Ver proyectos
              </a>
              <a
                href='/contact'
                className='w-full sm:w-auto px-6 py-3 text-center border-2 text-md rounded-xl 
                         text-secondary border-secondary transition-all 
                         hover:shadow-xl hover:shadow-secondary'
              >
                Contacta conmigo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
