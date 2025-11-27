import './App.css'
import { BrowserRouter , Routes , Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLayout from './admin/AdminLayout';
import Landing from './pages/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AllSpecialities from './components/allSpecialities/AllSpecialities';
import Pnf from './pages/Pnf';
import Header from './pages/Header';
import DoctorAppointmentPage from './components/docterCard/DoctorAppointmentPage';
import SpecialtiesSection from './components/specialtyCard/SpecialtiesSection';
import Footer from './pages/Footer';
import MeetRynott from './pages/MeetRynott';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import Feedback from './pages/Feedback';
import Admin from './admin/Admin';
import AdminLogin from './admin/AdminLogin';
import AppointmentForm from './components/docterCard/AppointmentForm';



function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    {/* Regular website routes with header and footer */}
    <Routes>
      <Route path='/' element={
        <>
        <Header/>
        <Landing/>
        <Footer/>
        </>
      } />
      <Route path='/*' element={
        <>
        <Header/>
        <Routes>
          <Route path='all-specialities' element={<AllSpecialities/>} />
          <Route path='appointment' element={<DoctorAppointmentPage/>} />
          <Route path='specialties' element={<SpecialtiesSection/>} />
          <Route path='meetRynott' element={<MeetRynott/>} />
          <Route path='careers' element={<Careers/>} />
          <Route path='contactus' element={<ContactUs/>} />
          <Route path='feedback' element={<Feedback/>} />
          <Route path='*' element={<Pnf/>} />
          <Route path='form' element={<AppointmentForm/>} />

        </Routes>
        <Footer/>
        </>
      } />
      
      {/* Admin routes without header and footer - using AdminLayout */}
      <Route path='/admin/login' element={<AdminLogin/>} />
      <Route path='/admin' element={
        <ProtectedRoute>
          <AdminLayout>
            <Admin/>
          </AdminLayout>
        </ProtectedRoute>
      } />
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
