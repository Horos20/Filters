import React, { useState } from 'react'
import Criteria from './Criteria'

export default function Filter( {setShowFilter} ) {
  const [criterias, setCriterias] = useState([]);

  const addNewCriteria = (event) => {
    setCriterias(criterias.concat(<Criteria key={criterias.length} id={criterias.length} removeCriteria={removeCriteria} />));
  };

  function removeCriteria(id) {
    criterias.map((d, i) => {
      if (d === criterias[id-1]) {
        setCriterias(criterias.slice(i))
      }
      console.log(criterias[id-1])
      console.log(d)
      return (null)
    })
  }

  return (
    <div className='filter'>
        <div className='filterHeader'>
            <span>Filter</span>
            <button onClick={() => setShowFilter(false)}>x</button>
        </div>
        <div className='filterContent'>
          <form id='form'>
            <div className='filterName'><span>Filter name</span></div>
            <div className='filterNameInput'><input name="filterName" type="text"/></div>

            <div className='criteriaName'><span>Criteria</span></div>
            
            {/* Criteria component */}
            <div className='allCriterias'><Criteria key={criterias.length} id={criterias.length} removeCriteria={removeCriteria} />{criterias}</div>
            
            <div className='addNew'>
              <button type='button' onClick={addNewCriteria}>+ ADD ROW</button>
            </div>

            <div className='selectionName'><span>Selection</span></div>
            <div className='selections'>
              <input type="radio" value="Select1" name='select'/> Select 1
              <input type="radio" value="Select2" name='select'/> Select 2
              <input type="radio" value="Select3" name='select'/> Select 3
            </div>
          </form>
        </div>
        <div className='filterFooter'>
            <button onClick={() => setShowFilter(false)} className='close'>CLOSE</button>
            <button className='save' form='form'>SAVE</button>
        </div>
    </div>
  )
}
