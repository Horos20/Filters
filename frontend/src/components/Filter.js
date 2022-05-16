import React, { useState } from 'react'
import Criteria from './Criteria'

export default function Filter( {setShowFilter} ) {
  const [count, setCount] = useState(0)
  const [criterias, setCriterias] = useState([{id: 0}]);

  function addNewCriteria() {
    setCount(count + 1)
    setCriterias([...criterias, {id: count + 1}]);
  };

  function removeCriteria(id) {
    setCriterias(criterias.filter(element => element.id !== id));
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
            <div className='allCriterias'>
              {criterias.map((criterias) => (
                <Criteria key={criterias.id} id={criterias.id} removeCriteria={removeCriteria} />
              ))}
            </div>
            
            <div className='addNew'>
              <button type='button' className='buttonGray' onClick={addNewCriteria}>+ ADD ROW</button>
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
            <button onClick={() => setShowFilter(false)} className='close buttonGray'>CLOSE</button>
            <button className='save buttonGray' form='form'>SAVE</button>
        </div>
    </div>
  )
}
