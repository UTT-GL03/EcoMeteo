import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import DaySelector from './DaySelector';
import Header from './Header'
import TabMeteo from './TabMeteo'

function App() {

  const [data, setData] = useState({});
  const [cities, setCities] = useState([]);

  const [selectedCity, setSelectedCity] = useState('Paris');
  const [selectedDate, setSelectedDate] = useState("2024-10-08");

  useEffect(() => {

    console.log(selectedCity, selectedDate);

      fetch('http://localhost:5984/ecometeo/_find', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          selector: { city: selectedCity, "meteo.date" : selectedDate },
          limit: 1
        })
      })     
      .then(x => x.json())
      .then(data => { 
          setData(data.docs[0]);
      })
  }, [selectedCity, selectedDate]);

  useEffect(() => {
    fetch('http://localhost:5984/ecometeo/_find', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        selector: { "meteo.date" : selectedDate },
        fields: ["city"],
        limit: 1000000, // On veut tous les résultats (Ajout futur d'une table contenant une liste des villes)
      })
    })     
    .then(x => x.json())
    .then(data => {
        const uniqueCities = [...new Set(data.docs.map(doc => doc.city))];
        setCities(uniqueCities);
    })
  }, []);


  const handleCity = (city) => {
    setSelectedCity(city); 
  };
  const handleDate = (date) => {
    setSelectedDate(date); 
  };

  return (
    <>
      <Header cities={cities && cities} ville={selectedCity} cityChange={handleCity} selectedDate={selectedDate}/>
      <TabMeteo data={data && data} date={selectedDate} city={selectedCity}/>
      <DaySelector date={selectedDate} dateChange={handleDate}/>
    </>
  )
}

export default App
