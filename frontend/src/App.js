import { useState } from 'react';
import './App.css';
import Filter from './components/Filter'

function App() {
  const [showFilter, setShowFilter] = useState(false)
  return (
    <div className='page-container'>
      <button onClick={() => setShowFilter(true)} className='addFilter' type='button'>Add Filter</button>
      {showFilter === true && <Filter setShowFilter={setShowFilter}/>}
    </div>
  );
}

export default App;
