
import {ContadorProvider} from "./Class10/Context";
import CountContext from "./Class10/CountContext"

function App() {

  return (
    <div>
      
      <ContadorProvider>
        <CountContext />
      </ContadorProvider>

    </div>

  )
}
export default App;