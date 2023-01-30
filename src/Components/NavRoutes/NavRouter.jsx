
import {Route} from "react-router-dom";
import Main from "./Main";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import ContactMe from "../ContactMe/ContactMe";
import { Routes } from "react-router-dom";
export default function NavRouter(){
  return (
    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/skills' element={<Skills/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/contact-me' element={<ContactMe/>}></Route>
    </Routes>
  )
}
