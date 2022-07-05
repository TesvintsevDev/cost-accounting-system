import React, { useState } from "react";
import "./CostForm.css";

const CostForm = () => {
    const [inputName, setInputName] = useState("");
    const [inputAmount, setInputAmount] = useState("");
    const [inputDate, setInputDate] = useState("");


    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            name: inputName,
            amount: inputAmount,
            date: new Date(inputDate),
        };

        console.log(costData);
        setInputName("");
        setInputAmount("");
        setInputDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input type="text" value={inputName} onChange={nameChangeHandler} />
                </div>
                <div className="new-cost__control">
                    <label>Сумма</label>
                    <input
                        value={inputAmount}
                        onChange={amountChangeHandler}
                        type="number"
                        min="0.01"
                        step="0.01"
                    />
                </div>
                <div className="new-cost__control">
                    <label>Дата</label>
                    <input
                        value={inputDate}
                        onChange={dateChangeHandler}
                        type="date"
                        min="2019-01-01"
                        step="2022-12-31"
                    />
                </div>
                <div className="new-cost__actions">
                    <button type="submit">Добавить Расход</button>
                </div>
            </div>
        </form>
    );
};

export default CostForm;