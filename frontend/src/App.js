import logo from './logo.svg';
import './App.css';
import MoivesList from './Component/MoivesList';
function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>Movies List</h1>
      <div className='movieDiv'>
      <MoivesList />
      </div>
    </div>
  );
}

export default App;
