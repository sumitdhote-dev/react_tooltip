import './App.css';
import Select from './coponents/Selector';
import Hover from './coponents/Hover';
import ButtonContext from './ButtonContext';

function App() {
  return (
    <div className="App">
     <ButtonContext>
     <Select/>
      <Hover/>
     </ButtonContext>
    </div>
  );
}

export default App;
