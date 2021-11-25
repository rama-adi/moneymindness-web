import React, { useEffect, useState } from 'react'
import { useUser, RequireAuth } from '../../hooks/authUser'
import Header from '../../components/Header'
import WorkInProgress from '../../components/WorkInProgress'
import { supabase } from '../../utils/initSupabase'
import { Card, Space, Typography } from '@supabase/ui'

export default function Dashboard() {
  RequireAuth()
  const { user } = useUser()
  const [wallet, setWallet] = useState();

  useEffect(() => {
    supabase
      .from('wallet')
      .select('*')
      .then(({data, error}) => {
        console.log('the data', data);
      })
  }, [])


  return (
    <>
      <Header />
      {user && (
        <>
          <WorkInProgress />

          <Card>

          </Card>
        </>
      )}
    </>
  )
}
