import React, { useEffect, useState } from 'react'
import { useUser, RequireAuth } from '../../hooks/authUser'
import Header from '../../components/Header'
import WorkInProgress from '../../components/WorkInProgress'

export default function Dashboard() {
  RequireAuth()
  const { user } = useUser()


  return (
    <>
      <Header />
      {user && (
        <>
          <WorkInProgress />
        </>
      )}
    </>
  )
}
