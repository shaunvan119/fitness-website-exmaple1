import React from "react";
import Clock from "./Clock";

const App = () => {
  let deadline = "January, 10, 2030";

  return (
    <div className="App">
      <Clock deadline={deadline} />
    </div>
  );
};

export default App;