import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

interface Patient {interface Patient {
  id: number
  full_name: string
  date_of_birth: string
  gender: string
  contact_number: string
  email: string
  address: string
}

export default function PatientManagement() {
  const [patients, setPatients] = useState<Patient[]>([])
  const [newPatient, setNewPatient] = useState<Partial<Patient>>({})

  useEffect(() => {
    fetchPatients()
  }, [])

  const fetchPatients = async () => {
    try {
      const response = await fetch('/api/v1/patients')
      const data = await response.json()
      setPatients(data)
    } catch (error) {
      console.error('Error fetching patients:', error)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPatient({ ...newPatient, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/v1/patients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPatient),
      })
      if (response.ok) {
        fetchPatients()
        setNewPatient({})
      }
    } catch (error) {
      console.error('Error creating patient:', error)
    }
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Patient Management</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <Input
          name="full_name"
          placeholder="Full Name"
          value={newPatient.full_name || ''}
          onChange={handleInputChange}
        />
        <Input
          name="date_of_birth"
          type="date"
          placeholder="Date of Birth"
          value={newPatient.date_of_birth || ''}
          onChange={handleInputChange}
        />
        <Input
          name="gender"
          placeholder="Gender"
          value={newPatient.gender || ''}
          onChange={handleInputChange}
        />
        <Input
          name="contact_number"
          placeholder="Contact Number"
          value={newPatient.contact_number || ''}
          onChange={handleInputChange}
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={newPatient.email || ''}
          onChange={handleInputChange}
        />
        <Input
          name="address"
          placeholder="Address"
          value={newPatient.address || ''}
          onChange={handleInputChange}
        />
        <Button type="submit">Add Patient</Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date of Birth</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Address</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.map((patient) => (
            <TableRow key={patient.id}>
              <TableCell>{patient.id}</TableCell>
              <TableCell>{patient.full_name}</TableCell>
              <TableCell>{patient.date_of_birth}</TableCell>
              <TableCell>{patient.gender}</TableCell>
              <TableCell>{patient.contact_number}</TableCell>
              <TableCell>{patient.email}</TableCell>
              <TableCell>{patient.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

