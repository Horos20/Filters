import React, { useState } from 'react'
import Criteria from './Criteria'

export default function Filter() {
  const [criterias, setCriterias] = useState([]);

  const addNewCriteria = (event) => {
    setCriterias(criterias.concat(<Criteria key={criterias.length} />));
    console.log(criterias)
  };

  return (
    <div className='filter'>
        <div className='filterHeader'>
            <span>Filter</span>
            <button>x</button>
        </div>
        <div className='filterContent'>
          <form id='form'>
            <div className='row1'>
              <label htmlFor='filterName'>Filter name</label>
              <input name="filterName" type="text"/>
            </div>
            
            {/* Criteria component */}
            {criterias}

            <button type='button' onClick={addNewCriteria}>+ ADD ROW</button>
            <div className='row3'>
              <label htmlFor="selection">Selection</label>
              <input type="radio" value="Select1"/> Select 1
              <input type="radio" value="Select2"/> Select 2
              <input type="radio" value="Select3"/> Select 3
            </div>
          </form>
        </div>
        <div className='filterFooter'>
            <button>CLOSE</button>
            <button form='form'>SAVE</button>
        </div>
    </div>
  )
}
