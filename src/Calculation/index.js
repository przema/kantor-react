import "./style.css";

const Calculation = ({ calculation, currency }) => (
    <p className="calculation">
        Całkowita wartość: <strong>{calculation}</strong><strong><span
            className="currencyName"> {currency}</span></strong>
    </p>
)

export default Calculation;