import logo from './logo.svg';
import './App.css';
import SimpsonComponents from "./components/SimpsonComponents";

function App() {
  return (
    <div className="wrap">
      <SimpsonComponents itemName={'bart'}/>
      <SimpsonComponents itemName={'homer'}/>
    </div>
  );
}

export default App;
