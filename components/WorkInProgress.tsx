import { Card, Space, Typography } from '@supabase/ui'
import React from 'react'

const workInProgress = () => {
  return (
    <div className="w-screen flex justify-center">
      <Card className="mt-32">
        <Space direction="vertical" size={6}>
          <Typography.Title level={2}>👋 Welcome!</Typography.Title>
          <Typography.Text>
            Welcome aboard, thank you for pre-registering! We'll let you know once the app is finished
          </Typography.Text>
        </Space>
      </Card>
    </div>
  )
}

export default workInProgress