import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Blogs } from "./pages/Blogs";
import { Resume } from "./pages/Resume";
import { Home } from "./pages/Home";
import CustomCursor from "./components/ui/CustomCursor";
function App() {
  return (
    <BrowserRouter>
       <div className='bg-[#0B1121] min-h-screen'>
       <CustomCursor />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/blogs" element={<Blogs />}/>
          <Route path="/resume" element={<Resume />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
