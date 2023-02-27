import React, { useState } from "react";
import Table from "./Table";
import Form from "./Form";
import Calculation from "./Calculation";

function App() {

  const [currency, setCurrency] = useState("USD");
  const onSelectChange = ({ target }) => {
    setCurrency(target.value);
  };

  const [amount, setAmount] = useState(1);
  const onAmountChange = ({ target }) => {
    setAmount(target.value);
  };

  const [selectedOption, setSelectedOption] = useState("buying");
  const [calculation, setCalculation] = useState("N/A");

  const getCalculate = (selectedOption, currency, amount) => {

    if (selectedOption === 'buying') {
      switch (currency) {
        case "USD":
          setCalculation((amount * 4.84).toFixed(2));
          break;
        case "EUR":
          setCalculation((amount * 4.78).toFixed(2));
          break;
        case "CHF":
          setCalculation((amount * 4.84).toFixed(2));
          break;
        case "GBP":
          setCalculation((amount * 5.47).toFixed(2));
          break;
        default:
          setCalculation("N/A");
          break;
      }
    }

    else if (selectedOption === 'selling') {
      switch (currency) {
        case "USD":
          setCalculation((amount * 4.75).toFixed(2));
          break;
        case "EUR":
          setCalculation((amount * 4.63).toFixed(2));
          break;
        case "CHF":
          setCalculation((amount * 4.77).toFixed(2));
          break;
        case "GBP":
          setCalculation((amount * 5.35).toFixed(2));
          break;
        default:
          setCalculation("N/A");
          break;
      }
    };
  }


  return (
    <div className="container">
      <header>
        <h1>KANTOR</h1>
      </header>
      <main>
        <div className="main__tableContainer">
          <Table />
          <div>
            <Form
              calculation={calculation}
              currency={currency}
              amount={amount}
              onSelectChange={onSelectChange}
              onAmountChange={onAmountChange}
              getCalculate={getCalculate}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
            <Calculation
              calculation={calculation}
              currency={currency}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;