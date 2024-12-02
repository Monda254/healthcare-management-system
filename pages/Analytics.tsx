'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts'

const patientData = [
  { month: 'Jan', newPatients: 65, totalPatients: 200 },
  { month: 'Feb', newPatients: 59, totalPatients: 259 },
  { month: 'Mar', newPatients: 80, totalPatients: 339 },
  { month: 'Apr', newPatients: 81, totalPatients: 420 },
  { month: 'May', newPatients: 56, totalPatients: 476 },
  { month: 'Jun', newPatients: 55, totalPatients: 531 },
  { month: 'Jul', newPatients: 40, totalPatients: 571 },
]

const revenueData = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 5000 },
  { month: 'Apr', revenue: 4500 },
  { month: 'May', revenue: 3500 },
  { month: 'Jun', revenue: 4800 },
  { month: 'Jul', revenue: 4300 },
]

export default function Analytics() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Patient Growth</CardTitle>
            <CardDescription>New and total patients over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={patientData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="newPatients" fill="#8884d8" name="New Patients" />
                <Bar yAxisId="right" dataKey="totalPatients" fill="#82ca9d" name="Total Patients" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
            <CardDescription>Monthly revenue over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

