'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function Telemedicine() {
  const [isCallActive, setIsCallActive] = useState(false)

  const startCall = () => {
    // Implement call start logic here
    setIsCallActive(true)
  }

  const endCall = () => {
    // Implement call end logic here
    setIsCallActive(false)
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Telemedicine</h1>
      <Card>
        <CardHeader>
          <CardTitle>Video Consultation</CardTitle>
          <CardDescription>Connect with your healthcare provider remotely.</CardDescription>
        </CardHeader>
        <CardContent>
          {isCallActive ? (
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <p>Video call in progress</p>
            </div>
          ) : (
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              <p>Your video will appear here when the call starts</p>
            </div>
          )}
        </CardContent>
        <CardFooter>
          {isCallActive ? (
            <Button onClick={endCall} variant="destructive">End Call</Button>
          ) : (
            <Button onClick={startCall}>Start Call</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

