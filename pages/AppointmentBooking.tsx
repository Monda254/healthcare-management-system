'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function AppointmentBooking() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [doctor, setDoctor] = useState('')
  const [time, setTime] = useState('')

  const handleBookAppointment = () => {
    // Implement appointment booking logic here
    console.log('Booking appointment:', { date, doctor, time })
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Book an Appointment</h1>
      <Card>
        <CardHeader>
          <CardTitle>Select Appointment Details</CardTitle>
          <CardDescription>Choose a date, doctor, and time for your appointment.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>
          <div>
            <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">Doctor</label>
            <Select onValueChange={setDoctor}>
              <SelectTrigger id="doctor">
                <SelectValue placeholder="Select a doctor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dr-smith">Dr. Smith</SelectItem>
                <SelectItem value="dr-johnson">Dr. Johnson</SelectItem>
                <SelectItem value="dr-williams">Dr. Williams</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
            <Select onValueChange={setTime}>
              <SelectTrigger id="time">
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="09:00">09:00 AM</SelectItem>
                <SelectItem value="10:00">10:00 AM</SelectItem>
                <SelectItem value="11:00">11:00 AM</SelectItem>
                <SelectItem value="14:00">02:00 PM</SelectItem>
                <SelectItem value="15:00">03:00 PM</SelectItem>
                <SelectItem value="16:00">04:00 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleBookAppointment}>Book Appointment</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

