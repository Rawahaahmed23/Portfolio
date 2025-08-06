import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Navbar from "./component/Navbar";



import Error from "./pages/Error";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar /><Home /></>} />
      
     
      

  
        <Route path="*"element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
