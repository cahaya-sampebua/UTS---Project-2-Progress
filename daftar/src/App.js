import Registerform from "./components/Register";


function App() {
  
  const body = document.querySelector('body');
  body.style.backgroundColor= '#43535F';
  
  return (
    <div className="App">
      <Registerform></Registerform>
    </div>
  );
}

export default App;
