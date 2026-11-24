import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Events from './Pages/Events';
import EventDetails from './Pages/EventDetails';
import Login from './Pages/Login';
import Register from './Pages/Register';
import MyBookings from './Pages/MyBookings';
import AdminDashboard from './Pages/AdminDashboard';
import ManageEvents from './Pages/ManageEvents';
import ManageBookings from './Pages/ManageBookings';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Events' element={<Events />} />
                <Route path='/EventDetails/:id' element={<EventDetails />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Register' element={<Register />} />
                <Route path='/MyBookings' element={<MyBookings />} />
                <Route path='/Admin' element={<AdminDashboard />} />
                <Route path='/ManageEvents' element={<ManageEvents />} />
                <Route path='/ManageBookings' element={<ManageBookings />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default App;