import React, { useState } from 'react'

export default function Criteria() {

  const [selectedCriteria, setSelectedCriteria] = useState("Amount");

  const changeSelectedCriteria = (event) => {
    setSelectedCriteria(event.target.value);
  };

  const amountCondition = ["More", "Less", "Equal"];
  const titleCondition = ["Starts with", "Ends with", "Equal"];
  const dateCondition = ["From", "To"];

  let type = null;
  let options = null;
  let options2 = null;

  if (selectedCriteria === "Amount") {
    type = amountCondition;
    options2 = <input type="number"/>
  } else if (selectedCriteria === "Title") {
    type = titleCondition;
    options2 = <input type="text"/>
  } else if (selectedCriteria === "Date") {
    type = dateCondition;
    options2 = <input type="date"/>
  }

  options = type.map((el) => <option key={el}>{el}</option>);

  return (
    <div className='row2'>
        <label htmlFor="criteria">Criteria</label>
        <select name="criteria" id="criteria" onChange={changeSelectedCriteria}>
            <option value="Amount">Amount</option>
            <option value="Title">Title</option>
            <option value="Date">Date</option>
        </select>
        <select id="condition1">
            {options}
        </select>
        {options2}
        <button>-</button>
    </div>
  )
}
