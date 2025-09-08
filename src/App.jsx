import React from 'react'
import { ToastContainer , Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonails from './components/Testimonails'
import Contact from './components/Contact'
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
        theme="light"
        transition={Bounce}/>
      <Header />
      <About/>
      <Projects />
      <Testimonails />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
