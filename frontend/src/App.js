import { useState, useEffect } from 'react';
import './App.css';
import Filter from './components/Filter'

function App() {
  const [showFilter, setShowFilter] = useState(false);
  const [data, setData] = useState([]);


  useEffect(() => {
    const getData = () => {
      return fetch('http://localhost:3001', {method: 'GET'}
      ).then (res => {
        return res.json()
      }).then (element => {
        setData(element)
      })
    }
    getData();
  }, []);

  

  return (
    <div className='page-container'>
      {/* Show filter component button */}
      <button onClick={() => setShowFilter(true)} className='addFilter buttonGray' type='button'>Add Filter</button>

      {/* Filter component */}
      {showFilter === true && <Filter setShowFilter={setShowFilter} data={data} setData={setData} />}

      {/* Existing filters */}
      {data.map((mainData, i) => (
        <div key={i} className='allFilters'>
          <h4>Filter Name: {mainData.filterName}</h4>
          <table>
            <thead>
              <tr>
                <th>Criteria</th>
                <th>Condition1</th>
                <th>Condition2</th>
              </tr>
            </thead>
            <tbody>
                {mainData.criteria.map((el, i) => (
                  <tr key={i}>
                    <td>{mainData.criteria[i]}</td>
                    <td>{mainData.condition1[i]}</td>
                    <td>{mainData.condition2[i]}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <p>Selection: {mainData.select}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
