import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {onAuthStateChanged} from 'firebase/auth'
import {useState, useEffect, use} from 'react'
import {AuthProvider} from './components/context/AuthContext.jsx'
import Navbar from "./components/Navbar.jsx";
import Footer from './components/Footer'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import './App.css'
import { useAuthentication } from "./hooks/useAuthentication.jsx";

function App() {
  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user == undefined
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
       setUser(user)
    })
   
  }, [auth])

  if (loadingUser) {
    return <p>Carregando a página</p>
  }

  
  return (
    <>  
      <div>
        <AuthProvider value={user}>
          <BrowserRouter>
          <Navbar />    
          <div className="container">
            <Routes>
              <Route path="/" element={<Home/>} /> 
              <Route path="/login" element={<Login/>} /> 
              <Route path="/register" element={<Register/>} /> 
            </Routes>
          </div>
          <Footer />
          </BrowserRouter>
        </AuthProvider>
      </div>
    </>
  )
}

export default App
