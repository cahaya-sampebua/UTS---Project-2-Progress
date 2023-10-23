import Akuns from "./components/Account";
import Navigasi from "./components/Navigation";


function App() {
  
  const body = document.querySelector('body');
  body.style.backgroundColor= '#35383A';
  return (
    <div className="App">
      <Navigasi></Navigasi>
      <Akuns></Akuns>
    </div>
  );
}

export default App;
