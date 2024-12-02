'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function Billing() {
  const [invoices, setInvoices] = useState([
    { id: 1, date: '2023-05-01', description: 'General Checkup', amount: 150 },
    { id: 2, date: '2023-06-15', description: 'X-Ray', amount: 250 },
  ])

  const [newInvoice, setNewInvoice] = useState({ date: '', description: '', amount: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewInvoice({ ...newInvoice, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setInvoices([...invoices, { id: invoices.length + 1, ...newInvoice, amount: parseFloat(newInvoice.amount) }])
    setNewInvoice({ date: '', description: '', amount: '' })
  }

  const totalAmount = invoices.reduce((sum, invoice) => sum + invoice.amount, 0)

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Billing</h1>
      <Card>
        <CardHeader>
          <CardTitle>Add New Invoice</CardTitle>
          <CardDescription>Enter details for a new invoice.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
              <Input
                type="date"
                id="date"
                name="date"
                value={newInvoice.date}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <Input
                type="text"
                id="description"
                name="description"
                value={newInvoice.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
              <Input
                type="number"
                id="amount"
                name="amount"
                value={newInvoice.amount}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button type="submit">Add Invoice</Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Invoices</CardTitle>
          <CardDescription>View and manage patient invoices.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.description}</TableCell>
                  <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="flex justify-between items-center w-full">
            <span className="font-bold">Total:</span>
            <span className="font-bold">${totalAmount.toFixed(2)}</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

