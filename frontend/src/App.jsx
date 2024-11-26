import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import DaySelector from './DaySelector';
import Header from './Header'
import TabMeteo from './TabMeteo'

function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    fetch('http://localhost:5984/ecometeo/_all_docs?include_docs=true')
     .then(x => x.json())
     .then(data => {
        setData(data);
      })
}, [])

  const [selectedCity, setSelectedCity] = useState('Paris');
  const [selectedDate, setSelectedDate] = useState("2024-10-08 00:00");

  const getCurrentDateTime = () => {
    const now = new Date();
    
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
  
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  const handleCity = (city) => {
    setSelectedCity(city); 
  };
  const handleDate = (date) => {
    setSelectedDate(date); 
  };

  return (
    <>
      <Header data={data && data} ville={selectedCity} cityChange={handleCity} selectedDate={selectedDate}/>
      <TabMeteo data={data && data} date={selectedDate} city={selectedCity}/>
      <DaySelector date={selectedDate} dateChange={handleDate}/>
    </>
  )
}

export default App
