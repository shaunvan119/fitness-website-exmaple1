
import Main from "./containers/Main/Main";
import CheckDates from "./containers/checkdates/CheckDates";
import { Routes, Route } from "react-router-dom";
import ContactForm from "./components/ContactFrom";



function App() {
  return (
    <div className="App">
    
    <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route path="/CheckDates" element={<CheckDates />} />
        <Route path="/contactUs" element={<ContactForm/>}/>
      </Routes>
    </div>



  );
}

export default App;
