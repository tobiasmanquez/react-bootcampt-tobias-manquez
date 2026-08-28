import Count from "./Class3/Exercise1-Count/Count"
import ButtonILke from "./Class3/Exercise2-I like/ButtonILike"
import TrafficLight from "./Class4/TrafficLight"
import StockAlert from "./Class4/StockAlert";
import ListOfNames from "./Class5/ListOfNames";
import RemoveNames from "./Class5/RemoveNames"
import CountWhitMemory from "./Class9/CountWhitMemory"

function App() {

  return (
    <div>
      <Count />
      <ButtonILke />
      <TrafficLight/>
      <StockAlert/>
      <ListOfNames/>
      <RemoveNames/>
      <CountWhitMemory InitialSeconds={10}/>
    </div>

  )
}
export default App;