import Count from "./Class3/Count"
import ButtonILke from "./Class3/ButtonILike"
import TrafficLight from "./Class4/TrafficLight"
import StockAlert from "./Class4/StockAlert";
import ListOfNames from "./Class5/ListOfNames";
import RemoveNames from "./Class5/RemoveNames"
import SubscriptionForm from "./Class6/SubscriptionForm"
import CountClicks from "./Class8/CountClicks";
import CountDown from "./Class8/CountDown";
import CountWhitMemory from "./Class9/CountWhitMemory"
import Theme from "./Class10-Ex2/Tema";
import { ThemeProvider } from "./Class10-Ex2/TemaContext";

function App() {

  return (
    <div>
      <Count />
      <ButtonILke />
      <TrafficLight />
      <StockAlert />
      <ListOfNames />
      <RemoveNames />
      <SubscriptionForm />
      <CountClicks />
      <CountDown InitialSeconds={5} /> {/* Nota:Refrescar pagina para probar este exercise*/}
      <TrafficLight />
      <StockAlert />
      <ListOfNames />
      <RemoveNames />
      <CountWhitMemory InitialSeconds={10} />

      {/* useContext */}
      <ThemeProvider>
        <Theme/>
      </ThemeProvider>

    </div>


  )
}
export default App;

