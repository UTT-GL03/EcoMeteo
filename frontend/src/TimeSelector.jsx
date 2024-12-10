import { useState } from "react";
import 'dayjs/locale/fr';
import './TimeSelector.css';

function TimeSelector({ dateChange, momentChange }) {
  const [activeDate, setActiveDate] = useState("2024-10-08");
  const [activeMoment, setActiveMoment] = useState("matin");

  const handleDateClick = (value) => {
    setActiveDate(value);
    dateChange(value);
  };

  const handleMomentClick = (value) => {
    setActiveMoment(value);
    momentChange(value);
  };

  return (
    <div className="container">
      <nav className="grid">
        <button
          className={`button ${activeDate === "2024-10-08" ? "active" : ""}`}
          onClick={() => handleDateClick("2024-10-08")}
        >
          8 octobre
        </button>
        <button
          className={`button ${activeDate === "2024-10-09" ? "active" : ""}`}
          onClick={() => handleDateClick("2024-10-09")}
        >
          9 octobre
        </button>
        <button
          className={`button ${activeDate === "2024-10-10" ? "active" : ""}`}
          onClick={() => handleDateClick("2024-10-10")}
        >
          10 octobre
        </button>
      </nav>
      <nav className="grid">
        <button
          className={`button ${activeMoment === "matin" ? "active" : ""}`}
          onClick={() => handleMomentClick("matin")}
        >
          Matin
        </button>
        <button
          className={`button ${activeMoment === "après-midi" ? "active" : ""}`}
          onClick={() => handleMomentClick("après-midi")}
        >
          Après-midi
        </button>
        <button
          className={`button ${activeMoment === "soir" ? "active" : ""}`}
          onClick={() => momentChange("soir")}
        >
          Soir
        </button>
        <button
          className={`button ${activeMoment === "nuit" ? "active" : ""}`}
          onClick={() => handleMomentClick("nuit")}
        >
          Nuit
        </button>
      </nav>
    </div>
  );
}

export default TimeSelector;
