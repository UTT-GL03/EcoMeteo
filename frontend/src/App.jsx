import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import DaySelector from './DaySelector';
import Header from './Header'
import TabMeteo from './TabMeteo'
// import { Routes, Route } from 'react-router-dom'


function App() {

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
      <Header ville={selectedCity} cityChange={handleCity}/>
      <TabMeteo date={selectedDate} city={selectedCity}/>
      <DaySelector date={selectedDate} dateChange={handleDate}/>
    </>
  )
}

export default App
