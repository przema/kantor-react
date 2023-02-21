import "./style.css";

const Table = () => (
    <table className="table">
        <caption className="table__caption">Aktualne kursy wymiany walut</caption>
        <tbody>
            <tr className="table__row">
                <th className="table__cell table__header" scope="col">Waluta</th>
                <th className="table__cell table__header" scope="col">Sprzedaż</th>
                <th className="table__cell table__header" scope="col">Kupno</th>
            </tr>
            <tr className="table__row">
                <th className="table__cell table__header" scope="row">USD</th>
                <td className="table__cell">4,84</td>
                <td className="table__cell">4,75</td>
            </tr>
            <tr className="table__row">
                <th className="table__cell table__header" scope="row">EUR</th>
                <td className="table__cell">4,78</td>
                <td className="table__cell">4,63</td>
            </tr>
            <tr className="table__row">
                <th className="table__cell table__header" scope="row">CHF</th>
                <td className="table__cell">4,84</td>
                <td className="table__cell">4,77</td>
            </tr>
            <tr className="table__row">
                <th className="table__cell table__header" scope="row">GBP</th>
                <td className="table__cell">5,47</td>
                <td className="table__cell">5,35</td>
            </tr>
        </tbody>
    </table>
)

export default Table;