
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Shared Layouts/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
    </>
  )
}

export default App
