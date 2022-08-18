
import Main from "./containers/Main/Main";
import CheckDates from "./containers/checkdates/CheckDates";
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
    
    <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route path="/CheckDates" element={<CheckDates />} />
      </Routes>
    </div>



  );
}

export default App;
