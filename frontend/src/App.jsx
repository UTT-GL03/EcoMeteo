import { useState, useEffect } from 'react';
import './App.css';
import DaySelector from './DaySelector';
import Header from './Header';
import WeatherCard from './WeatherCard';

function App() {
  const [data, setData] = useState({});
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('Paris');
  const [selectedDate, setSelectedDate] = useState("2024-10-08");
  const [selectedMoment, setSelectedMoment] = useState("matin");

  useEffect(() => {
      fetch('http://localhost:5984/ecometeo/_find', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          selector: { city: selectedCity, "meteo.date": selectedDate, "meteo.moment": selectedMoment },
          sort: [{ "meteo.date": "asc" }],
          limit: 1
        })
      })     
      .then(x => x.json())
      .then(data => {
          setData(data.docs[0]);
      });
  }, [selectedCity, selectedDate]);

  useEffect(() => {
    fetch('http://localhost:5984/ecometeo/_design/testCity/_view/city?reduce=true&group=true')     
    .then(x => x.json())
    .then(data => {
        const uniqueCities = [...new Set(data.rows.map(doc => doc.key))];
        setCities(uniqueCities);
      });
  }, []);

  const handleCity = (city) => {
    setSelectedCity(city);
  };

  const handleDate = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="app-container">
      <Header
        cities={cities}
        ville={selectedCity}
        cityChange={handleCity}
        selectedDate={selectedDate}
      />
      <main className="main-content">
        <WeatherCard data={data} date={selectedDate} />
        <DaySelector date={selectedDate} dateChange={handleDate} />
      </main>
    </div>
  );
}

export default App;
