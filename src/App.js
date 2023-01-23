import Navbar from './Navbar';
import Home from  './Home';

//Ser ut som HTML men det är JSX
function App() {

const title = "Welcome to the internet"

  return (
    <div className="App">
      <Navbar />
      <div className="content">
       <Home/>
      </div>
    </div>
  );
}

export default App;
