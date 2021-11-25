import Header from '../components/Header'
import AppHead from '../components/AppHead'
import Link from 'next/link'

const Index = () => {
  return (
    <>
      <AppHead />

      <Header />
      <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
        <div className='sm:text-center lg:text-left'>
          <h1 className='text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl'>
            <span className='block xl:inline'>👋 Accounting for student</span><br />
            <span className='block text-green-400 xl:inline'>is now easier.</span>
          </h1>
          <p className='mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
            We're helping student budget their spending easier and faster. Interested in joining? Pre-register now, and
            we'll let you know
            when we launch.
          </p>
          <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
            <div className='rounded-md shadow'>
              <Link
                href='/auth'
              >
                <button
                  className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-600 md:py-4 md:text-lg md:px-10'>
                  Get started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Index
