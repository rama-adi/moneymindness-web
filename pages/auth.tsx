import React from 'react'
import { AuthRedirect } from '../hooks/authUser'
import { supabase } from '../utils/initSupabase'
import { Auth } from '@supabase/ui'

import AppHead from '../components/AppHead'

const AuthPage = () => {
  AuthRedirect()

  return (
    <>
      <AppHead title='Authentication' />
      <div className='min-h-screen flex'>
        <div className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
          <div className='mx-auto w-full max-w-sm lg:w-96'>
            <div>
              <img
                className='h-12 w-auto'
                src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                alt='Workflow'
              />
              <h2 className='mt-6 text-3xl font-extrabold text-gray-100'>Welcome
                to {process.env.NEXT_PUBLIC_APP_NAME}</h2>
            </div>

            <div className='mt-4'>
              <Auth
                supabaseClient={supabase}
                //providers={['google', 'github']}
                view={'sign_in'}
                socialLayout='horizontal'
                socialButtonSize='xlarge'
              />
            </div>
          </div>
        </div>
        <div className='hidden lg:block relative w-0 flex-1'>
          <img
            className='absolute inset-0 h-full w-full object-cover'
            src='https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80'
            alt=''
          />
        </div>
      </div>
    </>
  )
}

export default AuthPage
