import {useState} from "react"

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Prompt from "./components/Prompt";

const App = () => {
  const [page, setPage] = useState<string>("home");

  return (
    <>
      <Navbar page={page} setPage={setPage} />
      {
        page === "home" && <Home setPage={setPage} />
      }
      {
        page === "prompt" && <Prompt />
      }
    </>
  )
}

export default App
