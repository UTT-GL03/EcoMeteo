import 'dayjs/locale/fr';
import './TimeSelector.css'

function TimeSelector({ date, dateChange, momentChange }) {
  return (
    <div className="container">
      <nav className='grid'>
        <button
          className="button"
          value={"2024-10-08"}
          onClick={() => dateChange("2024-10-08")}
        >
          8 octobre
        </button>
        <button
          className="button"
          value={"2024-10-09"}
          onClick={() => dateChange("2024-10-09")}
        >
          9 octobre
        </button>
        <button
          className="button"
          value={"2024-10-10"}
          onClick={() => dateChange("2024-10-10")}
        >
          10 octobre
        </button>
      </nav>
      <nav className='grid'>
        <button
          className="button"
          value={"Matin"}
          onClick={() => momentChange("matin")}
        >
          Matin
        </button>
        <button
          className="button"
          value={"Après-midi"}
          onClick={() => momentChange("après-midi")}
        >
          Après-midi
        </button>
        <button
          className="button"
          value={"Soir"}
          onClick={() => momentChange("soirée")}
        >
          Soir
        </button>
        <button
          className="button"
          value={"Nuit"}
          onClick={() => momentChange("nuit")}
        >
          Nuit
        </button>
      </nav>
    </div>
  );
}

export default TimeSelector;
