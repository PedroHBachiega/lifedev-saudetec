import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {onAuthStateChanged} from 'firebase/auth'
import {useState, useEffect, use} from 'react'
import {AuthProvider} from './context/AuthContext.jsx'
import Navbar from "./components/Navbar.jsx";
import Footer from './components/Footer'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import './App.css'
import Post from './pages/Post/Post.jsx'
import Search from './pages/Search/Search.jsx'
import { useAuthentication } from "./hooks/useAuthentication.jsx";
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import CreatePost from './pages/CreatePost/CreatePost.jsx'
import About from './pages/About/About.jsx' 

function App() {
  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
       setUser(user)
    })
   
  }, [auth])

  if (loadingUser) {
    return (
      <div className="loadingGif">
        <img src="Gif-loading.gif" alt="Carregando..."/>
      </div>
    )
  }

  
  return (
    <>  
      <div>
        <AuthProvider value={{user}}>
          <BrowserRouter>
          <Navbar />    
          <div className="container">
            <Routes>
              <Route path="/"
                element={<Home />} />
              
              <Route path="/about"
              element={<About />} />

              <Route path='/post/create'
                element={user ? <CreatePost /> :<Navigate tp="/login"/>} 
              />

              <Route path='/post/id'
                element={user ? <CreatePost /> :<Navigate tp="/login"/>} 
              />

              <Route path='/post/:id'
                element={user ? <Post /> :<Navigate tp="/login"/>} 
              />

              <Route path='/search'
                element={user ? <Search /> :<Navigate tp="/login"/>} 
              />

              <Route path='/login'
                element={user ? <Login /> :<Navigate tp="/"/>} 
              />

              <Route path='/register'
                element={user ? <Register /> :<Navigate tp="/"/>} 
              />

              <Route path='/dashboard'
                element={user ? <Dashboard /> :<Navigate tp="/login"/>} 
              />


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
