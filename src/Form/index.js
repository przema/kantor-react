import "./style.css";

const Form = ({ buying, onBuyingChange, currency, onSelectChange, amount, onAmountChange, getCalculate }) => {

    const onFormSubmit = (event) => {
        event.preventDefault();
        // getCalculate(buying, currency, amount);
    };

    return (

        <form
            className="form"
            onSubmit={onFormSubmit}
        >
            <fieldset className="form__fieldset">
                <legend className="form__legend">Przelicznik walut</legend>
                <span className="form__labelText">
                    Wybierz opcję:</span>
                <ul className="form__list">
                    <li className="form__listItem">
                        <label>
                            <input
                                type="radio"
                                name="choice"
                                checked={buying}
                                onChange={onBuyingChange}
                            />
                            <span className="form__labelText">kupuję</span>
                        </label>
                    </li>
                    <li className="form__listItem">
                        <label>
                            <input
                                type="radio"
                                name="choice"
                            />
                            <span className="form__labelText">sprzedaję</span>
                        </label>
                    </li>
                </ul>
                <label><span className="form__labelText">Wybierz walutę:</span></label>
                <select
                    className="form__field"
                    name="currencyToBuy"
                    defaultValue={currency}
                    onChange={onSelectChange}
                >
                    <option value="USD">USD dolar amerykański</option>
                    <option value="EUR">EUR euro</option>
                    <option value="CHF">CHF frank szwajcarski</option>
                    <option value="GBP">GBP funt brytyjski</option>
                </select>
                <p>
                    <label>
                        <span className="form__labelText">Podaj kwotę:</span>
                        <input
                            required
                            className="form__field--sum"
                            name="sum"
                            type="number"
                            min="1"
                            step="any"
                            defaultValue={amount}
                            onChange={onAmountChange}
                        />
                    </label>
                </p>
            </fieldset>
            <p>
                <button
                    className="form__button"
                    onClick={() => getCalculate(buying, currency, amount)}
                >
                    Przelicz
                </button>
            </p>
        </form>
    )
};

export default Form;