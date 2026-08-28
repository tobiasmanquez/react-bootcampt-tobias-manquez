import Theme from "./Class10-Ex2/Tema";
import { ThemeProvider } from "./Class10-Ex2/TemaContext";

function App() {

  return (
    <div>
      
      <ThemeProvider>
        <Theme/>
      </ThemeProvider>

    </div>

  )
}
export default App;