import { BrowserRouter,Routes,Route } from "react-router-dom"
import NavSection from "./components/Navsection"
import Home from "./pages/Home"
import About from "./pages/About"
import Project from "./pages/Projects"
import Contacts from "./pages/Contact"
import { useEffect } from "react"
import { uploadPortfolio } from "./upload"

function App() {
  

  return (
    <BrowserRouter>
    <div className="bg-[#121e28] h-full min-h-screen   ">
        <NavSection />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contacts/>}/>
        </Routes>
      </div>
      </BrowserRouter>
  )
}

export default App
