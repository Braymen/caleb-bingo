import { useEffect, useState } from "react";
import "./App.css";

const CALEB = ["C", "A", "L", "E", "B"];

const prompts = [
  "Food Delivery Charge",
  "Amazon Charge",
  "Uber Charge",
  "McDonalds Charge",
  "Starbucks Charge",
  "Venmo Charge",
  "Overdraft Fees",
  "Late/Missing Payment",
  "Payday Loan",
  "Affirm (or similar) Pay",
  "Car Debt",
  "Maxed Credit Card",
  "Dave Ramsey",
  "No Retirement Savings",
  "No Emergency Fund",
  "'Taquitos'",
  "Owes Family/Friend Money",
  "+20K in Debt",
  "Student Loans",
  "Production Laughs",
  "Expensive Trip Planned",
  "Death Rent/Mortgage",
  "Bankruptcy Mentioned",
  "In Collections",
  "Caleb Throws Something",
  "Caleb Crumbles Paper",
  "Caleb High Pitch Voice",
  "Gooning Mentioned",
  "'Fuck You'",
  "'Fuck Me'",
  "'I Don't Care'",
  "'Not a credit card person'",
  "'Stop acting like a child'",
  "'Move your mic'",
  "'Stop hitting your mic'",
];

function App() {
  const [table, setTable] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    generate();
  }, []);

  const shuffleArray = (arr) => {
    for (var i = arr.length - 1; i >= 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };

  const generate = () => {
    const options = shuffleArray(prompts);
    const newTable = [];
    for (let i = 0; i < 6; i++) {
      const row = [];
      for (let j = 0; j < 5; j++) {
        row.push(options[i * 5 + j]);
      }
      newTable.push(row);
    }
    setTable(newTable);
    setSelected([]);
  };

  return (
    <>
      <div>
        <h1>Financial Audit Bingo</h1>
        {table.map((tableRow, i) => (
          <div key={i} className="row">
            {tableRow.map((rowItem, j) =>
              i === 0 ? (
                // eslint-disable-next-line react/jsx-key
                <h1
                  style={{
                    display: "inline-block",
                    width: "128px",
                    borderRadius: "10px",
                    margin: "10px",
                    padding: "8px",
                    color: "#88ff64",
                  }}
                >
                  {CALEB[j]}
                </h1>
              ) : (
                <div
                  key={j}
                  className="cell"
                  style={{
                    display: "inline-block",
                    width: "128px",
                    height: "128px",
                    backgroundColor: selected.includes(rowItem)
                      ? "lightgreen"
                      : "rgba(255,255,255,0.05)",
                    borderRadius: "10px",
                    margin: "10px",
                    overflow: "hidden",
                    padding: "4px",
                  }}
                  onClick={() =>
                    selected.includes(rowItem)
                      ? setSelected(selected.filter((item) => item !== rowItem))
                      : setSelected([...selected, rowItem])
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: "100%",
                      textAlign: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      color: selected.includes(rowItem)
                        ? "black"
                        : rowItem.includes("'")
                        ? "pink"
                        : rowItem.includes("Caleb")
                        ? "lightblue"
                        : rowItem.includes("Charge")
                        ? "lightgreen"
                        : "white",
                    }}
                  >
                    <center>{rowItem}</center>
                  </div>
                </div>
              )
            )}
          </div>
        ))}
        <button onClick={generate}>Generate Bingo Card</button>
      </div>
    </>
  );
}

export default App;
