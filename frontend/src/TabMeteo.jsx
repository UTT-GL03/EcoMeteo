// import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/fr'
import data from './assets/sample_data.json'
import { useState } from 'react'

dayjs.extend(relativeTime)
dayjs.locale('fr')



function TabMeteo({ date, city }) {
    const param = {city: city, date: date}
    
    const getWeather = (city, date) => {
        const cityData = data.meteo.find(item => item.city === city);
        if (cityData) {
          const weather = cityData.meteo.find(item => item.date === date);
          return weather || null;
        }
        return null;
      };
    const weather = getWeather(param.city, param.date)

    return (
        <main className="container">
            <table>
            <thead>
                <tr>
                <th scope="col">Température (C°)</th>
                <th scope="col">Précipitation</th>
                <th scope="col">Humidité</th>
                <th scope="col">Vent</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th>{weather.temperature}</th>
                <td>{weather.precipitation}</td>
                <td>{weather.humidity}</td>
                <td>{weather.wind}</td>
                </tr>
            </tbody>
            </table>
        </main>
    )
}

export default TabMeteo