import { Route,  Routes } from "react-router-dom"
import { Header } from "./Components/Header"
import { Home } from "./Pages/Home"
import { About } from "./Pages/About"
import { Contact } from "./Pages/Contact"
import { Cart } from "./Pages/Cart"

const App = () => {
  return (
  <div className="max-w-[1110px] mx-auto">
     <Header />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
     </Routes>
  </div>
   
  )
}

export default App