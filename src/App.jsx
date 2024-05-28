import "./App.css";
import Hello from "./components/1.1_myFirstReactComponent/01_FunctionComponent";
import Greeting from "./components/1.1_myFirstReactComponent/02_FunctionalComponent";
import Welcome from "./components/1.1_myFirstReactComponent/03_ClassComponent"

function App() {
  return (
    <div>
      <h1>Hello Hi!</h1>
      <Hello name="world" />
      <Greeting name="mate" />
      <Welcome name="boy" />
    </div>
  );
}

export default App;
