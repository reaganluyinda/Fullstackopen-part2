import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      Find countries <input value={value} onChange={handleChange} />
    </div>
  );
};

export default App;
