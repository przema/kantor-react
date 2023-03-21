import React, { useState, useEffect } from "react";
import "./style.css";

function CurrentDate() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="dateContainer">
            <p>
                Dzisiaj jest {date.toLocaleString("pl", { weekday: "long", day: "numeric", month: "long", year: "numeric" })},
            </p>
            <p className="dateContainer__time">
                 {date.toLocaleTimeString()}
            </p>
        </div>
    );
}

export default CurrentDate;
