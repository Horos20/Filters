import React, { useState } from 'react'

export default function Criteria( { removeCriteria, id} ) {

  const [selectedCriteria, setSelectedCriteria] = useState("Amount");

  const changeSelectedCriteria = (event) => {
    setSelectedCriteria(event.target.value);
  };

  const maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
     object.target.value = object.target.value.slice(0, object.target.maxLength)
      }
    }

  const amountCondition = ["More", "Less", "Equal"];
  const titleCondition = ["Starts with", "Ends with", "Equal"];
  const dateCondition = ["From", "To"];

  let type = null;
  let options = null;
  let options2 = null;

  if (selectedCriteria === "Amount") {
    type = amountCondition;
    options2 = <input name='condition2' type="number" maxLength = "9" onInput={maxLengthCheck}/>
  } else if (selectedCriteria === "Title") {
    type = titleCondition;
    options2 = <input name='condition2' type="text" maxLength='20'/>
  } else if (selectedCriteria === "Date") {
    type = dateCondition;
    options2 = <input name='condition2' type="date"/>
  }

  options = type.map((el) => <option value={el} key={el}>{el}</option>);

  return (
      <div className='criteria'>
        <select name="criteria" id="criteria" onChange={changeSelectedCriteria}>
          <option value="Amount">Amount</option>
          <option value="Title">Title</option>
          <option value="Date">Date</option>
        </select>
        <select name='condition1' id="condition1">
          {options}
        </select>
        {options2}
        <button type='button' onClick={() => removeCriteria(id)}>-</button>
      </div>
  )
}
