import { Button } from '@/components/ui/button'
import React from 'react'
import { useCreatedProject } from '../hook/useCreatedProject'

const Created = () => {
  const { handleGet } = useCreatedProject()
  return (
    <div>
      <h1>Welcome</h1>
      <Button onClick={ handleGet }>Get </Button>
    </div>
  )
}

export default Created
