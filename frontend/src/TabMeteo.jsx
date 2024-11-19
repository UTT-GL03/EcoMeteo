// import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/fr'

dayjs.extend(relativeTime)
dayjs.locale('fr')



function TabMeteo({ data, date, city }) {
    const param = {city: city, date: date}
    
    const getWeather = (city, date) => {
        if (data && data.rows) {
            const cityData = data.rows.filter(item => item.doc.city === city);
            if (cityData) {
                const weather = cityData.find(item => item.doc.meteo.date === date);
                console.log(weather);
                return weather.doc.meteo || null;
            }
            return null;
        }
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
                <th>{weather && weather.temperature}</th>
                <td>{weather && weather.precipitation}</td>
                <td>{weather && weather.humidity}</td>
                <td>{weather && weather.wind}</td>
                </tr>
            </tbody>
            </table>
        </main>
    )
}

export default TabMeteo