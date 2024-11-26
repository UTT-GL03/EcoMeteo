// import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/fr'

dayjs.extend(relativeTime)
dayjs.locale('fr')



function TabMeteo({ data }) {

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
                <th>{data && data.meteo && data.meteo.temperature}</th>
                <td>{data && data.meteo && data.meteo.precipitation}</td>
                <td>{data && data.meteo && data.meteo.humidity}</td>
                <td>{data && data.meteo && data.meteo.wind}</td>
                </tr>
            </tbody>
            </table>
        </main>
    )
}

export default TabMeteo