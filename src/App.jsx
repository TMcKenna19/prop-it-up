import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
      fullName={"Rick Sanchez"}
      age={80}
      hairColor={"Grey"}
      />
      <PersonCard
      fullName={"Bird Person"}
      age={45}
      hairColor={"Brown"}
      />
      <PersonCard
      fullName={"Morty Smith"}
      age={13}
      hairColor={"Brown"}
      />
      <PersonCard
      fullName={"Jerry Smith"}
      age={43}
      hairColor={"Brown"}
      />
    </div>
  );
}

export default App;
