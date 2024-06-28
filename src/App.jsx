import Header from "./header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

function App() {
  
  useEffect(() => {
    window.addEventListener("beforeunload", (ev) => 
      {  
          ev.preventDefault();
          ev.returnValue = 'Are you sure you want to close?';
      });

    return () => {}
  }, []) 

  return (
    <>
        <Header/>
        <Outlet />
        <Footer/>
    </>
  )
}

export default App
