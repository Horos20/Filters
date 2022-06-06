import React, { useState } from 'react'
import Criteria from './Criteria'

export default function Filter( {setShowFilter, setData, data} ) {
  const [count, setCount] = useState(0)
  const [criterias, setCriterias] = useState([{id: 0}]);

  function addNewCriteria() {
    setCount(count + 1)
    setCriterias([...criterias, {id: count + 1}]);
  };

  function removeCriteria(id) {
    setCriterias(criterias.filter(element => element.id !== id));
  };

  function fetchData(e) {
    e.preventDefault();
    if (criterias.length !== 0) {
      const {filterName, criteria, condition1, condition2, select} = e.target.elements
      const allCriterias = []
      const allCondition1 = []
      const allCondition2 = []
      for (let i = 0; i < criterias.length; i++) {
        if (criterias.length === 1) {
          allCriterias.push(criteria.value)
          allCondition1.push(condition1.value)
          allCondition2.push(condition2.value) 
        } else { 
          allCriterias.push(criteria[i].value)
          allCondition1.push(condition1[i].value)
          allCondition2.push(condition2[i].value)
        }
      }
      fetch('http://localhost:3001', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          filterName: filterName.value,
          criteria: allCriterias,
          condition1: allCondition1,
          condition2: allCondition2,
          select: select.value
        })
        }).then(res => {
          return res.json()
        }).then(element => setData([...data, element]))
      }
    }

  return (
    <div className='filter'>
        <div className='filterHeader'>
            <span>Filter</span>
            <button onClick={() => setShowFilter(false)}>x</button>
        </div>
        <div className='filterContent'>
          <form id='form' onSubmit={fetchData}>
            <div className='filterName'><span>Filter name</span></div>
            <div className='filterNameInput'><input name="filterName" type="text" maxLength='20'/></div>

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
              <input type="radio" value="Select1" name='select' defaultChecked={true}/> Select 1
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
