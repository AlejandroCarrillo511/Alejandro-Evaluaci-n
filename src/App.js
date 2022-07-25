import React, {useEffect, useState} from "react";
import { Routes, Route, Link} from "react-router-dom"
import Valorant from "./Components/Valorant";

const App = () => {

  return(
    <Routes>
      <Route path="/" element={<Valorant/>} />
      
    </Routes>
  )
}

export default App