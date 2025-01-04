import { BrowserRouter, Routes, Route } from 'react-router-dom'
    import Login from '../pages/login'
    import Register from '../pages/register'
    import Dashboard from '../pages/dashboard'
    import Unauthorized from '../pages/unauthorized'

    export default function App() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
          </Routes>
        </BrowserRouter>
      )
    }
