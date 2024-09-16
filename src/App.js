import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [items, setItems] = useState([]);

  const addNewItem = () => {
    if (!description || !date || !amount) {
      alert("Please fill the all fields");
      return;
    }

    const newItem = () => {
      id: Date.now(), description, date, amount;
    };
    setDescription(""), setAmount(""), setItems([...items, newItem]);
  };

  return (
    <div className="App">
      <h1>Daily EXPENSES</h1>
      <form>
        <div>
          <label htmlFor="description">Description : </label>
          <input
            type="text"
            id="description"
            placeholder="Enter description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Amount">Amount:</label>
          <input
            type="text"
            id="Amount"
            placeholder="Amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            id="date"
            placeholder="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        {items.map((each) => {
          <div>
            <p>{each.description}</p>
            <p>{each.Amount}</p>
            <p>{each.date}</p>
          </div>;
        })}

        <button onClick={addNewItem}>Submit</button>
      </form>
    </div>
  );
}
