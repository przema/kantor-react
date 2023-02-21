import Table from "./Table";
import Form from "./Form";
import Calculation from "./Calculation";

function App() {
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
            <Form />
            <Calculation />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
