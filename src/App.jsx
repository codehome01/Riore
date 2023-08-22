import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Courses from './pages/Courses.jsx'
import CommunityLearning from './pages/CommunityLearning.jsx'
import Login from './pages/UserLogin.jsx'
import Register from './pages/Register.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/header.jsx'
import './App.css'


function App() {
  return (
        <>
        <div className='container'>
        
          <BrowserRouter>
          <Header />
             <Routes>
                 <Route path='/' element={<Home />} />
                 <Route path='/Courses' element={<Courses />} />
                 <Route path="/CommunityLearning" element={<CommunityLearning />} />
                 <Route path='/UserLogin' element={<Login />} />
                 <Route path='/Register' element={<Register />} />
             </Routes>
          </BrowserRouter>

         
          <div className='footerStyle'>
             <Footer />
          </div>
        </div>
        </>
       )
}

export default App
