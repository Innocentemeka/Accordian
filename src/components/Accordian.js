import React, { useState } from "react";
import data from "./Data";
import "./style.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [eneblMuitiSelection, setEneblMuitiSelection] = useState(false);
  const [muitiple, setMuitiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMuitiSelection(getCurrentId) {
    let temp = [...muitiple];
    const findIdexOfCurrentId = temp.indexOf(getCurrentId);

    console.log(findIdexOfCurrentId);
    if (findIdexOfCurrentId === -1) {
      temp.push(getCurrentId);
    } else {
      temp.splice(findIdexOfCurrentId, 1);
    }

    setMuitiple(temp);
  }

  console.log(selected);
  return (
    <div className="wrapper">
      <button onClick={() => setEneblMuitiSelection(!eneblMuitiSelection)}>
        Eneble muiti selection
      </button>
      <div className="accordian">
        {data.map((dataItem) => {
          return (
            <div
              className="item"
              onClick={() =>
                eneblMuitiSelection
                  ? handleMuitiSelection(dataItem.id)
                  : handleSingleSelection(dataItem.id)
              }
            >
              <div className="title">
                <h1>{dataItem.question}</h1>
                <span>+</span>
              </div>
              {eneblMuitiSelection
                ? muitiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordian;
