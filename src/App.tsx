import { BrowserRouter ,Routes,Route} from 'react-router-dom'

import './App.css'
import { Suspense ,lazy } from 'react'

const HomePage=lazy(()=>import("./pages/HomePage"))

function App() {
 

  return (
    <>
        <div>
          <BrowserRouter>
          <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            </Routes>
            </Suspense>
          </BrowserRouter>
          
        </div>
    </>
  )
}

export default App
