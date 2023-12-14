import React, {useState} from 'react'
import { useAuth } from '../../context/AuthContext'


import SlideShow from '../../components/SlideShow'
import Conference from '../../components/Conference'

import Filter from '../../components/Filter'
import FilterSelected from '../../components/FilterSelected'
import Result from '../../components/Result'
const Homepage = () => {
    const auth = useAuth()  
    const [showResult, setShowResult] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([]);
  return (
    <div>        
        <SlideShow/>
        <Filter
        showResult={showResult}
        setShowResult={setShowResult}
        setSelectedFilters={setSelectedFilters}
      />
      {selectedFilters.length !== 0 && (
        <FilterSelected
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      )}

      {showResult && <Conference />}
    </div>
    
  )
}

export default Homepage