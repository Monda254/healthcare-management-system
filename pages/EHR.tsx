'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function EHR() {
  const [records, setRecords] = useState([
    { id: 1, date: '2023-05-01', diagnosis: 'Common Cold', treatment: 'Rest and fluids' },
    { id: 2, date: '2023-06-15', diagnosis: 'Sprained Ankle', treatment: 'RICE method and pain medication' },
  ])

  const [newRecord, setNewRecord] = useState({ date: '', diagnosis: '', treatment: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewRecord({ ...newRecord, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setRecords([...records, { id: records.length + 1, ...newRecord }])
    setNewRecord({ date: '', diagnosis: '', treatment: '' })
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Electronic Health Records</h1>
      <Card>
        <CardHeader>
          <CardTitle>Add New Record</CardTitle>
          <CardDescription>Enter details for a new health record.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
              <Input
                type="date"
                id="date"
                name="date"
                value={newRecord.date}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="diagnosis" className="block text-sm font-medium text-gray-700">Diagnosis</label>
              <Input
                type="text"
                id="diagnosis"
                name="diagnosis"
                value={newRecord.diagnosis}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="treatment" className="block text-sm font-medium text-gray-700">Treatment</label>
              <Textarea
                id="treatment"
                name="treatment"
                value={newRecord.treatment}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button type="submit">Add Record</Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Health Records</CardTitle>
          <CardDescription>View and manage patient health records.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Diagnosis</TableHead>
                <TableHead>Treatment</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {records.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>{record.diagnosis}</TableCell>
                  <TableCell>{record.treatment}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

