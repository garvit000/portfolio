import Navbar from './Components/navbar'
import Footer from './Components/footer'
import Main from './Components/main'
import Projects from './Components/projects'
import About from "./Components/about"
import Skills from './Components/skills'
import { Analytics } from "@vercel/analytics/react"
import './App.css'

function App() {

  return (
    <>
      <Analytics />
      <Navbar/>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default App
