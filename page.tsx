import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import PatientManagement from './pages/PatientManagement'
import AppointmentBooking from './pages/AppointmentBooking'
import Telemedicine from './pages/Telemedicine'
import EHR from './pages/EHR'
import Billing from './pages/Billing'
import Analytics from './pages/Analytics'

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/patients" component={PatientManagement} />
            <Route path="/appointments" component={AppointmentBooking} />
            <Route path="/telemedicine" component={Telemedicine} />
            <Route path="/ehr" component={EHR} />
            <Route path="/billing" component={Billing} />
            <Route path="/analytics" component={Analytics} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

