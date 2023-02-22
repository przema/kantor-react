import React, { useState } from "react";
import Table from "./Table";
import Form from "./Form";
import Calculation from "./Calculation";

function App() {
  
  const [buying, setBuying] = useState(true);
  const onBuyingChange = ({target}) => {
    setBuying(target.checked);
  }

  const [currency, setCurrency] = useState("USD");
  const onSelectChange = ({selection}) => {
    setCurrency(selection.value);
  }


  

  return (
    <div className="container">
      <header>
        <h1>DUSIGROSZ</h1>
        <h2>TWÓJ KANTOR</h2>
      </header>
      <main>
        <div className="main__tableContainer">
          <Table />
          <div>
            <Form 
            setBuying={setBuying}
            setCurrency={setCurrency}
            />
            <Calculation />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
