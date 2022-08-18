import React from "react";
import Clock from "./Clock";

const App = () => {
  let deadline = "November, 1, 2022";

  return (
    <div className="App">
      <Clock deadline={deadline} />
    </div>
  );
};

export default App;