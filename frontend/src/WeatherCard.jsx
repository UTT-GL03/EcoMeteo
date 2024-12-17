import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/fr';
import './WeatherCard.css';

dayjs.extend(relativeTime);
dayjs.locale('fr');

const WeatherCard = ({ data }) => {
  const temperatureString = data?.meteo?.temperature; 
  const temperature = temperatureString ? parseInt(temperatureString.split("°")[0], 10) : null;

  const cardStyle = {
    backgroundColor: temperature !== null
      ? temperature > 15
        ? "#ff8c00"
        : temperature < 10
        ? "#1e90ff"
        : "#87ceeb"
      : "#ffffff",
  };

  return (
    <div className="card" style={cardStyle} id="WeatherCard">
      <div className="grid">
        <div className="grid-item">
          <span className="label">Température:</span>
          <span>{temperature !== null ? `${temperature}°C` : "Non disponible"}</span>
        </div>
        <div className="grid-item precipitation-container">
          <span className="label">Précipitation:</span>
          {data?.meteo?.precipitation !== "Aucun" ?
            <img visibility={data?.meteo?.precipitation == "Aucun" ? "hidden" : "visible"}
              src={data?.meteo?.precipitation ? `../public/icons/${data.meteo.precipitation}.png` : "#"} 
              alt={data?.meteo?.precipitation ? data.meteo.precipitation : "Image non disponible"} 
            /> : null
          } 
          <span>{data?.meteo?.precipitation ?? "Non disponible"}</span>
        </div>        
        <div className="grid-item">
          <span className="label">Humidité:</span>
          <span>{data?.meteo?.humidity ?? "Non disponible"}</span>
        </div>
        <div className="grid-item">
          <span className="label">Vent:</span>
          <span>{data?.meteo?.wind ?? "Non disponible"}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
