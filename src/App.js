import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Footer from './components/footer/Footer';
import Resume from './components/resume/Resume';
import Skill from './components/skill/Skill';
import Skills from './components/skill/Skills';

function App() {
  return (
      // <div className="App">
      //   <Header></Header>
      //   <Profile></Profile>
      //   <Footer></Footer>
      // </div>

      // <Router>
      <div className="App">
         

          <Header />
         <Routes>
           <Route path="/" element={<Profile />} />
           <Route path="/resume" element={<Resume />} />
           {/* <Route path="/skill" element={<Skill />} /> */}
           {/* <Route path="/projects" element={<Projects />} /> */}
           {/* <Route path="/contact" element={<Contact />} /> */}
         </Routes>

         <Footer />
       </div>
      // </Router>


  );
}

export default App;
