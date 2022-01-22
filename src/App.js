import './App.css';
import Provider from "./components/Provider";
import Calculator from "./components/Calculator";

function App() {
  return (
    <Provider>
      <div className={'App'}>
        <Calculator />
      </div>
    </Provider>
  );
}

export default App;
