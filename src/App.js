import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequirAuth from './Pages/Login/RequirAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyAppointments from './Pages/DashBoard/MyAppointments';
import MyReview from './Pages/DashBoard/MyReview';
import Users from './Pages/DashBoard/Users';
import RequirAdmin from './Pages/Login/RequirAdmin';

function App() {
  return (
    <div className='px-12 max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appoinment" element={
          <RequirAuth>
            <Appointment />
          </RequirAuth>
        } />
        <Route path="/dashboard" element={<RequirAuth><DashBoard /></RequirAuth>} >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='myreview' element={<MyReview></MyReview>}></Route>
          <Route path='users' element={<RequirAdmin><Users></Users></RequirAdmin>}></Route>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
