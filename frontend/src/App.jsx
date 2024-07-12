import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/guest/home'
import Login from './pages/guest/Login'
import AdminDashboard from './pages/admin/AdminDashboard'
import ClientDashboard from './pages/client/ClientDashboard'
import ForgotPin from './pages/guest/ForgotPin'
import Verification from './pages/guest/Verification'
import Success from './pages/guest/Success'
import Failed from './pages/guest/Failed'
import AdminLayout from './pages/admin/layout/AdminLayout'
import AdminAbsensi from './pages/admin/AdminAbsensi'
import AdminAbsensiEmployee from './pages/admin/AdminAbsensiEmployee'
import AdminManagementuser from './pages/admin/AdminManagementUser'
import AdminManagementUserProfile from './pages/admin/AdminManagementUserProfile'
import AdminManagementuserProfileEdit from './pages/admin/AdminManagementuserProfileEdit'
import AdminManagementuserProfileAdd from './pages/admin/AdminManagementuserProfileAdd'
import AdminAdmin from './pages/admin/AdminAdmin'

function App() {

  return (
    <main  style={{backgroundColor: '#F0F0F0'}}>
      
      <BrowserRouter>
        <Routes>

          {/* guest pages */}
          <Route path='/' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='forgot-pin' element={<ForgotPin/>}/>
          <Route path='verification' element={<Verification/>}/>
          <Route path='success' element={<Success/>}/>
          <Route path='failed' element={<Failed/>}/>
          {/* end guest pages */}

          {/* admin pages */}
          <Route path='/admin' element={<AdminLayout/>}>
            <Route index element={<Navigate to='/admin/dashboard'/>}/>
            <Route path='dashboard' element={<AdminDashboard/>}/>
            <Route path='absensi' element={<AdminAbsensi/>}/>
            <Route path='absensi/employee' element={<AdminAbsensiEmployee/>}/>
            <Route path='employee' element={<AdminManagementuser/>}/>
            <Route path='employee/profile' element={<AdminManagementUserProfile/>}/>
            <Route path='employee/profile/edit' element={<AdminManagementuserProfileEdit/>}/>
            <Route path='employee/profile/add' element={<AdminManagementuserProfileAdd/>}/>
            <Route path='admin' element={<AdminAdmin/>}/>
          </Route>
          {/* end admin pages */}

          {/* client pages */}
          <Route path='dashboard' element={<ClientDashboard/>}/>
          {/* end client pages */}

        </Routes>
      </BrowserRouter>

    </main>
  )
}

export default App
