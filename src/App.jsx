import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signin from "./pages/Signin"
import SingUp from "./pages/SingUp"
import About from "./pages/About"
import Profile from "./pages/About"

export default function App() {
 
  return <BrowserRouter>
    <Routes>
      <Route path="/"        element={<Home/>}> </Route>
      <Route path="/sign-in" element={<Signin/>}> </Route>
      <Route path="/sing-up" element={<SingUp/>}> </Route>
      <Route path="/about"   element={<About/>}> </Route>
      <Route path="/profile"   element={<Profile/>}> </Route>
    </Routes>
  </BrowserRouter>
}
