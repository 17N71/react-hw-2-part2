import React from 'react';
import Header from "./Components/Header/Header.jsx";
import { Route, Routes} from "react-router-dom";
import First from "./Components/First/First.jsx";

function App() {

  return (
      <>
        <Header />
        <Routes>
            <Route path='/' element={<First />}></Route>
        </Routes>
      </>
          )
}

export default App
