import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import "./App.css"

import Class3Page from "./Pages/Class3"
import Class4Page from "./Pages/Class4"
import Class5Page from "./Pages/Class5"
import Class6Page from "./Pages/Class6"
import Class8Page from "./Pages/Class8"
import Class9Page from "./Pages/Class9"
import Class10Page from "./Pages/Class10"
import { ContadorProvider } from "./Class10/CountContext"
import Class10Ex2Page from "./Pages/Class10-2"
import { ThemeProvider } from "./Class10-Ex2/ThemeContext"
import Class11Page from "./Class11/CountZustand";
import Class11Ex2Page from "./Class11-Ex2/FormZustand";
import Class12Page from "./Pages/Class12";



function App() {

  return (
    <BrowserRouter>
      <ContadorProvider>
        <ThemeProvider>

          <nav style={{ backgroundColor: "white", borderRadius: '10px', color: 'black', textDecoration: 'none', marginBottom: '20px' }}>
            <Link to={'/Class3/Count/ButtonIlike'} style={{ margin: '20px' }}>Class 3</Link>
            <Link to={'/Class4/StockAlert/TrafficLight'} style={{ margin: '20px' }}>Class 4</Link>
            <Link to={'/Class5/ListOfNames/RemoveNames'} style={{ margin: '20px' }}>Class 5</Link>
            <Link to={'/Class6/SubscriptionForms'} style={{ margin: '20px' }}>Class 6</Link>
            <Link to={'/Class8/CountClicks/CountDown'} style={{ margin: '20px' }}>Class 8</Link>
            <Link to={'/Class9/CountWhitMemory'} style={{ margin: '20px' }}>Class 9</Link>
            <Link to={'/Class10/CountContext'} style={{ margin: '20px' }}>Class 10</Link>
            <Link to={'/Class10-2/ThemeContext'} style={{ margin: '20px' }}>Class 10-2</Link>
            <Link to={'/Class11/CountZustand'} style={{ margin: '20px' }}>Class 11</Link>
            <Link to={'/Class11-Ex2/FormZustand'} style={{ margin: '20px' }}>Class 11-2</Link>
            <Link to={'/Class12/InfoCard/Counter'} style={{ margin: '20px' }}>Class 12</Link>

          </nav>
         
          
          <Routes>
            <Route path="/" element={<div style={{ height: 200, width: 200, backgroundColor: 'red' }} />} />
            <Route path="/Class3/Count/ButtonIlike" element={<Class3Page />} />
            <Route path="/Class4/StockAlert/TrafficLight" element={<Class4Page />} />
            <Route path="/Class5/ListOfNames/RemoveNames" element={<Class5Page />} />
            <Route path="/Class6/SubscriptionForms" element={<Class6Page />} />
            <Route path="/Class8/CountClicks/CountDown" element={<Class8Page />} />
            <Route path="/Class9/CountWhitMemory" element={<Class9Page />} />
            <Route path="/Class10/CountContext" element={<Class10Page />} />
            <Route path="/Class10-2/ThemeContext" element={<Class10Ex2Page />} />
            <Route path="/Class11/CountZustand" element={<Class11Page />} />
            <Route path="/Class11-Ex2/FormZustand" element={<Class11Ex2Page />} />
            <Route path="/Class12/InfoCard/Counter" element={<Class12Page />} />
          </Routes>
        </ThemeProvider>
      </ContadorProvider>
    </BrowserRouter>

  )
}
export default App